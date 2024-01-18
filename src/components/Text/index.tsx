import { TextAlign } from "../../shared/enums";
import { combineClasses } from "../../utils/utils";
import { useTheme } from "next-themes";

interface IProps {
  children?: any;
  color?: string;
  textAlign?: TextAlign;
  className?: string;
  title?: boolean;
  subtitle?: boolean;
  plaintitle?: boolean;
  texttitle?: boolean;
  p?: boolean;
  token?: boolean;
  quote?: boolean;
  id?: string;
}

const Text = ({
  children,
  color,
  textAlign = TextAlign.NONE,
  className,
  title = false,
  subtitle = false,
  plaintitle = false,
  texttitle = false,
  p = false,
  token = false,
  quote = false,
  id,
}: IProps) => {
  const computeComponent = () => {
    let ui = <></>;

    if (title) {
      ui = (
        <h1
          className={combineClasses(
            `font-design font-bold`,
            `text-4xl md:text-4xl`,
            `leading-10 md:leading-10`,
            `py-3`,
            className
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {children}
        </h1>
      );
    } else if (subtitle) {
      ui = (
        <h2
          className={combineClasses(
            `font-display font-extrabold`,
            `text-2xl md:text-2xl`,
            `leading-10 md:leading-10`,
            `tracking-wider`,
            `py-3`,
            className
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {children}
        </h2>
      );
    } else if (plaintitle) {
      ui = (
        <h3
          className={combineClasses(
            `font-body font-bold text-xl md:text-3xl`,
            className
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {children}
        </h3>
      );
    } else if (p) {
      ui = (
        <p
          className={combineClasses(
            `font-body font-light`,
            `text-lg md:text-lg`,
            `leading-10 md:leading-10`,
            `tracking-wider`,
            `py-3`,
            className
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {children}
        </p>
      );
    } else if (quote) {
      ui = (
        <blockquote
          className={combineClasses(
            `relative`,
            `dark:bg-lime bg-organic dark:bg-opacity-[0.05] bg-opacity-[0.05]`,
            `font-body font-light`,
            `text-lg md:text-lg`,
            `leading-10 md:leading-10`,
            `tracking-wider`,
            `my-3`,
            `py-3 px-[30px]`,
            className
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {children}
        </blockquote>
      );
    } else if (token) {
      ui = (
        <span
          className={combineClasses(
            `font-design font-extrabold`,
            `text-sm md:text-sm`,
            `leading-10 md:leading-10`,
            `tracking-wider`,
            `py-3`,
            `uppercase`,
            className
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {children}
        </span>
      );
    } else {
      ui = (
        <p
          className={combineClasses(
            `font-text md:text-lg leading-relaxed`,
            className
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {children}
        </p>
      );
    }
    return ui;
  };

  return computeComponent();
};

export default Text;
