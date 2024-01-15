/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import ArticleCard from "../src/components/ArticleCards/ArticleCard";
import { SORTED_ARTICLES_BY_DATE } from "../BLOG_CONSTANTS/_ARTICLES_LIST";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";
import { transformImagePaths } from "../src/utils/utils";
import Section from "../src/components/Section";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  type SectionRefs = {
    [key: string]: React.RefObject<HTMLElement>;
  };
  type SectionHeadings = {
    [key: string]: string;
  };
  const sectionRefs: SectionRefs = {
    featured: useRef<HTMLElement>(null),
    archive: useRef<HTMLElement>(null),
    home: useRef<HTMLElement>(null),
    onboarding: useRef<HTMLElement>(null),
  };
  const sectionHeadings: SectionHeadings = {
    featured: "Featured",
    archive: "Archive",
    home: "The Greenery",
    onboarding: "______",
  };
  type SectionKey = keyof typeof sectionRefs;

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const visibleSections = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
  //     if (visibleSections.length > 0) {
  //       const topSection = visibleSections[0];
  //       const sectionRefKey = Object.keys(sectionRefs).find(key => sectionRefs[key].current === topSection.target);
  //       const sectionHeading = sectionRefKey ? sectionHeadings[sectionRefKey] : "";
  //       router.push(`/#${sectionHeading}`, undefined, { shallow: true });
  //     }
  //   }, { threshold: 0.01 });
  //   //     if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
  //   //       const sectionRefKey = Object.keys(sectionRefs).find(key => sectionRefs[key].current === entry.target);
  //   //       const sectionHeading = sectionRefKey? sectionHeadings[sectionRefKey] : "";
  //   //       router.push(`/#${sectionHeading}`, undefined, { shallow: true });
  //   //     }
  //   //   });
  //   // }, { threshold: 0.5 });

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
    const section = router.asPath.split("#")[1];
    if (section && section in sectionRefs) {
      const key = section as SectionKey;
      const sectionElement = sectionRefs[key].current;
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.asPath]);

  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      <div className="container mx-auto flex flex-wrap">
        <Section
          ref={sectionRefs.onboarding}
          heading={sectionHeadings.onboarding}
        >
          <div className="w-full">
            <img
              src={transformImagePaths(
                "/public/imp_assets/chizizic/sphere.svg",
              )}
              alt={"sphere"}
              className="w-1/2 mx-auto object-cover"
            />
          </div>
        </Section>
        <Section ref={sectionRefs.home} heading={sectionHeadings.home}>
          <div className="text-left">
            <Text texttitle className="mt-6 italic md:w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </div>
        </Section>
        <Section ref={sectionRefs.featured} heading={sectionHeadings.featured}>
          <FeaturedArticleSection />
        </Section>
        <Section ref={sectionRefs.archive} heading={sectionHeadings.archive}>
          <HomeNonFeatureArticles />
        </Section>
      </div>
    </PageLayout>
  );
};

export default Home;
