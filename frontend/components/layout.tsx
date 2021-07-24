import { ReactChild, useState } from "react";

import Footer from "./elements/footer";
import Navbar from "./elements/navbar";
import { NextPageContextWithStrapi } from "../utils/types";
import NotificationBanner from "./elements/notification-banner";

type StrapiGlobal = {
  navbar: any;
  footer: any;
  notificationBanner: any;
};

type LayoutProps = {
  pageContext: NextPageContextWithStrapi;
  children: ReactChild;
  global: StrapiGlobal;
};

const Layout = ({ children, global, pageContext }: LayoutProps) => {
  const { navbar, footer, notificationBanner } = global;

  const [bannerIsShown, setBannerIsShown] = useState(true);
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Aligned to the top */}
      <div className="flex-1">
        {notificationBanner && bannerIsShown && (
          <NotificationBanner
            data={notificationBanner}
            closeSelf={() => setBannerIsShown(false)}
          />
        )}
        <Navbar navbar={navbar} pageContext={pageContext} />
        <div>{children}</div>
      </div>
      {/* Aligned to the bottom */}
      <Footer footer={footer} />
    </div>
  );
};

export default Layout;
