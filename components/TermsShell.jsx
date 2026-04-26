'use client';

import { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function TermsShell({ children }) {
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <Header termsOpen={termsOpen} setTermsOpen={setTermsOpen} />
      {children}
      <Footer termsOpen={termsOpen} setTermsOpen={setTermsOpen} />
    </>
  );
}
