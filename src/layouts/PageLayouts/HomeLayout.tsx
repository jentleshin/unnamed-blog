import React, { useEffect } from "react";
import Home from "../../../pages";
import { combineClasses } from "../../utils/utils";
import { useOpacityObserver } from "../../hooks/useOpacity";
import { Display } from "../../components";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
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
            "dark:text-lime bg-transparent text-organic",
            // "translate-x-[-490px] translate-y-[-180px]",
            "h-screen w-screen",
            "grid gap-[24px] grid-cols-[minmax(0,1fr)_minmax(0,auto)_minmax(0,2fr)] grid-rows-[minmax(0,auto)_minmax(0,auto)_minmax(0,1fr)]",
            // "grid gap-[120px] grid-cols-[0px_0px_minmax(0,2fr)] grid-rows-[0px_0px_minmax(0,1fr)]",
            "transition-all ease-in-out duration-500",
            "p-[24px]"
          )}
        >
          <div className="col-span-3">
            <div className="dark:bg-lime bg-organic h-[0.5px]" />
            <Navbar />
            <div className="dark:bg-lime bg-organic h-[0.5px]" />
          </div>

          <Display
            token
            className={combineClasses(
              "mt-0 mb-0",
              // "translate-x-[-100%]",
              "transition-all ease-in-out duration-500"
            )}
          >
            List
          </Display>

          <div
            className={combineClasses(
              "row-span-2",
              "dark:bg-lime bg-organic w-[0.5px]"
            )}
          />

          <Display token className={combineClasses("mt-0 mb-0")}>
            Content
          </Display>

          <div
            className={combineClasses(
              "opacity-75 hover:opacity-100",
              // "translate-x-[-100%]",
              "transition-all ease-in-out duration-500"
            )}
          >
            {childrenArray[0]}
          </div>
          <div
            ref={viewportRef}
            className={combineClasses(
              "opacity-75 hover:opacity-100",
              // "translate-x-[calc(-73.5px-100%+50vw)]",
              // "translate-y-[-120px]",
              // "z-[10]",
              "transition-all ease-in-out duration-500"
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
