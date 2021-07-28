import { ComponentSectionsHero } from "../../utils/@types/strapi";
import NextImage from "../elements/image";

type HeroProps = {
  data: ComponentSectionsHero;
};

const Hero = ({ data }: HeroProps) => {
  return (
    <section className="container flex items-center w-full md:w-1/3">
      <div className="mt-6 md:mt-0 w-36 md:w-96 mx-auto">
        <NextImage media={data.picture} />
      </div>
    </section>
  );
};

export default Hero;
