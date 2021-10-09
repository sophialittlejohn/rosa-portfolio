import { Locales } from "./types";

export function getStrapiURL(path: string) {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string, options = {}) {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };
  const requestUrl = getStrapiURL(path);
  console.log("➜ ~ requestUrl", requestUrl);
  try {
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      console.error("LE ERREUR", response.text());
      throw new Error(JSON.stringify(response.statusText));
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("IN ZA ERREUR", error);
    throw error;
  }
}

/**
 *
 * @param {object} params The router params object with slug: { slug: [<slug>] }
 * @param {string} locale The current locale specified in router.locale
 * @param {boolean} preview router isPreview value
 */
type Params = {
  slug: string[];
};

export async function getPageData(
  params: Params,
  locale: Locales,
  preview: boolean
) {
  const slug = params.slug.join("/");
  // Find the pages that match this slug
  // const pagesData = await fetchAPI(
  //   `/pages?slug=${slug}&_locale=${locale || "en"}&status=published${
  //     preview ? "&status=draft" : ""
  //   }`
  // );
  const pagesData = await fetchAPI(
    `/pages?slug=${slug}&status=published${preview ? "&status=draft" : ""}`
  );

  // Make sure we found something, otherwise return null
  if (pagesData == null || pagesData.length === 0) {
    return null;
  }

  // Return the first item since there should only be one result per slug
  return pagesData[0];
}

// Get site data from Strapi (metadata, navbar, footer...)
export async function getGlobalData(locale: Locales) {
  // const global = await fetchAPI(`/global?_locale=${locale || "en"}`);
  const global = await fetchAPI(`/global`);
  return global;
}
