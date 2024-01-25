import { atom, selector } from "recoil";

// Define the UIStateChange atom
const UIState = atom({
  key: "UIState", // unique ID (with respect to other atoms/selectors)
  default: {
    change: "page",
    current: { page: "article", view: false, article: "" },
  }, // default value (aka initial value)
});

const allReadySignal = atom({
  key: "allReadySignal",
  default: false,
});

const ready = atom({
  key: "ready",
  default: { c1: false, c2: false, c3: false },
});

export const updateUIStateChange = selector({
  key: "updateUIStateChange",
  get: ({ get }) => get(UIState),
  set: ({ get, set }, { toggle, value }: any) => {
    const currentUIState = get(UIState).current;
    set(UIState, {
      change: toggle,
      current: { ...currentUIState, [toggle]: value },
    });
  },
});

export const updateReadyState = selector({
  key: "updateReadyState",
  get: ({ get }) => get(allReadySignal),
  set: ({ get, set }, componentId: any) => {
    const currentReadyState = get(ready);
    const updatedReadyState = { ...currentReadyState, [componentId]: true };
    const all = Object.values(updatedReadyState).every((status) => status);
    if (all) {
      console.log("===========all ready==========");
      // set(allReadySignal, !get(allReadySignal));
      set(ready, { c1: false, c2: false, c3: false });
    } else {
      set(ready, updatedReadyState);
    }
  },
});
