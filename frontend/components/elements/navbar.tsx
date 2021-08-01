import { ComponentLayoutNavbar } from "../../utils/@types/strapi";
import CustomLink from "./custom-link";

type NavBarProps = {
  navbar: ComponentLayoutNavbar;
};

const Navbar = ({ navbar }: NavBarProps) => {
  return (
    <nav>
      <ul className="flex content-center w-full justify-center pt-7 mb-10 md:mb-20">
        {navbar?.links?.map((navLink) => {
          if (navLink?.url !== "/")
            return (
              <li key={`${navLink?.id}${Math.random()}`}>
                {navLink && (
                  <CustomLink link={navLink}>
                    <div className="text-lg md:text-2xl mx-3 uppercase">
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
