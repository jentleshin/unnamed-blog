import React from "react";
import Home from "../../../pages";
import { combineClasses } from "../../utils/utils";

interface IProps {
  children?: any;
}

const HomeLayout = React.forwardRef<HTMLDivElement, IProps>(
  ({ children }, ref) => {
    return (
      <>
        <div
          ref={ref}
          className={combineClasses(
            "dark:bg-organic dark:text-lime bg-lime text-organic",
            "h-screen w-screen",
            "flex flex-row",
            "transition-colors ease-in-out duration-500",
            "p-[15px]"
          )}
        >
          {children}
        </div>
      </>
    );
  }
);
HomeLayout.displayName = "HomeLayout";
export default HomeLayout;
