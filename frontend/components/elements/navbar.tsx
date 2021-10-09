import { ComponentLayoutNavbar } from "../../utils/@types/strapi";
import CustomLink from "./custom-link";
import classNames from "classnames";
import { useRouter } from "next/router";

type NavBarProps = {
  navbar: ComponentLayoutNavbar;
};

const Navbar = ({ navbar }: NavBarProps) => {
  const { asPath } = useRouter();
  return (
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
      </ul>
    </nav>
  );
};

export default Navbar;
