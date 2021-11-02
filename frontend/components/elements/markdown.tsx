import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  content: string;
};

export const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  return <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />;
};
