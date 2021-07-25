import { ComponentSectionsHero } from "../../utils/@types/strapi";
import NextImage from "../elements/image";

type HeroProps = {
  data: ComponentSectionsHero;
};

const Hero = ({ data }: HeroProps) => {
  return (
    <main className="container flex items-center mx-auto">
      <div className="mt-6 md:mt-0 w-36 md:w-96 mx-auto">
        <NextImage media={data.picture} />
      </div>
    </main>
  );
};

export default Hero;
