import { useRef, useState, useEffect } from "react";
import { combineClasses } from "../utils/utils";

let sharedObserver: IntersectionObserver | null = null;

const initSharedObserver = () => {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetElement = entry.target;
          const isIntersecting = entry.isIntersecting;
          targetElement.dispatchEvent(
            new CustomEvent("intersectChange", { detail: isIntersecting }),
          );
        });
      },
      {
        rootMargin: `0px 0px ${-window.innerHeight / 10}px 0px`,
        threshold: 1,
      },
    );
  }
};

export const useOpacity = <T extends HTMLElement>(): [
  React.RefObject<T>,
  boolean,
] => {
  const [opacity, setOpacity] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    initSharedObserver();

    const element = ref.current;
    if (element) {
      // Listen for custom visibility change events
      const handleVisibilityChange: EventListener = (e) => {
        setOpacity((e as CustomEvent).detail);
      };
      element.addEventListener("intersectChange", handleVisibilityChange);
      sharedObserver?.observe(element);

      return () => {
        sharedObserver?.unobserve(element);
        element.removeEventListener("intersectChange", handleVisibilityChange);
      };
    }
  }, [ref]);

  return [ref, opacity];
};
