import { UpdateUIState, UpdateUIStateReady } from "./atom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

export const useUIState = (
  componentId: string
): [
  { UIStateChange: any; UIStateReady: string; UIStateCurrent: any },
  (newValue: any) => void
] => {
  const [{ UIStateChange, UIStateCurrent }, setUIState] =
    useRecoilState(UpdateUIState);
  const [UIStateReady, toggleUIStateReady] = useRecoilState(UpdateUIStateReady);

  useEffect(() => {
    console.log(`${componentId} ready`);
    console.log(`${componentId} ${UIStateChange}`);
    toggleUIStateReady(componentId);
  }, [UIStateChange]);

  useEffect(() => {
    console.log(`${componentId} readySignal: ${UIStateReady}`);
  }, [UIStateReady]);
  useEffect(() => {
    console.log(
      `${componentId} currentState: ${JSON.stringify(UIStateCurrent)}`
    );
  }, [UIStateCurrent]);

  return [{ UIStateChange, UIStateReady, UIStateCurrent }, setUIState];
};
