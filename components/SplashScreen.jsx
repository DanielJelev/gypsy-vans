'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SplashScreen({ children }) {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
      // Wait for fade-out animation to finish before unmounting
      setTimeout(() => setVisible(false), 1000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {visible && (
        <div
          className={`splash-screen ${loaded ? 'splash-fade-out' : ''}`}
          aria-hidden={loaded}
        >
          <div className="splash-logo-wrapper">
            <Image
              src="/Logo-04.svg"
              alt="Gypsy Vans"
              width={120}
              height={120}
              className="splash-logo-spin"
              priority
            />
          </div>
        </div>
      )}
      <div
        className={`splash-content ${loaded ? 'splash-content-visible' : ''}`}
      >
        {children}
      </div>
    </>
  );
}
