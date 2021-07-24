import { Menu } from "../../components/Menu";

export const menuItems = [
  { title: "About", active: false },
  { title: "Work", active: false },
  { title: "CV", active: false },
  { title: "Contact", active: false },
];

export default function Work() {
  // const work = [];
  return (
    <div className="max-w-2xl mx-auto">
      <Menu items={menuItems} />
      {/* {work.map((item) => {
        return <div>{item}</div>;
      })} */}
    </div>
  );
}
