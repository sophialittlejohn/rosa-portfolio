import { ComponentLayoutFooter } from "../../utils/@types/strapi";
import CustomLink from "./custom-link";
import classNames from "classnames";

type FooterProps = {
  footer: ComponentLayoutFooter;
  configuration: Record<string, string>;
};

const Footer = ({ footer, configuration }: FooterProps) => {
  return (
    <footer className="py-12 self-end content-center w-full text-center">
      <CustomLink link={{ url: "/", id: "home", text: "home" }}>
        <div
          className={classNames(
            "lg:prose-lg max-w-none font-thin italic text-sm md:text-lg",
            {
              "dark:prose": configuration.pageColor === "dark",
              prose: configuration.pageColor === "light",
            }
          )}
        >
          {footer.smallText}
        </div>
      </CustomLink>
    </footer>
  );
};

export default Footer;
