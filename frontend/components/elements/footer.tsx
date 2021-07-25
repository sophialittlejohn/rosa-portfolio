import { ComponentLayoutFooter } from "../../utils/@types/strapi";

type FooterProps = {
  footer: ComponentLayoutFooter;
};

const Footer = ({ footer }: FooterProps) => {
  return (
    <footer className="py-12 mx-auto">
      <div className="text-sm md:text-lg">
        <div className="container font-thin italic text-primaryB">
          {footer.smallText}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
