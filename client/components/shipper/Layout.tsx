import React, { ReactNode } from "react";
import Detail from "./Detail";
import TabBar from "./TabBar";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 h-screen bg-blue-500">
        <TabBar></TabBar>
      </div>
      <div className="col-span-4 h-screen ">{children}</div>
    </div>
  );
};

export default Layout;
