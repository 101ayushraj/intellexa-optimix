
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Ensure Facebook Pixel is properly initialized
    if (window.fbq) {
      // Force PageView event on every route change
      window.fbq('track', 'PageView');
      console.log('Facebook Pixel PageView event triggered on route change to:', location.pathname);
    } else {
      console.error('Facebook Pixel not initialized properly');
    }

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
