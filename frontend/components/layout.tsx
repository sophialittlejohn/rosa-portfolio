import Footer from "./elements/footer";
import { Global } from "../utils/@types/strapi";
import Navbar from "./elements/navbar";
import classnames from "classnames";

type LayoutProps = {
  global: Global;
  configuration: Record<any, any>;
};

const Layout: React.FC<LayoutProps> = ({ children, global, configuration }) => {
  console.log("➜ ~ configuration", configuration);
  const { navbar, footer } = global;

  return (
    <div className={classnames("w-full")}>
      <div
        className={
          "flex flex-col justify-between  max-w-5xl mx-auto min-h-screen"
        }
      >
        {/* Aligned to the top */}
        {navbar && <Navbar navbar={navbar} />}
        {children}
        {/* Aligned to the bottom */}
        {footer && <Footer footer={footer} />}
      </div>
    </div>
  );
};

export default Layout;
