import { combineClasses } from "../../utils/utils";
import classes from "./Seperator.module.scss";

interface IProps {
  line?: boolean;
  dots?: boolean;
  className?: string;
}

const Seperator = ({ line = false, dots = false, className }: IProps) => {
  return (
    <>
      {line ? (
        <div
          className={combineClasses(
            classes.section_seperator_line,
            "dark:border-lime border-organic",
            className
          )}
        ></div>
      ) : dots ? (
        <div
          className={combineClasses(classes.section_seperator_dots, className)}
        >
          {[...Array(5)].map((i) => (
            <span key={Math.random()} className="dark:bg-white"></span>
          ))}
        </div>
      ) : (
        <div
          className={combineClasses(
            classes.section_seperator_line,
            "dark:border-lime border-organic",
            className
          )}
        ></div>
      )}
    </>
  );
};
export default Seperator;
