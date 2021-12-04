import { ComponentSectionsRichText } from "../../utils/@types/strapi";
import { Markdown } from "../elements/markdown";
import classNames from "classnames";

type RichTextProps = {
  data: ComponentSectionsRichText;
  pageColor: string;
};

const RichText = ({ data, pageColor }: RichTextProps) => {
  return (
    <section
      className={classNames(
        `sm:prose-sm md:prose-md py-12 w-full mx-auto`,
        { "text-center": data.alignment === "center" },
        { "prose-dark": pageColor === "dark" },
        { prose: pageColor === "light" },
        {
          "h-fullscreen flex items-center flex-col justify-center pb-28":
            data.fullscreen,
        }
      )}
    >
      {data?.content && <Markdown content={data.content} />}
    </section>
  );
};

export default RichText;
