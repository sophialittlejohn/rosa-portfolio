import Footer from "./elements/footer";
import { Global } from "../utils/@types/strapi";
import Navbar from "./elements/navbar";
import classnames from "classnames";

type LayoutProps = {
  global: Global;
  configuration: Record<any, any>;
};

const Layout: React.FC<LayoutProps> = ({ children, global, configuration }) => {
  const { navbar, footer } = global;

  const pageColor = !configuration?.pageColor || "bg-primaryA";

  return (
    <div
      className={classnames(
        "flex flex-col justify-between min-h-screen",
        pageColor
      )}
    >
      {/* Aligned to the top */}
      {navbar && <Navbar navbar={navbar} />}
      <div>{children}</div>
      {/* Aligned to the bottom */}
      {footer && <Footer footer={footer} />}
    </div>
  );
};

export default Layout;
