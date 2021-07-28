import { ComponentSectionsRichText } from "../../utils/@types/strapi";
import Markdown from "react-markdown";

type RichTextProps = {
  data: ComponentSectionsRichText;
};

const RichText = ({ data }: RichTextProps) => {
  const textAlignment =
    data.alignment === "center" ? "text-center" : "text-left";

  return (
    <section
      className={`prose lg:prose-lg container py-12 w-3/4 mx-auto ${textAlignment}`}
    >
      {data?.content && <Markdown source={data.content} />}
    </section>
  );
};

export default RichText;
