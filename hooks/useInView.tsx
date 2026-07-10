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

        setInView(isIntersecting);

        // Unobserve if triggerOnce is true and it became visible
        if (isIntersecting && triggerOnce) {
          observer.unobserve(currentRef);
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