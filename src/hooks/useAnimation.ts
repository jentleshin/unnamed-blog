import {
  view,
  page,
  article,
  viewChange,
  pageChange,
  articleChange,
} from "./atom";
import { useRecoilState } from "recoil";

export const useChangeArticle = (): [
  string,
  (article: string) => void,
  boolean
] => {
  const [currentArticle, setCurrentArticle] = useRecoilState(article);
  const [isViewChanged, setIsViewChanged] = useRecoilState(viewChange);
  const [isPageChanged, setIsPageChanged] = useRecoilState(pageChange);
  const [isArticleChanged, setIsArticleChanged] = useRecoilState(articleChange);
  const changeArticle = (article: string) => {
    setCurrentArticle(article);
    setIsPageChanged(false);
    setIsViewChanged(false);
    setIsArticleChanged(true);
  };
  return [currentArticle, changeArticle, isArticleChanged];
};

export const useToggleView = (): [boolean, () => void, boolean] => {
  const [isFullView, setIsFullView] = useRecoilState(view);
  const [isViewChanged, setIsViewChanged] = useRecoilState(viewChange);
  const [isPageChanged, setIsPageChanged] = useRecoilState(pageChange);
  const [isArticleChanged, setIsArticleChanged] = useRecoilState(articleChange);
  const toggleView = () => {
    setIsFullView(!isFullView);
    setIsPageChanged(false);
    setIsViewChanged(true);
    setIsArticleChanged(false);
  };
  return [isFullView, toggleView, isViewChanged];
};

export const useChangePage = (): [string, (page: string) => void, boolean] => {
  const [currentPage, setCurrentPage] = useRecoilState(page);
  const [isViewChanged, setIsViewChanged] = useRecoilState(viewChange);
  const [isPageChanged, setIsPageChanged] = useRecoilState(pageChange);
  const [isArticleChanged, setIsArticleChanged] = useRecoilState(articleChange);
  const changePage = (page: string) => {
    setCurrentPage(page);
    setIsPageChanged(true);
    setIsViewChanged(false);
    setIsArticleChanged(false);
  };
  return [currentPage, changePage, isPageChanged];
};
