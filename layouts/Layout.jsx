import React from "react";
import Nav from "@/components/Nav";

const Layout = ({ children }) => {
  return (
    /* relative h-screen */
    <div className="scroll-smooth">
      <Nav />
      <main className="w-screen px-5 overflow-x-hidden">
        {/* <div className="h-screen p-5 md:p-10">{children}</div> */}
        {children}
      </main>
    </div>
  );
};

export default Layout;
