import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { UpdateUIState, UIState } from "./atom";
import { useState, useEffect, useRef } from "react";
import { TUIState, TUINode, TUpdateUIState } from "./atom";

type TSetUIState = (leafUiNode: TUINode) => void;
type TAnimateState = "init" | "exit" | "stop";
type TUIStateCurrent = TUIState[TUINode];
export type TUIStateAnimate = {
  status: TAnimateState;
  stop: boolean;
  init: boolean;
  exit: boolean;
  value: TUINode;
};

export const useUiState = (
  uiNode: TUINode
): [[TUIStateCurrent, TUIStateAnimate], TSetUIState] => {
  const uiState = useRecoilValue(UIState);
  const [uiStateChange, setUiStateChange] = useRecoilState(UpdateUIState);
  const [animateState, setAnimateState] = useState<TAnimateState>("stop");
  const animateStateValueRef = useRef<TUINode>("Vine");
  const updateAnimateState = (
    newAnimateState: TAnimateState,
    newUiStateChange: TUpdateUIState,
    newUiState: TUIState
  ) => {
    animateStateValueRef.current =
      newAnimateState === "init"
        ? newUiStateChange.after
        : newAnimateState === "exit"
        ? newUiStateChange.before
        : (newUiState[uiNode] as TUINode);
    setAnimateState(newAnimateState);
  };
  useEffect(() => {
    if (uiStateChange.root === uiNode) {
      updateAnimateState("exit", uiStateChange, uiState);
      const timer = setTimeout(() => {
        updateAnimateState("init", uiStateChange, uiState);
      }, 100);
      return () => {
        clearTimeout(timer);
      };
    } else {
      updateAnimateState("stop", uiStateChange, uiState);
    }
  }, [uiStateChange]);

  const uiStateCurrent: TUIStateCurrent = uiState[uiNode];
  const uiStateAnimate: TUIStateAnimate = {
    status: animateState,
    stop: animateState === "stop",
    init: animateState === "init",
    exit: animateState === "exit",
    value: animateStateValueRef.current as TUINode,
  };
  const setUiState: TSetUIState = (leafUiNode) => {
    setUiStateChange({
      root: uiNode,
      before: "page", // placeHolder
      after: leafUiNode,
    });
  };
  return [[uiStateCurrent, uiStateAnimate], setUiState];
};

export const useSetUiState = (uiNode: TUINode): TSetUIState => {
  const setUiStateChange = useSetRecoilState(UpdateUIState);
  return (leafUiNode) => {
    setUiStateChange({
      root: uiNode,
      before: "page", // placeHolder
      after: leafUiNode,
    });
  };
};

export const useGetUiStateCurrent = (uiNode: TUINode): TUIStateCurrent => {
  const uiState = useRecoilValue(UIState);
  return uiState[uiNode];
};

export const useUiStateCurrent = (
  uiNode: TUINode
): [TUIStateCurrent, TSetUIState] => {
  const uiState = useRecoilValue(UIState);
  const setUiStateChange = useSetRecoilState(UpdateUIState);
  const uiStateCurrent: TUIStateCurrent = uiState[uiNode];
  const setUiState: TSetUIState = (leafUiNode) => {
    setUiStateChange({
      root: uiNode,
      before: "page", // placeHolder
      after: leafUiNode,
    });
  };
  return [uiStateCurrent, setUiState];
};
