import { ComponentSectionsRichText } from "../../utils/@types/strapi";
import Markdown from "react-markdown";
import classNames from "classnames";

type RichTextProps = {
  data: ComponentSectionsRichText;
  pageColor: string;
};

const RichText = ({ data, pageColor }: RichTextProps) => {
  return (
    <section
      className={classNames(
        `dark:prose lg:prose-lg container py-12 w-3/4 mx-auto`,
        { "text-center": data.alignment === "center" },
        { "dark:prose": pageColor === "dark" },
        { prose: pageColor === "light" }
      )}
    >
      {data?.content && (
        <Markdown source={data.content} className={classNames()} />
      )}
    </section>
  );
};

export default RichText;
