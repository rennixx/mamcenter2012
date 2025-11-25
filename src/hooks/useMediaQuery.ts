import { useState, useEffect } from 'react';
import { BREAKPOINTS, type BreakpointKey } from '../constants';

export const useMediaQuery = (breakpoint: BreakpointKey) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${BREAKPOINTS[breakpoint]}px)`;
    const media = window.matchMedia(query);
    
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    
    return () => media.removeEventListener('change', listener);
  }, [breakpoint, matches]);

  return matches;
};
