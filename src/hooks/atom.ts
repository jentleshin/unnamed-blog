import { atom, selector } from "recoil";
import { DefaultValue } from "recoil";
type TUIStateChange = "page" | "view" | "article";
const UIStateChange = atom<TUIStateChange>({
  key: "UIStateChange", // unique ID (with respect to other atoms/selectors)
  default: "page",
});

interface IUIStateCurrent {
  page: string;
  view: boolean;
  article: string;
}
const UIStateCurrent = atom<IUIStateCurrent>({
  key: "UIStateCurrent",
  default: { page: "article", view: false, article: "" },
});

type TUIStateReady = boolean;
const UIStateReady = atom<TUIStateReady>({
  key: "UIStateReady",
  default: false,
});
interface IReady {
  c1: boolean;
  c2: boolean;
  c3: boolean;
}
const ready = atom<IReady>({
  key: "ready",
  default: { c1: false, c2: false, c3: false },
});

export const UpdateUIState = selector<any>({
  key: "UpdateUIState",
  get: ({ get }) => {
    return {
      UIStateChange: get(UIStateChange),
      UIStateCurrent: get(UIStateCurrent),
    };
  },
  set: (
    { get, set },
    { change, value }: { change: "page" | "view" | "article"; value: string }
  ) => {
    const uiStateChange = get(UIStateChange);
    const uiStateCurrent = get(UIStateCurrent);
    change !== uiStateChange && set(UIStateChange, change);
    value !== uiStateCurrent[change] &&
      set(UIStateCurrent, { ...uiStateCurrent, [change]: value });
  },
});

export const UpdateUIStateReady = selector<any>({
  key: "UpdateUIStateReady",
  get: ({ get }) => get(UIStateReady),
  set: ({ get, set }, componentId: any) => {
    const current = get(ready);
    const updated = { ...current, [componentId]: true };
    const all = Object.values(updated).every((status) => status);
    if (all) {
      console.log("===========all ready==========");
      set(UIStateReady, !get(UIStateReady));
      set(ready, { c1: false, c2: false, c3: false });
    } else {
      set(ready, updated);
    }
  },
});
