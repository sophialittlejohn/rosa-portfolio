import BottomActions from "../components/sections/bottom-actions";
import FeatureColumnsGroup from "../components/sections/feature-columns-group";
import FeatureRowsGroup from "../components/sections/feature-rows-group";
import Hero from "../components/sections/hero";
import ImageSection from "./sections/image";
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
};

// Display a section individually
// @ts-ignore
const Section = ({ sectionData }) => {
  // Prepare the component
  // @ts-ignore
  const SectionComponent = sectionComponents[sectionData.__component];

  if (!SectionComponent) {
    return null;
  }

  // Display the section
  return <SectionComponent data={sectionData} />;
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
};

// Display the list of sections
const Sections = ({ sections, preview, layout }: SectionsProps) => {
  const flexDirection =
    layout === "horizontal" ? "md:flex-row md:space-x-20" : "";
  return (
    <main
      className={classNames(
        "flex flex-col items-center content-center",
        flexDirection
      )}
    >
      {/* Show a banner if preview mode is on */}
      {preview && <PreviewModeBanner />}
      {/* Show the actual sections */}
      {/* @ts-ignore */}
      {sections.map((section) => (
        <Section
          sectionData={section}
          // @ts-ignore
          key={`${section.__component}${section.id}`}
        />
      ))}
    </main>
  );
};

export default Sections;
