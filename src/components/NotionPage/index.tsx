"use client";
import "./NotionPage.scss";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";

interface IProps {
  recordMap: ExtendedRecordMap;
}

export const NotionPage = ({ recordMap }: IProps) => {
  return (
    <>
      <NotionRenderer recordMap={recordMap} fullPage={false} darkMode={true} />
    </>
  );
};
export default NotionPage;
