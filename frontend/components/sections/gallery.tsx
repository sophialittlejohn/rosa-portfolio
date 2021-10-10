import { ComponentSectionsGallery } from "../../utils/@types/strapi";
import { NextImage } from "../elements/image";

type GalleryProps = { data: ComponentSectionsGallery };

export const Gallery = ({ data }: GalleryProps) => {
  return (
    <section className="text-center pb-28">
      <div className="prose mx-auto mb-8">
        {data?.title && <h2>{data.title}</h2>}
        {data?.subtitle && <h3>{data.subtitle}</h3>}
      </div>
      {data?.images &&
        data.images.map((image) => {
          return (
            <div className="w-screen">
              {/* @ts-ignore */}
              <NextImage media={image} />
            </div>
          );
        })}
      {data?.caption && (
        <p className="font-light text-xl mt-8">{data.caption}</p>
      )}
    </section>
  );
};
