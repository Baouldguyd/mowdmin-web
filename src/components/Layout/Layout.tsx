import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" relative flex flex-col min-h-screen">
      <div className=" bg-transparent z-[100] absolute w-full h-[4rem] ">
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
