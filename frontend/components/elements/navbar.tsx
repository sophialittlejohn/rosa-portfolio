import { useEffect, useRef } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const currentLogo = configuration.pageColor === "dark" ? logoDark : logo;
  const { asPath } = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 1) {
        scrollRef.current?.classList.remove("shadow-md");
        // logoRef.current?.classList.remove("-top-20", "absolute");
      } else {
        scrollRef.current?.classList.add("shadow-md");
        // logoRef.current?.classList.add("-top-20", "absolute");
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className={classNames("w-full sticky -top-2 z-20 transition-shadow", {
        "bg-primaryB text-white": configuration.pageColor === "dark",
        "bg-primaryA": configuration.pageColor === "light",
      })}
    >
      <nav className="max-w-screen-xl w-full mx-auto">
        <ul className="flex content-center justify-center pt-7 sm:pt-14 sm:mb-6 md:mb-10 w-full gap-4 md:gap-6 mx-auto">
          {navbar?.links?.map((navLink) => {
            const navPath = asPath.slice(1).split("/")[0];
            return (
              <li key={`${navLink?.id}${Math.random()}`}>
                {navLink && (
                  <CustomLink link={navLink}>
                    <div
                      className={classNames("text-lg md:text-2xl uppercase", {
                        "font-bold":
                          // @ts-ignore
                          navPath === navLink?.url.slice(1) ||
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
      <div
        ref={logoRef}
        className="relative md:absolute transition-all bg-transparent md:top-1/4 md:right-0 md:left-auto flex items-center justify-center my-6 md:my-auto md:mx-6"
      >
        <CustomLink
          link={{ url: "/", id: "home", text: "", _id: "home" }}
          styles="h-full mx-auto w-auto"
        >
          {currentLogo && (
            <NextImage media={currentLogo} height={60} width={60} />
          )}
        </CustomLink>
      </div>
    </div>
  );
};

export default Navbar;
