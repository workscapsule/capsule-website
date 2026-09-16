/**
 * Static Asset Cache-Busting Utility
 * 
 * Browsers aggressively store static files from `/public` in disk cache.
 * When replacement images are uploaded with identical file paths, browsers
 * in normal mode keep showing the stale cached copies until cache is busted.
 * 
 * Appending this version string forces all browsers to fetch the newly updated
 * images immediately without requiring users to clear their browser cache.
 */
export const ASSET_VERSION = 'v=20260917-01';

export const withAssetVersion = (url: string): string => {
  if (!url) return url;
  // Ignore external URLs (e.g. Unsplash, external CDNs)
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${ASSET_VERSION}`;
};
