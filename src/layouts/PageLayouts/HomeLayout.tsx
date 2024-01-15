import React from "react";

interface IProps {
  children?: any;
}

const HomeLayout = React.forwardRef<HTMLDivElement, IProps>(
  ({ children }, ref) => {
    return (
      <>
        <div
          ref={ref}
          className={
            "dark:bg-organic dark:text-lime bg-lime text-organic md:min-h-screen transition-colors ease-in-out duration-500"
          }
        >
          {children}
        </div>
      </>
    );
  },
);

export default HomeLayout;
