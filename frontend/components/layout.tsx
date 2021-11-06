import Footer from "./sections/footer";
import { Global } from "../utils/@types/strapi";
import Navbar from "./elements/navbar";
import classNames from "classnames";

type LayoutProps = {
  global: Global;
  configuration: Record<any, any>;
};

const Layout: React.FC<LayoutProps> = ({ children, global, configuration }) => {
  // @ts-ignore
  const { navbar, footer, logo, logoDark } = global;

  return (
    <div
      className={classNames("w-full", {
        "bg-primaryB text-white": configuration.pageColor === "dark",
        "bg-primaryA": configuration.pageColor === "light",
      })}
    >
      <div
        className={classNames(
          "w-full flex flex-col justify-between mx-auto min-h-screen"
        )}
      >
        {/* Aligned to the top */}
        {navbar && (
          <Navbar
            navbar={navbar}
            logo={logo}
            configuration={configuration}
            logoDark={logoDark}
          />
        )}
        <div className="max-w-5xl mx-auto">{children}</div>
        {/* Aligned to the bottom */}
        <div className="max-w-5xl mx-auto">
          {footer && <Footer footer={footer} configuration={configuration} />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
