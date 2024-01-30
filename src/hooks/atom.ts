import { DefaultValue, atom, selector } from "recoil";
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
export type TUIState = {
  page: "article" | "onboarding" | "project";
  article: TArticles;
  project: TProjects;
  onboarding: null;
} & typeof ArticleObject &
  typeof ProjectObject;
export type TUINode = keyof TUIState;
export type TUpdateUIState = {
  root: TUINode;
  after: TUINode;
  before: TUINode;
};
export type TUIStateChange = {
  root: TUINode;
  before: TUINode;
  after: TUINode;
};

export const UIState = atom<TUIState>({
  key: "UIState",
  default: {
    page: "article",
    article: "Vine",
    project: "Amazon",
    onboarding: null,
    ...ArticleObject,
    ...ProjectObject,
  },
});

export const UIStateChange = atom<TUIStateChange>({
  key: "UIStateChange",
  default: {
    root: "page",
    before: "project",
    after: "article",
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

export const UpdateUIState = selector<TUIStateChange>({
  key: "UpdateUIState",
  get: ({ get }) => get(UIStateChange),
  set: ({ set, get }, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      const { root, after } = newValue;
      const before = get(UIState)[root] as TUINode;
      if (after !== before) {
        set(UIState, {
          ...get(UIState),
          [root]: after,
        });
        set(UIStateChange, {
          root: root,
          before: before,
          after: after,
        });
      }
    }
  },
});
