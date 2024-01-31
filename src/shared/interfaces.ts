import { LogoType, NavbarType } from "./enums";

export interface IAuthor {
  profilePic?: string;
  name: string;
  designation?: string;
  bio?: string;
  social?: iNavSocials[];
}

export type TPages = "article" | "onboarding" | "project";
export type TViews = "full" | "list";
export type TContents = TArticles | TProjects;
export type iContent = iArticle | iProject;
export type IContentHeaderData = IArticleHeaderData | IProjectHeaderData;

export type TArticles =
  | "Ivy"
  | "OakTree"
  | "Orchid"
  | "Vine"
  | "Tulip"
  | "Sunflower"
  | "Potato"
  | "Lily"
  | "Cacti"
  | "Moss";
export type TProjects = "Amazon" | "Zen";

interface IContentHeaderDataBase {
  author: IAuthor;
  date: string;
  codeName: TContents;
  articleTitle: string;
  tags: string;
  thumbnail: string;
  shortIntro: string;
  category?: string;
}

export interface IArticleHeaderData extends IContentHeaderDataBase {
  codeName: TArticles;
}

export interface IProjectHeaderData extends IContentHeaderDataBase {
  codeName: TProjects;
}

interface iContentBase {
  path: string;
  featureArticle?: boolean;
  preview: IContentHeaderDataBase;
  seo?: iSEO;
}

export interface iArticle extends iContentBase {
  preview: IArticleHeaderData;
}

export interface iProject extends iContentBase {
  preview: IProjectHeaderData;
}

export interface iSEO {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  twitterHandle?: string;
  author?: string;
  url?: string;
}

export interface iNavbar {
  openSearch: () => void;
  changeTheme?: () => void;
  navSetup: iNavSetup;
  onShareClick: () => void;
}

export interface iNavSetup {
  type: NavbarType;
  navLinks: iNavLink[];
  sideNavLinks: iNavLink[];
  // socials: iNavSocials[];
  logo: iNavLogo;
}

export interface iNavLogo {
  type: LogoType;
  logo: string;
  logoLight?: string;
}

export interface iNavLink {
  label: string;
  path: string;
  type?: string;
  newTab?: boolean;
}

export interface iNavSocials {
  link: string;
  icon: any;
}
