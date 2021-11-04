import { ComponentSectionsHero } from "../../utils/@types/strapi";
import { Markdown } from "../elements/markdown";
import { NextImage } from "../elements/image";
import classNames from "classnames";
import { useRouter } from "next/router";

type HeroProps = {
  data: ComponentSectionsHero;
};

const Hero = ({ data }: HeroProps) => {
  const { asPath } = useRouter();

  const isHome = asPath === "/";
  const styles = isHome ? "md:w-1/3" : "";

  return (
    <section
      className={`container flex items-center mt-6 md:mt-0 ${styles} mx-auto md:pb-40`}
    >
      <div className="w-full mx-auto text-center max-w-3xl">
        <div className="prose prose-sm md:prose-md mx-auto text-center mb-10 px-4">
          {data?.title && <h2 className="uppercase pb-8">{data.title}</h2>}
          {data?.subtitle && <Markdown content={data?.subtitle} />}
        </div>
        <div
          className={classNames({
            "grid grid-cols-1 md:gap-10 md:grid-cols-10": data?.captionRight,
          })}
        >
          {data?.picture && (
            <div className={classNames({ "col-span-6": data?.captionRight })}>
              <NextImage media={data.picture} format="medium" />
            </div>
          )}
          {data?.caption && (
            <div
              className={classNames(
                "prose prose-tight md:prose-tightMd px-4 mx-auto",
                { "mt-6 md:mt-2 col-span-4 text-left": data.captionRight },
                { "mt-4 md:mt-9": !data.captionRight }
              )}
            >
              <Markdown content={data.caption} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
