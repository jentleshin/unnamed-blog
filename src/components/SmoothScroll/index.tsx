"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

interface IProps {
  children?: any;
}

const SmoothScroll = ({ children }: IProps) => {
  return (
    <>
      <ReactLenis root>{children}</ReactLenis>
    </>
  );
};
export default SmoothScroll;
