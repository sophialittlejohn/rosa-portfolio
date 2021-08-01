import { ComponentLayoutFooter } from "../../utils/@types/strapi";
import CustomLink from "./custom-link";
import link from "next/link";

type FooterProps = {
  footer: ComponentLayoutFooter;
};

const Footer = ({ footer }: FooterProps) => {
  return (
    <footer className="py-12 self-end content-center w-full text-center">
      <CustomLink link={{ url: "/", id: "home", text: "home" }}>
        <div className="prose dark:prose lg:prose-lg max-w-none font-thin italic text-primaryB text-sm md:text-lg">
          {footer.smallText}
        </div>
      </CustomLink>
    </footer>
  );
};

export default Footer;
