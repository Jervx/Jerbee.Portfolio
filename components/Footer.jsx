import React from "react";

import { GoMarkGithub } from "react-icons/go";
import { BsMouse } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <div className="w-screen h-screen text-white bg-gray-200 bg-noir ">
      <footer className="relative overflow-hidden px-[20px] md:px-[50px] pt-[20px] pb-[80px] md:pb-[25px] md:pt-[75px] lg:h-screen flex flex-col">
        <div className="z-[2] text-center backdrop-blur-[100px] bg-[#373737]/[0.4] rounded-[10px] flex-grow flex flex-col"></div>
        <div className="flex justify-between py-6">
          <p className="">09991612445</p>
          <p>jerbeeparagas11@gmail.com</p>
          <div className="flex gap-4">
          <div className="flex items-center gap-5">
              <a
                href="https://github.com/Jervx"
                target="blank"
                className="flex items-center"
              >
                <GoMarkGithub className="duration-200 hover:scale-110" />
              </a>
              <a
                href="https://linkedin.com/in/jerbee-paragas-8970b024b"
                target="blank"
                className="flex items-center"
              >
                <ImLinkedin className="duration-200 hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
