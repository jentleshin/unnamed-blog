import { useOpacity } from "../../hooks/useOpacity";
import React from "react";
import { combineRefs, combineClasses } from "../../utils/utils";
import Text from "../Text";
interface IProps {
  children?: any;
}

interface IChildProps {
  child: any;
  isSticky: boolean;
}

const ChildComponent = ({ child, isSticky }: IChildProps) => {
  const [contentRef, opacity] = useOpacity<HTMLDivElement>();

  return (
    <div
      ref={contentRef}
      className={combineClasses(
        "w-full",
        "transition-opacity ease-in-out duration-500",
        opacity ? "opacity-1" : "opacity-0",
        isSticky ? "sticky top-0 z-20" : ""
      )}
    >
      {child}
    </div>
  );
};

const Section = ({ children }: IProps) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <section className="flex flex-wrap">
      {childrenArray.map((child, index) => (
        <ChildComponent key={index} child={child} isSticky={index === 0} />
      ))}
      <div className="w-full h-[120px]" />
    </section>
  );
};

export default Section;
