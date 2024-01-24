export {};
// "use client";

// import { useRef, useEffect, useState } from "react";
// import { useRecoilState } from "recoil";
// import { sharedObserverState } from "./atom";
// import { useToggleView, useChangePage } from "./useAnimation";

// export const useOpacityObserver = <T extends HTMLElement>(
//   initValue: T | null
// ): React.RefObject<T> => {
//   const viewportRef = useRef<T>(initValue);
//   const [currentPage, changePage, isPageChanged] = useChangePage();
//   const [currentView, toggleView, isViewChanged] = useToggleView();
//   const [sharedObserver, setSharedObserver] =
//     useRecoilState(sharedObserverState);
//   useEffect(() => {
//     const viewport = viewportRef.current;
//     if (viewport && !sharedObserver) {
//       const newObserver = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             const targetElement = entry.target;
//             const isIntersecting = entry.isIntersecting;
//             targetElement.dispatchEvent(
//               new CustomEvent("intersectChange", { detail: isIntersecting })
//             );
//           });
//         },
//         {
//           root: viewport,
//           rootMargin: `0px 0px -100px 0px`,
//           threshold: 0,
//         }
//       );
//       setSharedObserver(newObserver);
//       console.log("sharedObserver");
//       console.log(sharedObserver);
//     }
//     return () => {
//       sharedObserver?.disconnect();
//       setSharedObserver(null);
//     };
//   }, [isViewChanged, isPageChanged]);
//   return viewportRef;
// };

// export const useOpacity = <T extends HTMLElement>(): [
//   React.RefObject<T>,
//   boolean
// ] => {
//   const [opacity, setOpacity] = useState(false);
//   const [sharedObserver] = useRecoilState(sharedObserverState);
//   const contentRef = useRef<T>(null);

//   useEffect(() => {
//     const content = contentRef.current;
//     if (content) {
//       const handleVisibilityChange: EventListener = (e) => {
//         setOpacity((e as CustomEvent).detail);
//       };
//       sharedObserver?.observe(content);
//       content.addEventListener("intersectChange", handleVisibilityChange);
//       return () => {
//         sharedObserver?.unobserve(content);
//         content.removeEventListener("intersectChange", handleVisibilityChange);
//       };
//     }
//   }, [contentRef, sharedObserver]);

//   return [contentRef, opacity];
// };
