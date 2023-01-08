import React, { ReactNode } from "react";
import TabBar from "./TabBar";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-5 ">
      <div className="col-span-1  bg-blue-500 h-screen overflow-y-scroll">
        <TabBar></TabBar>
      </div>
      <div className="col-span-4 h-screen overflow-y-scroll">{children}</div>
    </div>
  );
};

export default Layout;
