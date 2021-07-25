import { ReactChild, ReactChildren, useState } from "react";

import Footer from "./elements/footer";
import { Global } from "../utils/@types/strapi";
import Navbar from "./elements/navbar";
import { NextPageContextWithStrapi } from "../utils/types";

type LayoutProps = {
  global: Global;
};

const Layout: React.FC<LayoutProps> = ({ children, global }) => {
  const { navbar, footer } = global;

  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        {navbar && <Navbar navbar={navbar} />}
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      {footer && <Footer footer={footer} />}
    </div>
  );
};

export default Layout;
