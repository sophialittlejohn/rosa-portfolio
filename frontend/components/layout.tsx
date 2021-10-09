import Footer from "./sections/footer";
import { Global } from "../utils/@types/strapi";
import Navbar from "./elements/navbar";
import classNames from "classnames";

type LayoutProps = {
  global: Global;
  configuration: Record<any, any>;
};

const Layout: React.FC<LayoutProps> = ({ children, global, configuration }) => {
  const { navbar, footer } = global;

  return (
    <div
      className={classNames("w-full", {
        "bg-primaryB text-white": configuration.pageColor === "dark",
        "bg-primaryA": configuration.pageColor === "light",
      })}
    >
      <div
        className={classNames(
          "flex flex-col justify-between max-w-5xl mx-auto min-h-screen"
        )}
      >
        {/* Aligned to the top */}
        {navbar && <Navbar navbar={navbar} />}
        {children}
        {/* Aligned to the bottom */}
        {footer && <Footer footer={footer} configuration={configuration} />}
      </div>
    </div>
  );
};

export default Layout;
