import { useRef, useState, useEffect } from "react";
let sharedObserver: IntersectionObserver | null = null;

export const useOpacityObserver = <T extends HTMLElement>(
  initValue: T | null
): React.RefObject<T> => {
  const viewportRef = useRef<T>(initValue);
  useEffect(() => {
    const viewport = viewportRef.current;
    if (viewport && !sharedObserver) {
      console.log("????");
      sharedObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const targetElement = entry.target;
            const isIntersecting = entry.isIntersecting;
            targetElement.dispatchEvent(
              new CustomEvent("intersectChange", { detail: isIntersecting })
            );
          });
        },
        {
          root: viewport,
          rootMargin: `0px 0px -100px 0px`,
          threshold: 0,
        }
      );
    }
    console.log(viewport);
    console.log(sharedObserver);
    return () => {
      sharedObserver = null;
    };
  });
  return viewportRef;
};

export const useOpacity = <T extends HTMLElement>(): [
  React.RefObject<T>,
  boolean
] => {
  const [opacity, setOpacity] = useState(false);
  const contentRef = useRef<T>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      console.log("jhi");
      console.log(sharedObserver);
      // Listen for custom visibility change events
      const handleVisibilityChange: EventListener = (e) => {
        setOpacity((e as CustomEvent).detail);
      };
      sharedObserver?.observe(content);
      content.addEventListener("intersectChange", handleVisibilityChange);
      return () => {
        sharedObserver?.unobserve(content);
        content.removeEventListener("intersectChange", handleVisibilityChange);
      };
    }
  }, [sharedObserver]);

  return [contentRef, opacity];
};
