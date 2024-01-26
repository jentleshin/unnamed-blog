"use client";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Footer from "../src/components/Footer";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@uiw/react-textarea-code-editor/dist.css";
import "react-medium-image-zoom/dist/styles.css";
import { RecoilRoot } from "recoil";
// import { CREATE_SEO_CONFIG } from "../src/utils/utils";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [mounted, setMounted] = useState(false);
  // const env = process.env.NODE_ENV;

  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  // let SEO_CONFIG = CREATE_SEO_CONFIG({});

  return (
    <RecoilRoot>
      {/* <NextSeo {...SEO_CONFIG} /> */}
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google" content="notranslate" />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        {children}
        <SpeedInsights />
        {/* <Footer /> */}
      </ThemeProvider>
    </RecoilRoot>
  );
}
