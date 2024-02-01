export const dynamic = "force-dynamic";
import { NotionAPI } from "notion-client";
import { NOTIONS } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST";
import { TContents } from "../../../src/shared/interfaces";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return new Response(JSON.stringify({ error: "Code is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    const notion = new NotionAPI();
    const page = NOTIONS[code as TContents];
    const recordMap = await notion.getPage(page);

    return new Response(JSON.stringify({ recordMap }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to fetch from Notion API",
        details: error,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
