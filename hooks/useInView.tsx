'use client';

import { useEffect, useRef, useState, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number | number[];
  margin?: string;
  triggerOnce?: boolean;
  root?: RefObject<Element | null>;
}

export function useInView(options: UseInViewOptions = {}) {
  const {
    threshold = 0.1,
    margin = '0px',
    triggerOnce = false,
    root,
  } = options;

  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          setInView(true);
          if (triggerOnce) observer.unobserve(currentRef);
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      {
        threshold,
        rootMargin: margin,
        root: root?.current ?? undefined,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [threshold, margin, triggerOnce, root]);

  return { ref, inView };
}