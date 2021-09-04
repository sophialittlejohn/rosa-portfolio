import Image from "next/image";
import { getStrapiMedia } from "../../utils/media";

// @ts-ignore
export const NextImage = ({ media, ...props }) => {
  console.log("➜ ~ media", media);
  // @ts-ignore
  const loader = ({ src }) => {
    return getStrapiMedia(src);
  };

  // The image has a fixed width and height
  if (props.width && props.height) {
    return (
      // @ts-ignore
      <Image
        // @ts-ignore
        loader={loader}
        src={media?.url || ""}
        alt={media?.alternativeText || ""}
        {...props}
      />
    );
  }

  // The image is responsive
  return (
    <Image
      // @ts-ignore
      loader={loader}
      layout="responsive"
      width={media?.width}
      height={media?.height}
      objectFit="contain"
      src={media?.url}
      alt={media?.alternativeText || ""}
    />
  );
};
