import { ComponentMetaMetadata } from "../../utils/@types/strapi";
import { NextSeo } from "next-seo";
import { getStrapiMedia } from "../../utils/media";

type SeoProps = {
  metadata: ComponentMetaMetadata;
};

const Seo = ({ metadata }: SeoProps) => {
  // Prevent errors if no metadata was set
  if (!metadata) return null;

  return (
    <NextSeo
      title={metadata?.metaTitle}
      description={metadata?.metaDescription}
      // @ts-ignore
      openGraph={{
        // Title and description are mandatory
        title: metadata?.metaTitle,
        description: metadata?.metaDescription,
        // Only include OG image if we have it
        // Careful: if you disable image optimization in Strapi, this will break
        ...(metadata.shareImage && {
          // images: Object.values(metadata?.shareImage?.formats).map((image) => {
          images: Object.values(metadata?.shareImage?.formats || []).map(
            (image) => {
              return {
                // @ts-ignore
                url: getStrapiMedia(image.url),
                // @ts-ignore
                width: image.width,
                // @ts-ignore
                height: image.height,
              };
            }
          ),
        }),
      }}
      // Only included Twitter data if we have it
      // twitter={{
      //   ...(metadata?.twitterCardType && {
      //     cardType: metadata?.twitterCardType,
      //   }),
      //   // Handle is the twitter username of the content creator
      //   ...(metadata?.twitterUsername && { handle: metadata?.twitterUsername }),
      // }}
    />
  );
};

export default Seo;
