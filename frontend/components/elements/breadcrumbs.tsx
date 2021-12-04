import CustomLink from "./custom-link";
import classNames from "classnames";
import { useRouter } from "next/router";

export const BreadCrumbs = () => {
  const { query, back } = useRouter();
  if (typeof query.slug === "object" && query.slug.length > 2) {
    return (
      <ul className="flex gap-x-2 px-2 md:px-0 py-4">
        {query?.slug.map((page, index) => {
          const isLastPage = index + 1 === query.slug?.length;
          if (isLastPage) {
            return (
              <li className="flex">
                <div className={classNames("text-gray-500 mr-2 capitalize")}>
                  {page}
                </div>
              </li>
            );
          } else {
            return (
              <li className="flex">
                <div
                  className={classNames("text-black underline mr-2 capitalize")}
                >
                  <CustomLink
                    link={{ id: page, _id: page, url: `/${page}`, text: page }}
                  >
                    {page}
                  </CustomLink>
                </div>
                {" > "}
              </li>
            );
          }
        })}
      </ul>
    );
  } else if (query.slug?.length === 2) {
    return (
      <a
        className="tracking-p cursor-pointer ml-2 border-b pb-1"
        onClick={back}
      >
        {"< Back"}
      </a>
    );
  } else {
    return null;
  }
};
