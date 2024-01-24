import { TextAlign } from "../../shared/enums";
import { combineClasses } from "../../utils/utils";

interface IProps {
  children?: any;
  color?: string;
  textAlign?: TextAlign;
  className?: string;
  title?: boolean;
  subtitle?: boolean;
  plaintitle?: boolean;
  p?: boolean;
  token?: boolean;
  id?: string;
}

const Display = ({
  children,
  color,
  textAlign = TextAlign.NONE,
  className,
  title = false,
  subtitle = false,
  plaintitle = false,
  p = false,
  token = false,
  id,
}: IProps) => {
  const computeComponent = (children: any) => {
    let ui = <></>;

    if (title) {
      ui = (
        <h1
          className={combineClasses(
            `font-design font-bold`,
            `text-4xl md:text-4xl`,
            `my-3`,
            `line-clamp-2`,
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
            `font-display font-bold`,
            `text-lg md:text-lg`,
            `tracking-wider`,
            `my-3`,
            `line-clamp-2`,
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
            `font-display font-light`,
            `text-xs md:text-xs`,
            `tracking-wider`,
            `uppercase`,
            `line-clamp-2`,
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
            `text-sm md:text-sm`,
            `leading-6 md:leading-6`,
            `tracking-wider`,
            `my-3`,
            `line-clamp-2`,
            "opacity-80",
            className
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {children}
        </p>
      );
    } else if (token) {
      ui = (
        <div
          className={combineClasses(
            `font-display font-light`,
            `text-xs md:text-xs`,
            `tracking-wider`,
            `my-3`,
            `uppercase`,
            `line-clamp-2`,
            className
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {children}
        </div>
      );
    }
    return ui;
  };

  return computeComponent(children);
};

export default Display;
