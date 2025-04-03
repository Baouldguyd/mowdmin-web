import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" grid grid-rows-[4rem_1fr_1rem]   min-h-screen">
      <div className=" bg-[#000] z-[100]">
        <Header />
      </div>
      <main className=" h-full">{children}</main>
      <div>
      <Footer/>
      </div>
    </div>
  );
};

export default Layout;
