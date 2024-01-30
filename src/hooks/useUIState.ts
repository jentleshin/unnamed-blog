import { useRecoilState, useRecoilValue, SetterOrUpdater } from "recoil";
import { UpdateUIState, UIState } from "./atom";
import { useState, useEffect, useRef } from "react";
import { TUIState, TUINode, TUpdateUIState } from "./atom";

type TSetUIState = (rootUiNode: TUINode, leafUiNode: TUINode) => void;
type TAnimateState = "init" | "exit" | "stop";
type TAnimateStateValue = {
  init: TUINode;
  exit: TUINode;
  stop: TUINode;
};
type TUIStateCurrent = TUIState[TUINode];
type TOnExitCallback = () => void;
type TUIStateAnimate = {
  status: TAnimateState;
  init: boolean;
  exit: boolean;
  value: TUINode;
  onInitCallback: TOnExitCallback;
};

export const useUiState = (
  uiNode: TUINode
): [
  {
    uiStateCurrent: TUIStateCurrent;
    uiStateAnimate: TUIStateAnimate;
  },
  TSetUIState
] => {
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
    init: animateState === "init",
    exit: animateState === "exit",
    value: animateStateValueRef.current as TUINode,
    onInitCallback: () => {
      updateAnimateState("stop", uiStateChange, uiState);
    },
  };
  const setUiState: TSetUIState = (rootUiNode, leafUiNode) => {
    setUiStateChange({
      root: rootUiNode,
      before: "page", // placeHolder
      after: leafUiNode,
    });
  };
  return [{ uiStateCurrent, uiStateAnimate }, setUiState];
};
