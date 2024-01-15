import { TextAlign } from "../../shared/enums";
import { combineClasses } from "../../utils/utils";
import classes from "./text.module.scss";

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
            `font-display text-3xl md:text-6xl py-3`,
            className,
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
            `font-display text-xl md:text-3xl py-3`,
            className,
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
            `font-text font-semibold text-xl md:text-3xl py-4`,
            className,
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {children}
        </h3>
      );
    } else if (texttitle) {
      ui = (
        <p
          className={combineClasses(
            `font-text font-semibold md:text-xl text-sm md:leading-8 leading-relaxed py-3`,
            className,
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {children}
        </p>
      );
    } else if (p) {
      ui = (
        <p
          className={combineClasses(
            `font-text md:text-base text-sm md:leading-8 leading-relaxed py-2`,
            className,
          )}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          {children}
        </p>
      );
    } else if (token) {
      ui = (
        <p
          className={combineClasses(
            `font-text md:text-sm text-sm py-1 opacity-60 uppercase`,
            className,
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
          className={combineClasses(classes.quoted_text, className)}
          style={{ color: color, textAlign: textAlign }}
          id={id}
        >
          <q>{children}</q>
        </blockquote>
      );
    } else {
      ui = (
        <p
          className={combineClasses(
            `font-text mb-3 text-lg leading-relaxed`,
            className,
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
