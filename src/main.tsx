
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

// Function to safely fire Facebook Pixel events
const safeFirePixelEvent = (eventName: string, params?: object) => {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('track', eventName, params);
      console.log(`Facebook Pixel ${eventName} event fired successfully`, params || '');
      return true;
    } catch (error) {
      console.error(`Error firing Facebook Pixel ${eventName} event:`, error);
      return false;
    }
  } else {
    console.warn('Facebook Pixel not available yet');
    return false;
  }
};

// Wait for DOM to be fully loaded before firing the initial PageView
document.addEventListener('DOMContentLoaded', () => {
  // Try immediately
  let success = safeFirePixelEvent('PageView');
  
  // If not successful, try again after a short delay
  if (!success) {
    setTimeout(() => {
      safeFirePixelEvent('PageView');
    }, 1000);
  }
});

// Backup - try again when window fully loads
window.addEventListener('load', () => {
  safeFirePixelEvent('PageView');
});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
