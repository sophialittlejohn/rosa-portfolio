type MenuItem = {
  title: string;
  active: boolean;
};

type MenuProps = {
  items: MenuItem[];
};

export const Menu = ({ items }: MenuProps) => {
  return (
    <header>
      <ul className="flex content-center w-full justify-center pt-7 mb-10 md:mb-20">
        {items.map((item) => {
          return (
            <li className="text-lg md:text-2xl mx-3 uppercase">{item.title}</li>
          );
        })}
      </ul>
    </header>
  );
};
