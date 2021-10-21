import Image from "next/image";
import { UploadFile } from "../../utils/@types/strapi";

type NextImageProps = {
  media: UploadFile;
  width?: string | number;
  height?: string | number;
  format?: "thumbnail" | "small" | "medium";
  classNames?: string;
};

export const NextImage = ({
  media,
  format = "small",
  classNames,
  ...props
}: NextImageProps) => {
  const img: UploadFile = media?.formats ? media?.formats[format] : media;

  // The image has a fixed width and height
  if (props.width && props.height) {
    return (
      <Image
        // @ts-ignore
        // loader={loader}
        src={img?.url}
        alt={img?.alternativeText || ""}
        className={classNames}
        {...props}
      />
    );
  }

  // The image is responsive
  return (
    <Image
      // @ts-ignore
      // loader={loader}
      layout="responsive"
      width={img?.width || 300}
      height={img?.height || 300}
      objectFit="contain"
      src={img?.url}
      alt={img?.alternativeText || ""}
      className={props.classNames}
    />
  );
};
