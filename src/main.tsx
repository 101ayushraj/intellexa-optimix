
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Declare fbq as a global function
declare global {
  interface Window {
    fbq: any;
  }
}

// Ensure Facebook Pixel is initialized correctly
// This will fire an additional PageView event on initial page load
if (window.fbq) {
  try {
    // Force a PageView event immediately
    window.fbq('track', 'PageView');
    console.log('Facebook Pixel PageView event triggered on initial load');
  } catch (error) {
    console.error('Error firing Facebook Pixel event:', error);
  }
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
