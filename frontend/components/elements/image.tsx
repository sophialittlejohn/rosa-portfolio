import Image from "next/image";
import { getStrapiMedia } from "../../utils/media";

// @ts-ignore
const NextImage = ({ media, ...props }) => {
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
        src={
          media?.url ||
          "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
        }
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
      width={media?.width || 100}
      height={media?.height || 100}
      objectFit="contain"
      src={media?.url}
      alt={media?.alternativeText || ""}
    />
  );
};

// @ts-ignore
// Image.propTypes = {
//   media: mediaPropTypes.isRequired,
//   className: PropTypes.string,
// };

export default NextImage;
