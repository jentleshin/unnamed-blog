import React, { useEffect } from "react";
import Home from "../../../pages";
import { combineClasses } from "../../utils/utils";
import { useOpacityObserver } from "../../hooks/useOpacity";
import { Display } from "../../components";
import Navbar from "../../components/Navbar";
interface IProps {
  children?: any;
}

const HomeLayout = React.forwardRef<HTMLDivElement, IProps>(
  ({ children }, ref) => {
    const viewportRef = useOpacityObserver<HTMLDivElement>(null);
    const childrenArray = React.Children.toArray(children);
    return (
      <>
        <div
          ref={ref}
          className={combineClasses(
            " dark:text-lime bg-transparent text-organic",
            "h-screen w-screen",
            "grid grid-cols-[minmax(0,1fr)_minmax(0,auto)_minmax(0,2fr)] grid-rows-[minmax(0,auto)_minmax(0,auto)_minmax(0,auto)_minmax(0,auto)_minmax(0,1fr)]",
            "transition-colors ease-in-out duration-500",
            "p-[24px]"
          )}
        >
          <div className="col-span-3 dark:bg-lime bg-organic h-[0.5px]"></div>
          <div className="col-span-3 flex items-center">
            <Navbar />
            {/* <Display title className="uppercase">
              The Greenery/AI Company
            </Display> */}
          </div>
          <div className="col-span-3 dark:bg-lime bg-organic h-[0.5px] mb-[24px]"></div>
          <div className={combineClasses("pr-[24px]")}>
            <Display token>List</Display>
          </div>
          <div className="row-span-2 dark:bg-lime bg-organic w-[0.5px]"></div>
          <div className={combineClasses("pl-[24px]")}>
            <Display token>Content</Display>
          </div>

          <div
            className={combineClasses(
              "opacity-50 hover:opacity-100",
              "transition-opacity ease-in-out duration-500",
              "pr-[24px]"
            )}
          >
            {childrenArray[0]}
          </div>
          <div
            ref={viewportRef}
            className={combineClasses(
              "opacity-50 hover:opacity-100",
              "transition-opacity ease-in-out duration-500",
              "pl-[24px]"
            )}
          >
            {childrenArray[1]}
          </div>
        </div>
      </>
    );
  }
);
HomeLayout.displayName = "HomeLayout";
export default HomeLayout;
