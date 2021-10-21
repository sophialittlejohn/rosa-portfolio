import classNames from "classnames";
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
      <div
        className={classNames({
          "grid grid-cols-2 w-full items-center justify-center content-center max-w-3xl mx-auto":
            !data.fullscreen,
        })}
      >
        {data?.images &&
          data.images.map((image) => {
            return (
              <div
                className={classNames({
                  "w-screen": data.fullscreen,
                })}
              >
                {/* @ts-ignore */}
                <NextImage media={image} />
                {image?.caption && (
                  <p className="py-4 text-2xl font-light">{image.caption}</p>
                )}
              </div>
            );
          })}
      </div>
      {data?.caption && (
        <p className="font-light text-xl mt-8">{data.caption}</p>
      )}
    </section>
  );
};
