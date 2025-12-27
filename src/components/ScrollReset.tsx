import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollReset() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // "0, 0" means top left. 
    // useLayoutEffect runs BEFORE the browser paints the screen.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}