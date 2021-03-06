import { ComponentSectionsGallery } from "../../utils/@types/strapi";
import { NextImage } from "../elements/image";
import classNames from "classnames";

type GalleryProps = { data: ComponentSectionsGallery };

export const Gallery = ({ data }: GalleryProps) => {
  return (
    <section
      className={classNames("gallery w-full text-center pb-28 mx-auto", {
        "max-w-5xl": !data.fullscreen,
      })}
    >
      <div className="prose sm:prose-sm md:prose-md mx-auto mb-8">
        {data?.title && <h2>{data.title}</h2>}
        {data?.subtitle && <h3>{data.subtitle}</h3>}
      </div>
      <div
        className={classNames("", {
          "w-full mx-auto": !data.fullscreen,
        })}
      >
        {data?.rows &&
          data.rows.map((row) => {
            const cols = row?.pictures?.length || 0;
            return (
              <div
                key={row?.id}
                className={classNames("px-2 md:px-0", {
                  "w-screen": data.fullscreen,
                  "space-y-2 md:space-y-0 md:grid grid-cols-2 gap-x-1 md:gap-x-6 md:gap-y-6 pt-6":
                    cols > 1,
                  "pt-6": !data.fullscreen,
                })}
              >
                {row?.pictures?.map((picture) => {
                  return (
                    <div className="w-full" key={picture?._id || ""}>
                      <NextImage
                        // @ts-ignore
                        media={picture}
                        format="medium"
                        layout="fixed"
                      />
                    </div>
                  );
                })}
                {row?.caption && (
                  <div className="col-span-2 p-4 md:py-10">
                    <span className="prose prose-tight md:prose-tightMd">
                      <p className="">{row.caption}</p>
                    </span>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};
