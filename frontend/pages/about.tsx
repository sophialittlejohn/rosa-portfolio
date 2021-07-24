import Image from "next/image";
import { Menu } from "../components/Menu";
import { NextPageContext } from "next";
import { menuItems } from "./work";

type AboutProps = {
  data: Record<string, any>;
};

export default function About({ data }: AboutProps) {
  console.log("➜ ~ props", data[0].body);
  return (
    <div className="bg-primaryB w-full min-h-screen font-body text-white mx-auto">
      <Menu items={menuItems} />
      <div className="flex flex-col sm:flex-row items-center">
        <div>
          <Image
            className="flex-shrink-0"
            height={155}
            width={124}
            src={`http://localhost:1337${data[0].image.url}`}
            alt="Hello"
          />
        </div>
        <div className="max-w-lg">{data[0].body}</div>
      </div>
    </div>
  );
}

export const getStaticProps = async (context: NextPageContext) => {
  console.log("context", context);
  const res = await fetch(`http://localhost:1337/abouts`);
  const data = await res.json();
  console.log("➜ ~ data", data);

  return {
    props: { data },
  };
};
