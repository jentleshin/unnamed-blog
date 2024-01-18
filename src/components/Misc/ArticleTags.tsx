import { combineClasses } from "../../utils/utils";
import Text from "../Text";

const ArticleTags = ({
  tags,
  center = false,
}: {
  tags: string;
  center?: boolean;
}) => {
  return (
    <>
      {tags.split(",").map((each, i) => (
        <Text
          token
          key={i}
          className="mr-2 inline-block text-organic dark:text-lime"
        >
          #{each.trim()}
        </Text>
      ))}
    </>
  );
};

export default ArticleTags;
