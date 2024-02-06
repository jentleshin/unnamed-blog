export const dynamic = "force-dynamic";
import { NotionAPI } from "notion-client";
import { NOTIONS } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST";
import { TContents } from "../../../src/shared/interfaces";
import { ExtendedRecordMap } from "notion-types";

const notion = new NotionAPI();
const cache: Partial<Record<TContents, ExtendedRecordMap>> = {};

// Function to fetch a page from Notion and update cache
async function fetchAndCacheNotionPage(code: TContents) {
  try {
    const pageId = NOTIONS[code];
    const recordMap = await notion.getPage(pageId);
    cache[code] = recordMap; // Cache the result
    return recordMap;
  } catch (error) {
    console.error(`Failed to fetch Notion page for code: ${code}`, error);
    throw error; // Rethrow to handle outside
  }
}

// Cache all Notion pages without blocking API startup
async function cacheAllNotionPages() {
  const codes = Object.keys(NOTIONS) as TContents[];
  const fetchPromises = codes.map((code) =>
    fetchAndCacheNotionPage(code).catch((error) => {
      console.error("Error caching Notion pages for code", code, error);
    })
  );
  await Promise.all(fetchPromises);
  console.log("All Notion pages cached");
}

// GET function modified to utilize centralized fetching and caching
export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code") as TContents;

  if (!code) {
    return new Response(JSON.stringify({ error: "Code is required" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    // Check cache first or fetch from Notion if not available
    const recordMap = cache[code] || (await fetchAndCacheNotionPage(code));
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
        details: (error as Error).toString(),
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

// Non-blocking call to cache all Notion pages
cacheAllNotionPages().catch((error) => {
  console.error("Error initializing Notion page cache", error);
});
