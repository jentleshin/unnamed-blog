import { DefaultValue, GetRecoilValue, atom, selector } from "recoil";
import { ARTICLES, PROJECTS } from "../../BLOG_CONSTANTS/_ARTICLES_LIST";
import { TArticles, TProjects } from "../shared/interfaces";

const createArticleObject = <T extends Record<string, any>>(
  articles: T
): {
  [K in keyof T as `${string & K}`]: null;
} => {
  return Object.keys(articles).reduce((obj, key) => {
    return {
      ...obj,
      [key]: null,
    };
  }, {} as any);
};

const ArticleObject = createArticleObject(ARTICLES);
const ProjectObject = createArticleObject(PROJECTS);
export type TUITree = {
  page: "article" | "onboarding" | "project";
  article: TArticles;
  project: TProjects;
  onboarding: null;
} & typeof ArticleObject &
  typeof ProjectObject;
export type TUINode = keyof TUITree;
export type TUpdateUIState = {
  root: TUINode;
  after: TUINode;
  before?: TUINode;
};
export type TUILastChange = {
  root: TUINode;
  before: TUINode;
};
export type TUIState = {
  tree: TUITree;
  lastChange: TUILastChange;
};

export const UIState = atom<TUIState>({
  key: "UIState",
  default: {
    tree: {
      page: "article",
      article: "Vine",
      project: "Amazon",
      onboarding: null,
      ...ArticleObject,
      ...ProjectObject,
    },
    lastChange: {
      root: "page",
      before: "article",
    },
  },
});

// const readTree = (get: GetRecoilValue, acc: TUIPath): TUIPath => {
//   const newValue = get(UIState).tree[acc[acc.length - 1]];
//   if (newValue) {
//     return readTree(get, [...acc, newValue]);
//   } else {
//     return acc;
//   }
// };
export const UITree = selector<TUITree>({
  key: "UITree",
  get: ({ get }) => get(UIState).tree,
});
export const UILastChange = selector<TUILastChange>({
  key: "UILastChange",
  get: ({ get }) => get(UIState).lastChange,
});

export const UpdateUIState = selector<TUpdateUIState>({
  key: "UpdateUIState",
  get: ({ get }) => {
    const { root, before } = get(UILastChange);
    const after = get(UITree)[root] as TUINode;
    return { root, before, after };
  },
  set: ({ set, get }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      const { root, after } = newValue;
      const before = get(UITree)[root] as TUINode;
      if (after !== before) {
        set(UIState, {
          tree: {
            ...get(UITree),
            [root]: after,
          },
          lastChange: {
            root: root,
            before: before,
          },
        });
      }
    }
  },
});
