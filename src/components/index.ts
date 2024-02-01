import dynamic from "next/dynamic";

export const PageLayout = dynamic(() => import("../layouts/PageLayouts"));
export const Text = dynamic(() => import("./Text/Text"));
export const Display = dynamic(() => import("./Text/Display"));
export const Image = dynamic(() => import("./ArticleImage"));
export const Seperator = dynamic(() => import("./Seperator"));
export const List = dynamic(() => import("./List"));
export const LinkTo = dynamic(() => import("./LinkTo"));
export const Slider = dynamic(() => import("./Slider"));
export const Accordian = dynamic(() => import("./Accordian"));
export const VideoPlayer = dynamic(() => import("./Video"));
export const Section = dynamic(() => import("./Section"));
export const UIMotion = dynamic(() => import("./UIMotion"));
export const NotionPage = dynamic(() => import("./NotionPage"));
