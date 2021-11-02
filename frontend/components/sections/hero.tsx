import { ComponentSectionsHero } from "../../utils/@types/strapi";
import { Markdown } from "../elements/markdown";
import { NextImage } from "../elements/image";
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
      className={`container flex items-center mt-6 md:mt-0 ${styles} mx-auto md:pb-56`}
    >
      <div className="w-full mx-auto text-center max-w-3xl">
        <div className="prose prose-sm md:prose-md mx-auto text-center mb-10 px-4">
          {data?.title && <h2 className="uppercase pb-8">{data.title}</h2>}
          {data?.subtitle && <Markdown content={data?.subtitle} />}
        </div>
        {data?.picture && <NextImage media={data.picture} format="medium" />}
        {data?.caption && (
          <div className="mt-4 md:mt-9 prose prose-tight md:prose-tightMd px-4 mx-auto">
            <Markdown content={data.caption} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
