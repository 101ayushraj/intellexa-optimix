
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Function to safely fire Facebook Pixel events
    const firePageView = () => {
      if (typeof window !== 'undefined' && window.fbq) {
        try {
          window.fbq('track', 'PageView');
          console.log('Facebook Pixel PageView event fired on route change to:', location.pathname);
        } catch (error) {
          console.error('Error firing Facebook Pixel PageView event:', error);
        }
      } else {
        console.warn('Facebook Pixel not available on route change');
        
        // Retry after a short delay if fbq is not available
        setTimeout(() => {
          if (window.fbq) {
            window.fbq('track', 'PageView');
            console.log('Facebook Pixel PageView event fired on retry');
          } else {
            console.error('Facebook Pixel still not available after retry');
          }
        }, 1500);
      }
    };

    // Fire PageView event on route change
    firePageView();

    // Listen for the beforeunload event (refresh)
    const handleBeforeUnload = () => {
      // We can't prevent navigation here, but we can set a flag in sessionStorage
      sessionStorage.setItem('wasRefreshed', 'true');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Check if we're coming from a refresh
    const wasRefreshed = sessionStorage.getItem('wasRefreshed') === 'true';
    
    // Clear the flag immediately to prevent issues
    sessionStorage.removeItem('wasRefreshed');
    
    // Always redirect to home if we're on a non-root page after refresh
    // OR if we're on the success page (regardless of refresh)
    if ((wasRefreshed && location.pathname !== '/') || 
        location.pathname.includes('success')) {
      
      // Log the redirect
      console.log('Redirecting to homepage from:', location.pathname);
      
      // Redirect to homepage immediately
      navigate('/', { replace: true });
    }

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigate, location.pathname]);

  // This component doesn't render anything
  return null;
};

export default Redirect;
