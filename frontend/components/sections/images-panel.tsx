import {
  ComponentLinksLink,
  ComponentSectionsImagesPanel,
} from "../../utils/@types/strapi";

import CustomLink from "../elements/custom-link";
import { Fragment } from "react";
import { NextImage } from "../elements/image";
import classNames from "classnames";

type ImagesPanelProps = {
  data: ComponentSectionsImagesPanel;
};

export const ImagesPanel = ({ data }: ImagesPanelProps) => {
  return (
    <section className="w-screen px-6">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-0 gap-y-8 md:gap-2 flex-wrap md:flex-nowrap">
        {data?.images?.map((image) => {
          const { url, id, _id, text, newTab } = image as ComponentLinksLink;
          const imageStyles = image?.rounded
            ? {
                width: 256,
                height: 256,
                classNames: "w-full object-cover rounded-full",
                layout: "fixed",
              }
            : {};
          return (
            <Fragment key={image?._id}>
              <CustomLink
                key={id}
                link={{ url, id, _id, text, newTab }}
                styles="w-full mx-auto flex items-center justify-center flex-col"
              >
                {image?.image && (
                  <div
                    className={classNames("relative mx-auto w-full", {
                      "flex-col flex items-center": image.rounded,
                    })}
                  >
                    <div
                      className={classNames(
                        `hidden md:flex items-center justify-center text-center absolute z-10 shadow-md hover:bg-gray-300 bg-opacity-0 transition-colors hover:bg-opacity-70 text-black font-bold text-2xl text-opacity-0 hover:text-opacity-100 uppercase`,
                        {
                          "rounded-full md:w-64 md:h-64 mx-auto": image.rounded,
                          "w-full h-full": !image.rounded,
                        }
                      )}
                    >
                      {text}
                    </div>
                    <NextImage media={image.image} {...imageStyles} />
                    <div className="w-full text-center mt-6 md:mt-14">
                      {image?.heading && (
                        <h2 className="text-lg font-normal italic">
                          {image.heading}
                        </h2>
                      )}
                      {image?.heading && (
                        <h3 className="font-thin text-lg">
                          {image.subheading}
                        </h3>
                      )}
                    </div>
                  </div>
                )}
              </CustomLink>
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};
