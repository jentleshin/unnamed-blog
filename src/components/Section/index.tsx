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
        className="flex flex-wrap w-full h-fit"
      >
        <Header>{heading}</Header>
        {children}
        <div className="h-[1000px]" />
      </section>
    );
  },
);

export default Section;