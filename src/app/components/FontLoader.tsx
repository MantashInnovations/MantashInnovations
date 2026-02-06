import { useEffect } from 'react';

/**
 * Component to load Google Fonts with proper error handling
 * Prevents "Failed to fetch" errors from appearing in console
 */
export function FontLoader() {
  useEffect(() => {
    // Preconnect to Google Fonts for faster loading
    const preconnectLink1 = document.createElement('link');
    preconnectLink1.rel = 'preconnect';
    preconnectLink1.href = 'https://fonts.googleapis.com';
    
    const preconnectLink2 = document.createElement('link');
    preconnectLink2.rel = 'preconnect';
    preconnectLink2.href = 'https://fonts.gstatic.com';
    preconnectLink2.crossOrigin = 'anonymous';
    
    // Add to head if not already present
    if (!document.querySelector('link[href="https://fonts.googleapis.com"]')) {
      document.head.appendChild(preconnectLink1);
    }
    if (!document.querySelector('link[href="https://fonts.gstatic.com"]')) {
      document.head.appendChild(preconnectLink2);
    }

    // Try to load fonts, but don't fail if they don't load
    const loadFonts = async () => {
      try {
        if ('fonts' in document) {
          // Check if fonts are already loaded
          await Promise.race([
            document.fonts.ready,
            new Promise((resolve) => setTimeout(resolve, 3000)) // 3 second timeout
          ]);
        }
      } catch (error) {
        // Silently fail - system fonts will be used instead
        console.debug('Font loading timeout or error - using fallback fonts');
      }
    };

    loadFonts();
  }, []);

  return null;
}
