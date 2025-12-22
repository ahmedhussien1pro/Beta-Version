import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-CMGVN78MHV', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
  return (
    <div className='App'>
      {/* <Routes> */}
      <AppRoutes />
      {/* </Routes> */}
    </div>
  );
}

export default App;
