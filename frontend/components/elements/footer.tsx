import { ComponentLayoutFooter } from "../../utils/@types/strapi";

type FooterProps = {
  footer: ComponentLayoutFooter;
};

const Footer = ({ footer }: FooterProps) => {
  return (
    <footer className="py-12 self-end content-center w-full text-center">
      <div className="prose lg:prose-lg max-w-none font-thin italic text-primaryB text-sm md:text-lg">
        {footer.smallText}
      </div>
    </footer>
  );
};

export default Footer;
