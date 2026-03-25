'use client';

import { ParallaxProvider } from 'react-scroll-parallax';
import SplashScreen from '../components/SplashScreen';

export function Providers({ children }) {
  return (
    <ParallaxProvider>
      <SplashScreen>{children}</SplashScreen>
    </ParallaxProvider>
  );
}
