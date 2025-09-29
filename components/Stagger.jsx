'use client';
import { cloneElement } from 'react';

export function Stagger({ children, step = 80 }) {
  const kids = Array.isArray(children) ? children : [children];
  return kids.map((child, i) => {
    if (!child || typeof child !== 'object') return child;
    return cloneElement(child, { delay: (child.props?.delay ?? 0) + i * step, key: i });
  });
}
