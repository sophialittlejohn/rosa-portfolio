import { ComponentSectionsHero } from "../../utils/@types/strapi";
import { NextImage } from "../elements/image";
import { useRouter } from "next/router";

type HeroProps = {
  data: ComponentSectionsHero;
};

const Hero = ({ data }: HeroProps) => {
  const { asPath } = useRouter();

  const styles = asPath === "/" ? "md:w-1/3" : "";

  return (
    <section className={`container flex items-center w-full ${styles}`}>
      <div className="mt-6 md:mt-0 w-full md:w-xxxl mx-auto">
        <NextImage media={data.picture} />
        {data.picture?.caption && (
          <p className="mt-4 md:mt-9 text-lg leading-5 px-4 text-primaryB italic">
            {data.picture?.caption}
          </p>
        )}
      </div>
    </section>
  );
};

export default Hero;
