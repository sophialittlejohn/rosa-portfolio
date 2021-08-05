import CustomLink from "../elements/custom-link";
import { NextImage } from "../elements/image";

// @ts-ignore
const FeatureRowsGroup = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-evenly w-full md:flex-row gap-12 md:gap-0 py-12 md:py-0 sm:mb-40">
      {/* @ts-ignore */}
      {data.features.map((feature) => {
        console.log("➜ ~ feature", feature);
        return (
          <CustomLink link={feature?.link}>
            <div
              className={"flex flex-col items-center px-10 sm:px-0"}
              key={feature.id}
            >
              <div className="h-56 w-56">
                <NextImage media={feature.media} />
              </div>
              <div className="text-center mt-10">
                <h3 className="text italic">{feature?.title || "TITLE"}</h3>
                <p className="uppercase">
                  {feature?.description || "DESCRIPTION"}
                </p>
              </div>
            </div>
          </CustomLink>
        );
      })}
    </div>
  );
};

export default FeatureRowsGroup;
