"use client";

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    // "0, 0" means top left. 
    // useLayoutEffect runs BEFORE the browser paints the screen.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}