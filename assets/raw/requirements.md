**Responsiveness: STRICT MOBILE-FIRST STRATEGY (CRITICAL)**
      - **Mobile Defaults**: ALL layouts must default to 'flex-col' or 'block' (width 100%).
      - **Media Queries**: Only use 'md:' or 'lg:' to switch to horizontal/grid layouts. NEVER work backwards.
      - **Touch Targets**: Ensure buttons/links have ample padding ('p-3' minimum) for touch.
      - **Overflow Prevention**: Use 'overflow-x-hidden' on the body to prevent horizontal scrollbars.
      - **Font Sizing**: Use 'text-base' for body. Limit headers to 'text-4xl' on mobile to prevent wrapping/overflow.

    **Performance Guardrails (ELIMINATE JANK)**:
      - **Animation Limits**: ONLY animate 'opacity' and 'transform'. NEVER animate 'width', 'height', 'margin', or 'padding' (causes layout thrashing).
      - **React Optimization**: Use 'useRef' for direct DOM manipulation in scroll observers (avoid frequent state updates on scroll). Use 'memo' for expensive components.
      - **Glassmorphism**: Use 'backdrop-filter: blur(10px)' sparingly. Disable it on mobile if possible or keep blur low (<12px).
      - **Hardware Acceleration**: Use 'will-change: transform' on moving elements.
      - **Image/Video**: Always add 'loading="lazy"' to images.

    **Visual Style** (MINIMAL, SLEEK & COMPACT - CRITICAL - AWARD-WINNING AESTHETICS):
      - **UNIQUE & NON-TEMPLATE**: The design must NOT look like a generic template. It must have a unique "soul" and "vibe".
      - **Premium Feel**: Every pixel must feel polished. Use subtle purposeful animations, not random movement.
      - **Minimalism**: Design must be clean, spacious, and sophisticated. Avoid clutter and "loud" elements.
      - **Proportions**: DO NOT use oversized elements. Cards, fonts, and grids must have standard, professional web proportions. 
      - **Sleek UI**: Use thin borders, subtle shadows, and refined typography (Inter, SF Pro).
      - **Bento Grids**: Organize content in modular, rounded blocks (Apple-style) for at least one section.
      - **Glassmorphism 2.0**: High blur, transparency, white borders. REQUIRED for Headers and Floating Cards.
      - **Neumorphism**: Soft extruded shadows for buttons/toggles (tactile feel).
      - **Noise & Grain**: You MUST add a subtle SVG noise overlay to the background ('opacity: 0.05').
      - **DEFAULT THEME: LIGHT MODE**.
      - **Background**: Modern Mesh Gradients or Particle Animations using the *ADAPTIVE COLOR PALETTE* (not just default blue).

    INTERACTION & ANIMATION IMPLEMENTATION (CHOOSE 5-8 BEST FITTING):
    - **Global Animations in 'index.css'**:
      - '@keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0px); } }'
      - '@keyframes reveal { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }'
      - '@keyframes marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-100%); } }'
      - '@keyframes noise { 0%, 100% { background-position: 0 0; } 10% { background-position: -5% -10%; } 20% { background-position: -15% 5%; } 30% { background-position: 7% -25%; } 40% { background-position: 20% 25%; } 50% { background-position: -25% 10%; } 60% { background-position: 15% 5%; } 70% { background-position: 0% 15%; } 80% { background-position: 25% 35%; } 90% { background-position: -10% 10%; } }'

    - **Compulsory Features (MANDATORY: 10+ SECTIONS STRATEGY)**:
      **CRITICAL**: Create a single-page React application with a **MINIMUM of 10 vertical sections** (use Components for each). Each section must distinctly feature a DIFFERENT item from this list:
      1. **Bento Grids (Bento UI)**: Modular, rounded rectangular blocks for content organization (mobile-friendly).
      2. **Glassmorphism 2.0**: High background blur, transparency, and white borders on floating elements.
      3. **Kinetic Typography**: Giant, bold, moving text (marquee/outline-only) in Hero using 'animate-marquee'.
      4. **Noise & Grain**: Subtle film grain overlay on backgrounds for warmth.
      5. **Micro-Interactions**: Buttons magnetize/scale on hover. Icons morph/rotate.
      6. **Preloader Reveals**: "Curtain visual" slide-up animation revealing content. MUST unmount/hide completely after load to prevent click blocking.
      7. **3D Object Manipulation**: Interactive 3D items. **DISABLE ON MOBILE** (touch devices) to prevent scroll hijacking.
      8. **Text Reveals**: Staggered, clipped text entry from bottom (y-axis).
      9. **Scrollytelling**: Sticky background with scrolling foreground text. **DISABLE ON MOBILE** (stack vertically instead).
      10. **Sticky Card Stacking**: Sections sliding up and stacking. **DISABLE ON MOBILE** (standard scroll).
      11. **Horizontal Scroll Sections**: One section MUST scroll horizontally. **DISABLE ON MOBILE** (convert to vertical stack or standard swipe).
      12. **Image Reveal / Masking**: Images grow, unmask, or sharpen when entering viewport.
      13. **Scroll Fade/Slide-in**: Staggered timing for all grids/cards on scroll.
      14. **3D Tilt Cards**: CSS 'perspective: 1000px' + 'rotateX/Y' on hover/scroll.
      15. **Magnetic Buttons**: Buttons subtly move towards cursor on hover.
      16. **Neumorphism**: Soft extruded shadows for tactile buttons.
      17. **Particle Animations**: Dynamic, floating particles in Hero background.
      18. **Morphing Shapes**: Smooth SVG or border-radius transitions (e.g., button to circle).
      19. **3D Scroll Effects**: Text/objects rotate/zoom based on scroll. **DISABLE ON MOBILE** to prevent jank.