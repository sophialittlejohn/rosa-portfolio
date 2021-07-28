import { NextPageContext } from "next";
import PropTypes from "prop-types";

export const linkPropTypes = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
});

export const mediaPropTypes = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  alternativeText: PropTypes.string,
  mime: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const buttonLinkPropTypes = PropTypes.shape({
  theme: PropTypes.string,
  text: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
});

export type Locales = "en";

export type NextPageContextWithStrapi = NextPageContext & {
  locales: Locales[];
  locale: Locales;
  params: Record<any, any>;
  preview: boolean;
  localizations: any[];
  localizedPaths: string[];
  pageColor?: "light" | "dark";
  layout?: "horizontal" | "vertical";
};
