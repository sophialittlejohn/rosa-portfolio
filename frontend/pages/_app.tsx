import "tailwindcss/tailwind.css";

import App, { AppContext } from "next/app";

import { AppProps } from "next/dist/next-server/lib/router/router";
import { DefaultSeo } from "next-seo";
import ErrorPage from "next/error";
import Head from "next/head";
import { Locales } from "../utils/types";
import { getGlobalData } from "../utils/api";
import { getStrapiMedia } from "../utils/media";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Extract the data we need
  const { global } = pageProps;
  if (global == null) {
    return <ErrorPage statusCode={404} />;
  }

  const { metadata } = global;

  return (
    <>
      {/* Favicon */}
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.favicon.url) || ""}
        />
      </Head>
      {/* Global site metadata */}
      <DefaultSeo
        titleTemplate={`%s | ${global.metaTitleSuffix}`}
        title="Page"
        description={metadata?.metaDescription}
        openGraph={{
          images: Object.values(metadata?.shareImage.formats || []).map(
            (image: any) => {
              return {
                url: getStrapiMedia(image.url),
                width: image.width,
                height: image.height,
              };
            }
          ) as any,
        }}
        twitter={{
          cardType: metadata.twitterCardType,
          handle: metadata.twitterUsername,
        }}
      />
      {/* Display the content */}
      <Component {...pageProps} />
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (appContext: AppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const globalLocale = await getGlobalData(appContext.router.locale as Locales);

  return {
    ...appProps,
    pageProps: {
      global: globalLocale,
    },
  };
};

export default MyApp;
