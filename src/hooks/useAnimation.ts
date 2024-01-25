import { updateUIStateChange, updateReadyState } from "./atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export const useAnimateReady = (componentId: string) => {
  const [readySignal, toggleReadySignal] = useRecoilState(updateReadyState);
  const [UIState, toggleUIState] = useRecoilState(updateUIStateChange);

  useEffect(() => {
    console.log(`${componentId} ready`);
    toggleReadySignal(componentId);
  }, [UIState]);

  useEffect(() => {
    console.log(`${componentId} readySignal: ${readySignal}`);
    console.log(`${componentId} now animate`);
  }, [readySignal]);

  return [readySignal, UIState, toggleUIState];
};
