import { useEffect, useRef } from 'react';

export function useScrollAnimate() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const el = ref.current;
    if (el) {
      const targets = el.querySelectorAll('.scroll-animate');
      targets.forEach((target) => observer.observe(target));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
