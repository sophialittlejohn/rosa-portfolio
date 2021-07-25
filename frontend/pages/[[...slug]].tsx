import {
  ComponentMetaMetadata,
  Global,
  PageContentSectionsDynamicZone,
} from "../utils/@types/strapi";
import { fetchAPI, getGlobalData, getPageData } from "../utils/api";

import ErrorPage from "next/error";
import Layout from "../components/layout";
import { NextPageContextWithStrapi } from "../utils/types";
import Sections from "../components/sections";
import Seo from "../components/elements/seo";
import { getLocalizedPaths } from "../utils/localize";
import { useRouter } from "next/router";

type DynamicPageProps = {
  sections?: PageContentSectionsDynamicZone[];
  metadata?: ComponentMetaMetadata;
  preview?: boolean;
  global: Global;
  pageContext: NextPageContextWithStrapi;
};

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

const DynamicPage = ({
  sections,
  metadata,
  preview,
  global,
  pageContext,
}: DynamicPageProps) => {
  const router = useRouter();

  // Check if the required data was provided
  if (!router.isFallback && !sections?.length) {
    return <ErrorPage statusCode={404} />;
  }

  // Loading screen (only possible in preview mode)
  if (router.isFallback) {
    return <div className="container">Loading...</div>;
  }

  return (
    <Layout
      global={global}
      configuration={{ pageColor: pageContext.pageColor }}
    >
      {/* Add meta tags for SEO*/}
      {metadata && <Seo metadata={metadata} />}
      {/* Display content sections */}
      <Sections sections={sections} preview={preview} />
    </Layout>
  );
};

export async function getStaticPaths(context: NextPageContextWithStrapi) {
  // Get all pages from Strapi
  const allPages = context?.locales.map(async (locale) => {
    const localePages = await fetchAPI(`/pages?_locale=${locale}`);
    return localePages;
  });

  const pages = await (await Promise.all(allPages)).flat();

  const paths = pages.map((page) => {
    // Decompose the slug that was saved in Strapi
    const slugArray = !page.slug ? false : page.slug.split("/");

    return {
      params: { slug: slugArray },
      // Specify the locale to render
      locale: page.locale,
    };
  });

  return { paths, fallback: true };
}

export async function getStaticProps(context: NextPageContextWithStrapi) {
  const { params, locale, locales, defaultLocale, preview = false } = context;

  const globalLocale = await getGlobalData(locale);
  // Fetch pages. Include drafts if preview mode is on
  const pageData = await getPageData(
    { slug: !params.slug ? ["/"] : params.slug },
    locale,
    preview
  );
  console.log("➜ ~ pageData", pageData);

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} };
  }

  // We have the required page data, pass it to the page component
  const { contentSections, metadata, localizations, slug, pageColor } =
    pageData;

  const pageContext = {
    locale: pageData.locale,
    locales,
    defaultLocale,
    slug,
    localizations,
    pageColor,
  };

  const localizedPaths = getLocalizedPaths(pageContext);

  return {
    props: {
      preview,
      sections: contentSections,
      metadata,
      global: globalLocale,
      pageContext: {
        ...pageContext,
        localizedPaths,
      },
    },
  };
}

export default DynamicPage;
