/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import ArticleCard from '../src/components/ArticleCards/ArticleCard';
import { SORTED_ARTICLES_BY_DATE } from '../BLOG_CONSTANTS/_ARTICLES_LIST';
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";
import { transformImagePaths } from "../src/utils/utils";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const archiveRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const sectionRefs = {
    archive: archiveRef,
    demo: demoRef,
  };
  type SectionKey = keyof typeof sectionRefs;
  
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
  //         const sectionId = entry.target.id;
  //         router.push(`/#[${sectionId}]`, undefined, { shallow: true });
  //       }
  //     });
  //   }, { threshold: 0.5 });

  //   // Observing each section
  //   Object.values(sectionRefs).forEach(ref => {
  //     if (ref.current) {
  //       observer.observe(ref.current);
  //     }
  //   });

  //   // Cleanup observer on unmount
  //   return () => {
  //     Object.values(sectionRefs).forEach(ref => {
  //       if (ref.current) {
  //         observer.unobserve(ref.current);
  //       }
  //     });
  //   };
  // }, []);


  useEffect(() => {
    const section = router.asPath.split('#')[1];
    if (section && section in sectionRefs) {
      const key = section as SectionKey;
      const sectionElement = sectionRefs[key].current;
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [router.asPath]);

  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      <section className='w-full md:py-[500px] pt-[500px] pb-20 dark:bg-organic bg-lime'>
        <div className="container text-left px-3">
         <img src={transformImagePaths("/public/imp_assets/chizizic/sphere.svg")} alt={"sphere"} className="w-1/2 mx-auto my-[500px] object-cover" />
          <Text title className=''>
            The Greenery
          </Text>
          <Text texttitle className="mt-6 italic md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </div>
      </section>
      <div className="container mx-auto lg:px-[15px] px-0">
        <div className={'flex flex-wrap'}>
          <FeaturedArticleSection ref={sectionRefs.archive}/>
          <HomeNonFeatureArticles ref={sectionRefs.demo}/>
        </div>
      </div>
    </PageLayout>
  )
}

export default Home