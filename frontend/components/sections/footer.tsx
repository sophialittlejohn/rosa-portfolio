import { ComponentLayoutFooter } from "../../utils/@types/strapi";
import CustomLink from "../elements/custom-link";
import classNames from "classnames";

type FooterProps = {
  footer: ComponentLayoutFooter;
  configuration: Record<string, string>;
};

const Footer = ({ footer, configuration }: FooterProps) => {
  return (
    <footer className="py-12 self-end content-center w-full text-center">
      <CustomLink link={{ url: "/", id: "home", text: "home", _id: "home" }}>
        <div
          className={classNames("lg:prose-lg max-w-none", {
            "dark:prose": configuration.pageColor === "dark",
            prose: configuration.pageColor === "light",
          })}
        >
          <div className="text-lg font-regular md:text-2xl">{footer.text}</div>
          <div className="font-thin text-sm md:text-lg ">{footer.subtext}</div>
        </div>
      </CustomLink>
    </footer>
  );
};

export default Footer;
