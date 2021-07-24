import { NextSeo } from "next-seo";
import PropTypes from "prop-types";
import { getStrapiMedia } from "../../utils/media";
import { mediaPropTypes } from "../../utils/types";

// @ts-ignore
const Seo = ({ metadata }) => {
  // Prevent errors if no metadata was set
  if (!metadata) return null;

  return (
    <NextSeo
      title={metadata.metaTitle}
      description={metadata.metaDescription}
      openGraph={{
        // Title and description are mandatory
        title: metadata.metaTitle,
        description: metadata.metaDescription,
        // Only include OG image if we have it
        // Careful: if you disable image optimization in Strapi, this will break
        ...(metadata.shareImage && {
          images: Object.values(metadata.shareImage.formats).map((image) => {
            return {
              // @ts-ignore
              url: getStrapiMedia(image.url),
              // @ts-ignore
              width: image.width,
              // @ts-ignore
              height: image.height,
            };
          }),
        }),
      }}
      // Only included Twitter data if we have it
      twitter={{
        ...(metadata.twitterCardType && { cardType: metadata.twitterCardType }),
        // Handle is the twitter username of the content creator
        ...(metadata.twitterUsername && { handle: metadata.twitterUsername }),
      }}
    />
  );
};

Seo.propTypes = {
  metadata: PropTypes.shape({
    metaTitle: PropTypes.string.isRequired,
    metaDescription: PropTypes.string.isRequired,
    shareImage: mediaPropTypes,
    twitterCardType: PropTypes.string,
    twitterUsername: PropTypes.string,
  }),
};

export default Seo;
