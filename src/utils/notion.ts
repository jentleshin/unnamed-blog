import "server-only";

import { Client } from "@notionhq/client";
import {
  BlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getPages = () => {
  return notionClient.databases.query({
    filter: {
      property: "Status",
      select: {
        equals: "Published",
      },
    },
    database_id: process.env.NOTION_DATABASE_ID!,
  });
};

export const getPageContent = (pageId: string) => {
  return notionClient.blocks.children
    .list({
      block_id: pageId,
    })
    .then((res) => res.results as BlockObjectResponse[]);
};

export const getPageBySlug = (slug: string) => {
  return notionClient.databases
    .query({
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
      database_id: process.env.NOTION_DATABASE_ID!,
    })
    .then((res) => res.results[0] as PageObjectResponse);
};
