import { atom } from "recoil";

export const article = atom({
  key: "currentArticle", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const view = atom({
  key: "isFullView", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const page = atom({
  key: "currentPage", // unique ID (with respect to other atoms/selectors)
  default: "home", // default value (aka initial value)
});

export const viewChange = atom({
  key: "isViewChanged", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const pageChange = atom({
  key: "isPageChanged", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const articleChange = atom({
  key: "isArticleChanged", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

// export const sharedObserverState = atom<IntersectionObserver | null>({
//   key: "sharedObserverState", // unique ID (with respect to other atoms/selectors)
//   default: null, // default value (aka initial value)
// });
