import React from "react";

interface IProps {
  children?: any;
}

const Section = ({ children }: IProps) => {
  return (
    <section>
      {children}
      <div className="w-full h-[120px]" />
    </section>
  );
};

export default Section;
