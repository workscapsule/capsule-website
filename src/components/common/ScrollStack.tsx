import React, { useLayoutEffect, useRef, useCallback, useEffect } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className="scroll-stack-card-wrapper">
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
  </div>
);

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 80,
  itemScale = 0.025,
  itemStackDistance = 16,
  baseScale = 0.88,
  useWindowScroll = true,
  onStackComplete
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const wrappersRef = useRef<HTMLElement[]>([]);
  const cardsRef = useRef<HTMLElement[]>([]);
  const stickyTopsRef = useRef<number[]>([]);
  const isUpdatingRef = useRef(false);
  const lastScalesRef = useRef<number[]>([]);

  // Calculate responsive sticky tops based on viewport width
  const getResponsiveOffset = useCallback((index: number, total: number) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const isTablet = typeof window !== 'undefined' && window.innerWidth >= 640 && window.innerWidth < 1024;

    const baseTop = isMobile ? 68 : isTablet ? 76 : 86;
    // On mobile, clamp the maximum step offset to avoid pushing card bottom off screen
    const step = isMobile ? Math.min(index, 4) * 8 : isTablet ? index * 12 : index * itemStackDistance;
    return baseTop + step;
  }, [itemStackDistance]);

  const updateCardTransforms = useCallback(() => {
    if (!wrappersRef.current.length || !cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;
    const n = wrappersRef.current.length;

    // Get current bounding client rect top for each wrapper
    const currentTops: number[] = [];
    const isPinnedList: boolean[] = [];

    for (let i = 0; i < n; i++) {
      const wrapper = wrappersRef.current[i];
      if (!wrapper) {
        currentTops.push(9999);
        isPinnedList.push(false);
        continue;
      }
      const rect = wrapper.getBoundingClientRect();
      const stickyTop = stickyTopsRef.current[i] || getResponsiveOffset(i, n);
      currentTops.push(rect.top);
      // Considered pinned if wrapper's top is within 2px of its sticky top
      isPinnedList.push(rect.top <= stickyTop + 2);
    }

    // Now compute progressive scale & depth for each card based on subsequent cards resting on top
    for (let i = 0; i < n; i++) {
      const card = cardsRef.current[i];
      if (!card) continue;

      let depthFactor = 0;

      // Check all cards above card i (i.e. j > i)
      for (let j = i + 1; j < n; j++) {
        const jStickyTop = stickyTopsRef.current[j] || getResponsiveOffset(j, n);
        const jCurrentTop = currentTops[j];

        if (jCurrentTop <= jStickyTop + 2) {
          // Card j has fully reached sticky position on top of card i
          depthFactor += 1;
        } else if (jCurrentTop < jStickyTop + 260) {
          // Card j is smoothly sliding into position
          const progress = 1 - (jCurrentTop - jStickyTop) / 260;
          depthFactor += Math.max(0, Math.min(1, progress));
        }
      }

      // Calculate target scale
      const targetScale = Math.max(baseScale, 1 - depthFactor * itemScale);
      const roundedScale = Math.round(targetScale * 1000) / 1000;
      const lastScale = lastScalesRef.current[i];

      if (lastScale === undefined || Math.abs(lastScale - roundedScale) > 0.001) {
        lastScalesRef.current[i] = roundedScale;

        // Apply hardware-accelerated 3D scale
        card.style.transform = `scale3d(${roundedScale}, ${roundedScale}, 1)`;

        // Apply subtle depth shading on buried cards for tactile realism
        if (depthFactor > 0.05) {
          const brightness = Math.max(0.85, 1 - depthFactor * 0.035);
          const opacity = Math.max(0.72, 1 - depthFactor * 0.045);
          card.style.filter = `brightness(${Math.round(brightness * 100) / 100})`;
          card.style.opacity = `${Math.round(opacity * 100) / 100}`;
          card.classList.add('is-stacked');
        } else {
          card.style.filter = '';
          card.style.opacity = '1';
          card.classList.remove('is-stacked');
        }
      }

      // Handle stack completion trigger on the last card
      if (i === n - 1) {
        const lastPinned = isPinnedList[n - 1];
        if (lastPinned && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!lastPinned && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    }

    isUpdatingRef.current = false;
  }, [baseScale, itemScale, getResponsiveOffset, onStackComplete]);

  const scheduleUpdate = useCallback(() => {
    if (animationFrameRef.current) return;
    animationFrameRef.current = requestAnimationFrame(() => {
      animationFrameRef.current = null;
      updateCardTransforms();
    });
  }, [updateCardTransforms]);

  // Setup layout, assign sticky top and z-indexes
  const applyLayout = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const wrappers = Array.from(container.querySelectorAll('.scroll-stack-card-wrapper')) as HTMLElement[];
    const cards = Array.from(container.querySelectorAll('.scroll-stack-card')) as HTMLElement[];

    wrappersRef.current = wrappers;
    cardsRef.current = cards;

    const n = wrappers.length;
    const isMobile = window.innerWidth < 640;
    const currentDistance = isMobile ? Math.min(itemDistance, 60) : itemDistance;

    stickyTopsRef.current = wrappers.map((_, i) => getResponsiveOffset(i, n));
    lastScalesRef.current = new Array(n).fill(1);

    wrappers.forEach((wrapper, i) => {
      const topPx = stickyTopsRef.current[i];
      wrapper.style.top = `${topPx}px`;
      wrapper.style.zIndex = `${10 + i}`;
      if (i < n - 1) {
        wrapper.style.marginBottom = `${currentDistance}px`;
      } else {
        wrapper.style.marginBottom = '0px';
      }
    });

    scheduleUpdate();
  }, [itemDistance, getResponsiveOffset, scheduleUpdate]);

  useLayoutEffect(() => {
    applyLayout();

    // Smooth Lenis integration
    let lenis: Lenis | null = null;
    try {
      lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.2
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      };
      const rafId = requestAnimationFrame(raf);

      lenis.on('scroll', scheduleUpdate);
      lenisRef.current = lenis;

      return () => {
        cancelAnimationFrame(rafId);
        lenis?.destroy();
      };
    } catch {
      // If Lenis cannot be instantiated, fallback seamlessly to native scroll
    }

    const onScroll = () => scheduleUpdate();
    const onResize = () => {
      applyLayout();
      scheduleUpdate();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [applyLayout, scheduleUpdate]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={containerRef}>
      <div className="scroll-stack-inner">
        {children}
        {/* Spacer so the last card releases smoothly */}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;
