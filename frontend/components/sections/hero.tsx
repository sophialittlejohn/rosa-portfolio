import { ComponentSectionsHero } from "../../utils/@types/strapi";
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
      className={`container flex items-center w-full mt-6 md:mt-0 ${styles} mx-auto pb-56`}
    >
      <div className="w-full md:w-xxxl mx-auto prose lg:prose text-center">
        {data?.title && <h2 className="uppercase pb-8">{data.title}</h2>}
        {data?.picture && <NextImage media={data.picture} />}
        {data.picture?.caption && (
          <p className="mt-4 md:mt-9 text-lg leading-5 px-4 italic font-light">
            {data.picture?.caption}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;
