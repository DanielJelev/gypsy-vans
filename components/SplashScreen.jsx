'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function SplashScreen({ children }) {
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(true);
  const dismissed = useRef(false);

  useEffect(() => {
    const dismiss = () => {
      if (dismissed.current) return;
      dismissed.current = true;
      setLoaded(true);
      setTimeout(() => setVisible(false), 500);
    };

    const onHeroReady = () => dismiss();

    window.addEventListener('heroReady', onHeroReady);

    // Fallback: dismiss after 1.5 seconds so users aren't stuck
    const timeout = setTimeout(dismiss, 1500);

    return () => {
      window.removeEventListener('heroReady', onHeroReady);
      clearTimeout(timeout);
    };
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
      <div className="splash-content">
        {children}
      </div>
    </>
  );
}
