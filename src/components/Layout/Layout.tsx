import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" grid grid-rows-1 pt-4 bg-blue-900 min-h-screen">
      <div className="">
        <Header />
      </div>
      <main className=" h-full">{children}</main>
    </div>
  );
};

export default Layout;
