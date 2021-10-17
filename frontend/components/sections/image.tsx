import { ComponentSectionsImage } from "../../utils/@types/strapi";
import { NextImage } from "../elements/image";

type ImageSectionProps = {
  data: ComponentSectionsImage;
};

const ImageSection = ({ data }: ImageSectionProps) => {
  return (
    <section className="w-1/2 md:w-3/4 mx-auto md:mx-2.5">
      {/* @ts-ignore */}
      <NextImage media={data.image} />
    </section>
  );
};

export default ImageSection;
