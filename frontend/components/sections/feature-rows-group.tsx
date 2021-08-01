import Link from "next/link";
import NextImage from "../elements/image";

// @ts-ignore
const FeatureRowsGroup = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-0 py-12 md:py-0">
      {/* @ts-ignore */}
      {data.features.map((feature) => (
        <Link href={feature?.link.url}>
          <div
            className={"flex flex-col items-center px-10 sm:px-20"}
            key={feature.id}
          >
            <div className="w-full lg:w-6/12 text-lg">
              <div className="w-full h-auto max-h-full">
                <NextImage media={feature.media} height={500} width={500} />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text">{feature?.title || "TITLE"}</h3>
              <p className="">{feature?.description || "DESCRIPTION"}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeatureRowsGroup;
