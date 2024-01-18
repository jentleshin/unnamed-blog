import { useOpacity } from "../../hooks/useOpacity";
import { combineClasses } from "../../utils/utils";
interface IProps {
  children?: any;
}

export const Soft = ({ children }: IProps) => {
  const [contentRef, opacity] = useOpacity<HTMLDivElement>();

  return (
    <div
      ref={contentRef}
      className={combineClasses(
        "w-full",
        "transition-opacity ease-in-out duration-500",
        opacity ? "opacity-1" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export default Soft;
