import { LogoType, NavbarType } from "./enums";

export interface IAuthor {
  profilePic?: string;
  name: string;
  designation?: string;
  bio?: string;
  social?: iNavSocials[];
}

export type TViews = "full" | "list";

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

export interface IArticleHeaderData {
  author: IAuthor;
  date: string;
  codeName: TArticles;
  articleTitle: string;
  tags: string;
  thumbnail: string;
  shortIntro: string;
  category?: string;
}

export interface iArticle {
  path: string;
  featureArticle?: boolean;
  preview: IArticleHeaderData;
  seo?: iSEO;
}

export type TProjects = "Amazon" | "Zen";

export interface IProjectHeaderData {
  author: IAuthor;
  date: string;
  codeName: TProjects;
  articleTitle: string;
  tags: string;
  thumbnail: string;
  shortIntro: string;
  category?: string;
}

export interface iProject {
  path: string;
  featureArticle?: boolean;
  preview: IProjectHeaderData;
  seo?: iSEO;
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
