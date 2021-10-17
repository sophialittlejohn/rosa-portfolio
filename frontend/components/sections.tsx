import BottomActions from "../components/sections/bottom-actions";
import FeatureColumnsGroup from "../components/sections/feature-columns-group";
import FeatureRowsGroup from "../components/sections/feature-rows-group";
import { Gallery } from "./sections/gallery";
import Hero from "../components/sections/hero";
import ImageSection from "./sections/image";
import { ImagesPanel } from "./sections/images-panel";
import LargeVideo from "../components/sections/large-video";
import LeadForm from "./sections/lead-form";
import { PageContentSectionsDynamicZone } from "../utils/@types/strapi";
import RichText from "./sections/rich-text";
import TestimonialsGroup from "../components/sections/testimonials-group";
import classNames from "classnames";
import { useRouter } from "next/router";

// Map Strapi sections to section components
const sectionComponents = {
  "sections.hero": Hero,
  "sections.large-video": LargeVideo,
  "sections.feature-columns-group": FeatureColumnsGroup,
  "sections.feature-rows-group": FeatureRowsGroup,
  "sections.bottom-actions": BottomActions,
  "sections.testimonials-group": TestimonialsGroup,
  "sections.rich-text": RichText,
  "sections.lead-form": LeadForm,
  "sections.image": ImageSection,
  "sections.gallery": Gallery,
  "sections.images-panel": ImagesPanel,
};

// Display a section individually
// @ts-ignore
const Section = ({ sectionData, pageColor }) => {
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
};

const layoutStyles = {
  common: "grid justify-center",
  vertical: "flex flex-col items-center content-center space-y-10",
  horizontal: "grid-cols-1 md:grid-cols-2 gap-4",
};

// Display the list of sections
const Sections = ({
  sections,
  preview,
  layout = "vertical",
  pageColor,
}: SectionsProps) => {
  const { asPath } = useRouter();
  const fullscreen = !!asPath.includes("work/");

  return (
    <main
      className={classNames(layoutStyles.common, layoutStyles[layout], {
        "h-full": fullscreen,
      })}
    >
      {/* Show a banner if preview mode is on */}
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
    </main>
  );
};

export default Sections;
