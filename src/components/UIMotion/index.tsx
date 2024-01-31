import { motion, AnimatePresence } from "framer-motion";
import { TUIStateAnimate } from "../../hooks/useUIState";

interface ICommonProps {
  children: React.ReactNode;
  className?: string;
  uiStateAnimate: TUIStateAnimate;
}

interface ILayoutProps {
  layout: true;
  layoutId: string;
  drawLayout: boolean;
}

// Define props when layout is false
interface INonLayoutProps {
  layout?: false;
  initial: Object;
  animate: Object;
  exit: Object;
}

type IProps = ICommonProps & (ILayoutProps | INonLayoutProps);

const UIMotion = (props: IProps) => {
  let ui = <></>;
  if (props.layout) {
    const { uiStateAnimate, layoutId, drawLayout, children, className } = props;
    ui = drawLayout ? (
      <motion.div
        className={className}
        layoutId={uiStateAnimate.stop ? layoutId : undefined}
        transition={{ type: "spring", bounce: 0, duration: 1 }}
      >
        {children}
      </motion.div>
    ) : (
      <></>
    );
  } else {
    const { uiStateAnimate, initial, animate, exit, children, className } =
      props;
    ui = (
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`${uiStateAnimate.status}`}
          className={className}
          initial={uiStateAnimate.init ? initial : {}}
          animate={animate}
          exit={uiStateAnimate.exit ? exit : {}}
          transition={{ type: "spring", bounce: 0, duration: 1 }}
          onAnimationComplete={() => {
            uiStateAnimate.init && uiStateAnimate.onInitCallback();
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  }
  return ui;
};

export default UIMotion;
