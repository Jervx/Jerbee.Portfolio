import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import ToggleTheme from "./ToggleTheme";

const Nav = () => {
  const router = useRouter();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.4,
      }}
      className="sticky top-0 z-[60] bg-white/80 py-1 backdrop-blur-md dark:bg-gray-900/70 w-full"
    >
      <div className="flex items-center justify-between h-16 px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <a
          onClick={() => router.push("/")}
          className="flex-shrink-0 cursor-pointer"
        >
          Jerbee.Portfolio
        </a>
        <div className="flex items-center justify-start space-x-10">
          {" "}
          {/* <a className="cursor-pointer" onClick={()=>router.push("/")}>Me</a>
          <a className="cursor-pointer" onClick={()=>router.push("/")}>Projects</a>
          <a className="cursor-pointer" onClick={()=>router.push("/")}>Achievements</a> */}
          <ToggleTheme />
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
