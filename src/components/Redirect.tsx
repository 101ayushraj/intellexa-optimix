
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Redirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Listen for the beforeunload event (refresh)
    const handleBeforeUnload = () => {
      // We can't prevent navigation here, but we can set a flag in sessionStorage
      sessionStorage.setItem('wasRefreshed', 'true');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Check if we're coming from a refresh
    const wasRefreshed = sessionStorage.getItem('wasRefreshed') === 'true';
    
    // If this is a page load after refresh and we're not on the homepage,
    // and we're getting a 404 error, redirect to homepage
    if (wasRefreshed && location.pathname !== '/') {
      // Clear the flag
      sessionStorage.removeItem('wasRefreshed');
      
      // Log the redirect
      console.log('Redirecting from 404 after page refresh:', location.pathname);
      
      // Redirect to homepage
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
