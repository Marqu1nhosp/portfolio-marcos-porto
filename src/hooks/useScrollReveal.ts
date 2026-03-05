import { useEffect, useRef } from "react";

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(el);
    const timeout = setTimeout(() => {
      if (el.style.opacity === "0") {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return ref;
};
