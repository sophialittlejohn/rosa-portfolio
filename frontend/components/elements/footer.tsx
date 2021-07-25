import { ComponentLayoutFooter } from "../../utils/@types/strapi";
import CustomLink from "./custom-link";
import NextImage from "./image";

type FooterProps = {
  footer: ComponentLayoutFooter;
};

const Footer = ({ footer }: FooterProps) => {
  return (
    <footer className="pt-12 bg-gray-100">
      <div className="container flex flex-col lg:flex-row lg:justify-between">
        <div>
          {footer.logo && (
            <NextImage width="120" height="33" media={footer.logo} />
          )}
        </div>
        <nav className="flex flex-wrap flex-row lg:gap-20 items-start lg:justify-end mb-10">
          {/*  @ts-ignore */}
          {footer.columns.map((footerColumn) => (
            <div
              key={footerColumn?.id}
              className="mt-10 lg:mt-0 w-6/12 lg:w-auto"
            >
              <p className="uppercase tracking-wide font-semibold">
                {footerColumn?.title}
              </p>
              <ul className="mt-2">
                {/*  @ts-ignore */}
                {footerColumn.links.map((link) => (
                  <li
                    key={link?.id}
                    className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900"
                  >
                    {link && <CustomLink link={link}>{link?.text}</CustomLink>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="text-sm bg-gray-200 py-6 text-gray-700">
        <div className="container">{footer.smallText}</div>
      </div>
    </footer>
  );
};

export default Footer;
