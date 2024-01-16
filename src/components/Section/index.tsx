import Header from "../Header";
import React from "react";

interface IProps {
  children?: any;
  heading?: string;
}

const Section = React.forwardRef<HTMLElement, IProps>(
  ({ children, heading = "" }, ref) => {
    return (
      <section
        ref={ref}
        data-heading={heading}
        className="flex flex-wrap w-full"
      >
        <Header>{heading}</Header>
        {children}
        <div className="h-[1000px]" />
      </section>
    );
  }
);
Section.displayName = "Section";
export default Section;
