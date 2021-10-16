import {
  ComponentLinksLink,
  ComponentSectionsImagesPanel,
} from "../../utils/@types/strapi";

import CustomLink from "../elements/custom-link";
import { NextImage } from "../elements/image";

type ImagesPanelProps = {
  data: ComponentSectionsImagesPanel;
};

export const ImagesPanel = ({ data }: ImagesPanelProps) => {
  return (
    <section className="w-screen px-6">
      <div className="w-full flex flex-col md:flex-row gap-2">
        {data?.images?.map((image) => {
          const { url, id, _id, text } = image as ComponentLinksLink;
          return (
            <>
              <CustomLink key={id} link={{ url, id, _id, text }}>
                {image?.image && (
                  <div className="w-full relative">
                    <NextImage media={image.image} />
                    <div className="w-full h-full top-0 hover:bg-gray-300 bg-opacity-0 transition-colors hover:bg-opacity-70 text-black font-bold text-2xl shadow-md text-opacity-0 hover:text-opacity-100 absolute uppercase flex items-center justify-center">
                      {text}
                    </div>
                  </div>
                )}
              </CustomLink>
            </>
          );
        })}
      </div>
    </section>
  );
};
