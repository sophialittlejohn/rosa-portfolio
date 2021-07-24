import Image from "next/image";
import PropTypes from "prop-types";
import { getStrapiMedia } from "../../utils/media";
import { mediaPropTypes } from "../../utils/types";

// @ts-ignore
const NextImage = ({ media, ...props }) => {
  const { url, alternativeText } = media;

  // @ts-ignore
  const loader = ({ src }) => {
    return getStrapiMedia(src);
  };

  // The image has a fixed width and height
  if (props.width && props.height) {
    return (
      // @ts-ignore
      <Image loader={loader} src={url} alt={alternativeText || ""} {...props} />
    );
  }

  // The image is responsive
  return (
    <Image
      // @ts-ignore
      loader={loader}
      layout="responsive"
      width={media.width}
      height={media.height}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
    />
  );
};

// @ts-ignore
// Image.propTypes = {
//   media: mediaPropTypes.isRequired,
//   className: PropTypes.string,
// };

export default NextImage;
