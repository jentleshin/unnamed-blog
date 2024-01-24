import { TextAlign } from "../../shared/enums";
import { combineClasses } from "../../utils/utils";
import { Soft } from "../Soft";
interface IProps {
  children?: any;
  color?: string;
  textAlign?: TextAlign;
  className?: string;
  title?: boolean;
  subtitle?: boolean;
  plaintitle?: boolean;
  p?: boolean;
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
  p = false,
  quote = false,
  id,
}: IProps) => {
  const computeComponent = (children: any) => {
    const softChildren = <Soft>{children}</Soft>;
    let ui = <></>;

    if (title) {
      ui = (
        <h1
          className={combineClasses(
            `font-design font-bold`,
            `text-4xl md:text-4xl`,
            `leading-10 md:leading-10`,
            `my-6`,
            className
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {softChildren}
        </h1>
      );
    } else if (subtitle) {
      ui = (
        <h2
          className={combineClasses(
            `font-display font-bold`,
            `text-2xl md:text-2xl`,
            `leading-10 md:leading-10`,
            `tracking-wider`,
            `my-6`,
            `sticky -top-1 z-10`,
            `bg-lime dark:bg-organic`,
            className
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {softChildren}
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
          {softChildren}
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
            `my-6`,
            className
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {softChildren}
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
            `my-6`,
            `py-3 px-[30px]`,
            className
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {softChildren}
        </blockquote>
      );
    }
    return ui;
  };

  return computeComponent(children);
};

export default Text;
