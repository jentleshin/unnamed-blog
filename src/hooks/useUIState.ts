import { useRecoilState, useRecoilValue, SetterOrUpdater } from "recoil";
import { UpdateUIState, UITree } from "./atom";
import { useState, useEffect, useRef } from "react";
import { TUITree, TUINode, TUpdateUIState } from "./atom";

type TSetUIState = (rootUiNode: TUINode, leafUiNode: TUINode) => void;
type TAnimateState = "init" | "exit" | "stop";
type TUIStateCurrent = TUITree[TUINode];
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
  SetterOrUpdater<TUpdateUIState>
] => {
  const uiTree = useRecoilValue(UITree);
  const [uiState, setUiState] = useRecoilState(UpdateUIState);
  const uiStateRef = useRef<TUpdateUIState>(uiState);
  const [animateState, setAnimateState] = useState<TAnimateState>("stop");
  const updateAnimateState = (
    newAnimateState: TAnimateState,
    newUiState: TUpdateUIState
  ) => {
    uiStateRef.current = newUiState;
    setAnimateState(newAnimateState);
  };
  useEffect(() => {
    console.log("uiState", uiState);
    if (uiState.root === uiNode) {
      updateAnimateState("exit", uiState);
      const timer = setTimeout(() => {
        updateAnimateState("init", uiState);
      }, 10);
      return () => {
        clearTimeout(timer);
      };
    } else {
      updateAnimateState("stop", uiState);
    }
  }, [uiState]);

  const uiStateCurrent: TUIStateCurrent = uiTree[uiNode]; //TODO: change to generic type
  const uiStateAnimate: TUIStateAnimate = {
    status: animateState,
    init: animateState === "init",
    exit: animateState === "exit",
    value:
      animateState === "exit"
        ? (uiStateRef.current.before as TUINode)
        : uiStateRef.current.after,
    onInitCallback: () => {
      updateAnimateState("stop", uiState);
    },
  };
  return [{ uiStateCurrent, uiStateAnimate }, setUiState];
};
