import { ComponentLayoutNavbar } from "../../utils/@types/strapi";
import CustomLink from "./custom-link";
import { NextImage } from "./image";
import classNames from "classnames";
import { useRouter } from "next/router";

type NavBarProps = {
  navbar: ComponentLayoutNavbar;
  logo: any;
  logoDark: any;
  configuration: Record<any, any>;
};

const Navbar = ({ navbar, logo, logoDark, configuration }: NavBarProps) => {
  const currentLogo = configuration.pageColor === "dark" ? logoDark : logo;
  const { asPath } = useRouter();
  return (
    <div className="w-full inline-block relative">
      <nav className="max-w-screen-xl">
        <ul className="flex content-center justify-center pt-7 sm:pt-14 sm:mb-6 md:mb-20 w-full gap-4 md:gap-6">
          {navbar?.links?.map((navLink) => {
            return (
              <li key={`${navLink?.id}${Math.random()}`}>
                {navLink && (
                  <CustomLink link={navLink}>
                    <div
                      className={classNames("text-lg md:text-2xl uppercase", {
                        "font-bold":
                          asPath.slice(1) === navLink?.url ||
                          asPath === navLink?.url,
                      })}
                    >
                      {navLink?.text}
                    </div>
                  </CustomLink>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="md:absolute bg-transparent md:top-1/4 md:right-0 md:left-auto flex items-center justify-center my-6 md:my-auto md:mx-6">
        <CustomLink
          link={{ url: "/", id: "home", text: "", _id: "home" }}
          styles="h-full mx-auto w-auto"
        >
          {logo && <NextImage media={currentLogo} height={60} width={60} />}
        </CustomLink>
      </div>
    </div>
  );
};

export default Navbar;
