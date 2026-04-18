'use client';

import { useState, useEffect } from 'react';

const COOKIE_KEY = 'gypsy_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [dismissing, setDismissing] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Small delay so it doesn't compete with splash screen
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = (type) => {
    localStorage.setItem(COOKIE_KEY, type);
    setDismissing(true);
    setTimeout(() => setVisible(false), 500);
  };

  const accept = () => dismiss('accepted');
  const decline = () => dismiss('declined');

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[9998] ${
        dismissing ? 'animate-slideDown' : 'animate-slideUp'
      }`}
      role="dialog"
      aria-label="Бисквитки"
    >
      <div className="bg-cream/95 backdrop-blur-md border border-sand rounded-l shadow-boho p-6 md:p-7">
        <h3 className="serif-head text-xl text-earth mb-3">
          🍪 Използваме бисквитки
        </h3>
        <p className="text-cocoa/80 text-sm leading-relaxed mb-5">
          Този уебсайт използва бисквитки, за да подобри вашето потребителско
          изживяване. Бисквитките ни помагат да анализираме трафика и да
          персонализираме съдържанието. Съгласно GDPR (Общ регламент за защита
          на данните) и ЗЗЛД, ние обработваме вашите данни само с вашето
          съгласие. Можете да оттеглите съгласието си по всяко време.
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={accept}
            className="flex-1 py-2.5 rounded-full bg-orange border border-orange text-white text-sm tracking-widest uppercase transition-opacity hover:opacity-90"
          >
            Приемам
          </button>
          <button
            onClick={decline}
            className="flex-1 py-2.5 rounded-full bg-transparent border border-cocoa/30 text-cocoa text-sm tracking-widest uppercase transition-colors hover:border-cocoa/60"
          >
            Отказвам
          </button>
        </div>
      </div>
    </div>
  );
}
