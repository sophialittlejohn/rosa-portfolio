import { ComponentSectionsGallery } from "../../utils/@types/strapi";
import { NextImage } from "../elements/image";

type GalleryProps = { data: ComponentSectionsGallery };

export const Gallery = ({ data }: GalleryProps) => {
  console.log("➜ ~ data", data);
  return (
    <section className="">
      {data?.title && <h2>{data.title}</h2>}
      {data?.subtitle && <h3>{data.subtitle}</h3>}
      {data?.images &&
        data.images.map((image) => {
          return <NextImage media={image} />;
        })}
    </section>
  );
};
