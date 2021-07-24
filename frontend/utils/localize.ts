import { NextPageContextWithStrapi } from "./types";
import { fetchAPI } from "./api";

export async function getLocalizedPage(
  targetLocale: string,
  pageContext: NextPageContextWithStrapi
) {
  const localization = pageContext.localizations.find(
    (localization) => localization.locale === targetLocale
  );
  const localePage = await fetchAPI(`/pages/${localization.id}`);
  return localePage;
}

export function localizePath(page: Record<any, any>) {
  const { locale, defaultLocale, slug } = page;

  if (locale === defaultLocale) {
    // The default locale is not prefixed
    return `/${slug}`;
  }

  // The slug should have a localePrefix
  return `/${locale}/${slug}`;
}

export function getLocalizedPaths(page: Record<any, any>) {
  const paths = page.locales.map((locale: any) => {
    return {
      locale: locale,
      href: localizePath({ ...page, locale }),
    };
  });

  return paths;
}
