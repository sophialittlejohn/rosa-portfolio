import Markdown from "react-markdown";
import PropTypes from "prop-types";

// @ts-ignore
const RichText = ({ data }) => {
  return (
    <div className="prose prose-lg container py-12">
      <Markdown source={data.content} />
    </div>
  );
};

RichText.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
  }),
};

export default RichText;
