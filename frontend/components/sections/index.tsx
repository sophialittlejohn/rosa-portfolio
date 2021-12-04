import BottomActions from "./bottom-actions";
import { BreadCrumbs } from "../elements/breadcrumbs";
import FeatureColumnsGroup from "./feature-columns-group";
import FeatureRowsGroup from "./feature-rows-group";
import Form from "./form";
import { Gallery } from "./gallery";
import Hero from "./hero";
import ImageSection from "./image";
import { ImagesPanel } from "./images-panel";
import LargeVideo from "./large-video";
import { PageContentSectionsDynamicZone } from "../../utils/@types/strapi";
import RichText from "./rich-text";
import classNames from "classnames";
import { useRouter } from "next/router";

// Map Strapi sections to section components
const sectionComponents = {
  "sections.hero": Hero,
  "sections.large-video": LargeVideo,
  "sections.feature-columns-group": FeatureColumnsGroup,
  "sections.feature-rows-group": FeatureRowsGroup,
  "sections.bottom-actions": BottomActions,
  "sections.rich-text": RichText,
  "sections.form": Form,
  "sections.image": ImageSection,
  "sections.gallery": Gallery,
  "sections.images-panel": ImagesPanel,
};

type SectionProps = {
  sectionData: PageContentSectionsDynamicZone;
  pageColor?: string;
};

// Display a section individually
const Section = ({ sectionData, pageColor }: SectionProps) => {
  // Prepare the component
  // @ts-ignore
  const SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

  // Display the section
  return <SectionComponent data={sectionData} pageColor={pageColor} />;
};

const PreviewModeBanner = () => {
  const router = useRouter();
  const exitURL = `/api/exit-preview?redirect=${encodeURIComponent(
    router.asPath
  )}`;

  return (
    <section className="py-4 bg-red-600 text-red-100 font-semibold uppercase tracking-wide">
      <div className="container">
        Preview mode is on.{" "}
        <a
          className="underline"
          href={`/api/exit-preview?redirect=${router.asPath}`}
        >
          Turn off
        </a>
      </div>
    </section>
  );
};

type SectionsProps = {
  sections: PageContentSectionsDynamicZone[];
  preview: boolean;
  layout?: "horizontal" | "vertical";
  pageColor?: string;
  slug: "string";
};

const layoutStyles = {
  common: "grid justify-center",
  vertical: "flex flex-col items-center content-center space-y-10",
  horizontal: "grid-cols-1 md:grid-cols-2 gap-x-14 px-4 md:px:0",
};

const Sections = ({
  sections,
  preview,
  layout = "vertical",
  pageColor,
}: SectionsProps) => {
  const { asPath } = useRouter();
  const fullscreen = !!asPath.includes("work/");

  return (
    <main>
      {/* Show a banner if preview mode is on */}
      <div
        className={classNames(layoutStyles.common, layoutStyles[layout], {
          "h-full": fullscreen,
        })}
      >
        <BreadCrumbs />
        {preview && <PreviewModeBanner />}
        {/* Show the actual sections */}
        {sections.map((section) => (
          <Section
            sectionData={section}
            // @ts-ignore
            key={`${section.__component}${section.id}`}
            pageColor={pageColor}
          />
        ))}
      </div>
    </main>
  );
};

export default Sections;
