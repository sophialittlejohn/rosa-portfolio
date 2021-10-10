import { ComponentLayoutNavbar } from "../../utils/@types/strapi";
import CustomLink from "./custom-link";
import { NextImage } from "./image";
import classNames from "classnames";
import { useRouter } from "next/router";

type NavBarProps = {
  navbar: ComponentLayoutNavbar;
  logo: any;
};

const Navbar = ({ navbar, logo }: NavBarProps) => {
  const { asPath } = useRouter();
  return (
    <div className="w-full inline-block relative">
      <nav className="max-w-screen-xl">
        <ul className="flex content-center justify-center pt-7 sm:pt-14 mb-10 md:mb-20">
          {navbar?.links?.map((navLink) => {
            return (
              <li key={`${navLink?.id}${Math.random()}`}>
                {navLink && (
                  <CustomLink link={navLink}>
                    <div
                      className={classNames(
                        "text-lg md:text-2xl mx-4 uppercase",
                        { "font-bold": asPath?.includes(navLink?.url || "") }
                      )}
                    >
                      {navLink?.text}
                    </div>
                  </CustomLink>
                )}
              </li>
            );
          })}
          <div className="bg-white bg-opacity-5 absolute right-0">
            <CustomLink link={{ url: "/", id: "home", text: "", _id: "home" }}>
              {logo && <NextImage media={logo} height={60} width={60} />}
            </CustomLink>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
