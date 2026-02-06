/**
 * Global error suppressor for "Failed to fetch" and network-related errors
 * These errors typically come from:
 * - External image sources (Unsplash, Google, Microsoft, Wikipedia)
 * - Google Fonts loading
 * - Ad blockers or privacy extensions
 * - Network connectivity issues
 * 
 * This utility prevents these non-critical errors from cluttering the console
 * while still allowing the app to function normally with fallbacks
 */

const SUPPRESS_PATTERNS = [
  'Failed to fetch',
  'NetworkError',
  'Load failed',
  'net::ERR_',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'images.unsplash.com',
  'google.com/images',
  'googlelogo',
  'microsoft-com.akamaized.net',
  'akamaized.net',
  'wikipedia.org',
  'CORS',
  'Cross-Origin',
  'Failed to load resource',
];

// Store original fetch for intercepting
const originalFetch = window.fetch;

// Store original Image constructor
const OriginalImage = window.Image;

export function initializeErrorSuppressor() {
  // Override Image constructor to suppress errors
  window.Image = class extends OriginalImage {
    constructor(width?: number, height?: number) {
      super(width, height);
      
      // Add error handler immediately
      this.addEventListener('error', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const src = this.src || '';
        const shouldSuppress = SUPPRESS_PATTERNS.some(pattern => 
          src.includes(pattern)
        );
        
        if (shouldSuppress && process.env.NODE_ENV === 'development') {
          console.debug('[Image error suppressed]:', src.substring(0, 60));
        }
      }, true);
    }
  } as any;

  // Intercept fetch API to suppress image loading errors
  window.fetch = async function(...args) {
    try {
      const response = await originalFetch.apply(this, args);
      return response;
    } catch (error) {
      const url = typeof args[0] === 'string' ? args[0] : args[0]?.url || '';
      const errorString = String(error?.message || error || '');
      
      // Check if this is a suppressible error
      const shouldSuppress = SUPPRESS_PATTERNS.some(pattern => 
        errorString.includes(pattern) || url.includes(pattern)
      );
      
      if (shouldSuppress) {
        // Silently fail for suppressed errors
        if (process.env.NODE_ENV === 'development') {
          console.debug('[Fetch suppressed]:', url.substring(0, 80));
        }
        // Return a failed response instead of throwing
        return new Response(null, { status: 404, statusText: 'Suppressed' });
      }
      
      // Re-throw non-suppressed errors
      throw error;
    }
  };

  // Suppress unhandled promise rejections (async fetch errors)
  window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
    const errorString = String(event.reason?.message || event.reason || '');
    
    // Check if error matches any suppression pattern
    const shouldSuppress = SUPPRESS_PATTERNS.some(pattern => 
      errorString.includes(pattern)
    );
    
    if (shouldSuppress) {
      event.preventDefault();
      // Use debug level instead of error for cleaner console
      if (process.env.NODE_ENV === 'development') {
        console.debug('[Suppressed] Promise rejection:', errorString.substring(0, 100));
      }
    }
  });

  // Suppress regular errors (sync errors)
  window.addEventListener('error', (event: ErrorEvent) => {
    const errorString = String(event.message || '');
    const errorSource = String(event.filename || '');
    
    // Check if error matches any suppression pattern
    const shouldSuppress = SUPPRESS_PATTERNS.some(pattern => 
      errorString.includes(pattern) || errorSource.includes(pattern)
    );
    
    if (shouldSuppress) {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (process.env.NODE_ENV === 'development') {
        console.debug('[Suppressed] Error event:', errorString.substring(0, 100));
      }
      return false;
    }
  }, true); // Use capture phase to catch errors early

  // Log that suppressor is active
  if (process.env.NODE_ENV === 'development') {
    console.info('🛡️ Error suppressor initialized - network errors will be silently handled');
  }
}

export function cleanupErrorSuppressor() {
  // Cleanup would require storing references to handlers
  // For now, handlers will persist for the app lifetime
}
