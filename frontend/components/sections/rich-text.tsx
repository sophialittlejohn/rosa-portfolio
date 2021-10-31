import { ComponentSectionsRichText } from "../../utils/@types/strapi";
import Markdown from "react-markdown";
import classNames from "classnames";
import remarkGfm from "remark-gfm";

type RichTextProps = {
  data: ComponentSectionsRichText;
  pageColor: string;
};

const RichText = ({ data, pageColor }: RichTextProps) => {
  return (
    <section
      className={classNames(
        `prose-sm lg:prose-lg py-12 w-full mx-auto`,
        { "text-center": data.alignment === "center" },
        { "dark:prose": pageColor === "dark" },
        { prose: pageColor === "light" },
        {
          "h-fullscreen flex items-center flex-col justify-center pb-28":
            data.fullscreen,
        }
      )}
    >
      {data?.content && (
        <Markdown children={data.content} remarkPlugins={[remarkGfm]} />
      )}
    </section>
  );
};

export default RichText;
