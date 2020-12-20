import React, { useState, useEffect } from 'react';

export const useScrollTop = (initialState = false) => {
  const [scrollToTop, setScrollToTop] = useState(initialState);

  useEffect(() => {
    scrollToTop && setScrollToTop(false);
    window.scrollTo(0, 0);
  }, [scrollToTop, setScrollToTop]);

  return setScrollToTop;
};
