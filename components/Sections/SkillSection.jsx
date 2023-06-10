import React from "react";

import SkillFragment from "@/components/Containers/SkillFragment";
import NodeJsSvg from "@/components/Icons/NodeJsSvg";
import ReactjsSvg from "@/components/Icons/ReactjsSvg";
import FigmaSvg from "@/components/Icons/FigmaSvg";
import GithubSvg from "@/components/Icons/GithubSvg";
import JavaSvg from "@/components/Icons/JavaSvg";
import NextjsSvg from "@/components/Icons/NextjsSvg";
import MongodbSvg from "@/components/Icons/MongodbSvg";
import MysqlSvg from "@/components/Icons/MysqlSvg";
import JavascriptSvg from "@/components/Icons/JavascriptSvg";
import VueJsSvg from "@/components/Icons/VueJsSvg";
import PythonSvg from "@/components/Icons/PythonSvg";
import TailwindSvg from "@/components/Icons/TailwindSvg";
import ReduxSvg from "@/components/Icons/ReduxSvg";
import ArduinoSvg from "@/components/Icons/ArduinoSvg";
import NpmSvg from "@/components/Icons/NpmSvg";
import GitSvg from "@/components/Icons/GitSvg";
import BashShellSvg from "@/components/Icons/BashShellSvg";
import VscodeSvg from "@/components/Icons/VscodeSvg";
import FirebaseSvg from "@/components/Icons/FirebaseSvg";
import VercelSvg from "@/components/Icons/VercelSvg";
import OSWindowsSvg from "@/components/Icons/OSWindowsSvg";
import RaspberryPiSvg from "@/components/Icons/RaspberryPiSvg";
import MSWordSvg from "@/components/Icons/MSWordSvg";
import HtmlSvg from "../Icons/HtmlSvg";

const SkillSection = () => {
  return (
    <section className="w-full h-screen bg-no-repeat bg-cover    mt-28 px-[10rem]">
        <p className="my-8 tracking-wide text-right text-7xl font-open-sans">POWERFUL things I've used</p>
      <div className="relative mx-auto lg:max-h-min max-w-[1800px] overflow-hidden  sm:h-[650px] rounded-3xl ">
        {/* left-[-60%] top-[10vh] top-0 left-0  */}
        <div className="absolute flex flex-col origin-top-left will-change-transform skewed-container gap-y-5">
          <div className="flex gap-5 z-[3]">
            <SkillFragment
              className="z-20"
              SvgIcon={ReactjsSvg}
              skillText={"React.Js"}
              titleClassName="text-gray-700"
              mainBg="bg-white "
            />
            <SkillFragment
              className="z-10"
              SvgIcon={FigmaSvg}
              skillText={"Figma"}
              titleClassName="text-gray-50"
              mainBg="bg-gray-900"
            />
            <SkillFragment
              className="z-0"
              SvgIcon={NodeJsSvg}
              skillText={"Nodejs"}
              titleClassName="text-gray-200"
              mainBg="bg-teal-600"
            />
          </div>
          <div className="flex gap-5 z-[3]">
            <SkillFragment blank={true} />
            <SkillFragment
              className="z-20"
              SvgIcon={MongodbSvg}
              skillText={"MongoDb"}
              titleClassName="text-gray-50"
              mainBg="bg-teal-700 "
            />
            <SkillFragment
              className="z-10"
              SvgIcon={JavaSvg}
              skillText={"Java"}
              titleClassName="text-gray-900"
              mainBg="bg-white"
            />
            <SkillFragment
              className="z-0"
              SvgIcon={GithubSvg}
              skillText={"Github"}
              titleClassName="text-gray-900"
              mainBg="bg-white "
            />
          </div>
          <div className="flex gap-5 z-[3]">
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />

            <SkillFragment
              className="z-20"
              SvgIcon={MysqlSvg}
              skillText={"MySQL"}
              titleClassName="text-gray-50"
              mainBg="bg-orange-200"
            />
            <SkillFragment
              className="z-10"
              SvgIcon={NextjsSvg}
              skillText={"NextJs"}
              titleClassName="text-gray-800"
              mainBg="bg-white "
            />
            <SkillFragment
              className="z-0"
              SvgIcon={JavascriptSvg}
              skillText={"Javascript"}
              titleClassName="text-gray-800"
              mainBg="bg-white "
            />
          </div>
          <div className="flex gap-5 z-[3]">
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />

            <SkillFragment
              className="z-20"
              SvgIcon={VueJsSvg}
              skillText={"Vue.Js"}
              titleClassName="text-gray-800"
              mainBg="bg-white"
            />
            <SkillFragment
              className="z-10"
              SvgIcon={PythonSvg}
              skillText={"Python"}
              titleClassName="text-gray-50"
              mainBg="bg-[#1e415e] "
            />
            <SkillFragment
              className="z-0"
              SvgIcon={VercelSvg}
              skillText={"Vercel"}
              titleClassName="text-gray-50"
              mainBg="bg-black"
            />
          </div>
          <div className="flex gap-5 z-[3]">
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />

            <SkillFragment
              className="z-20"
              SvgIcon={VscodeSvg}
              skillText={"VSCode"}
              titleClassName="text-gray-50"
              mainBg="bg-gray-900"
            />
            <SkillFragment
              className="z-10"
              SvgIcon={FirebaseSvg}
              skillText={"Firebase"}
              titleClassName="text-gray-800"
              mainBg="bg-[#f0f0e8]"
            />
            <SkillFragment
              className="z-1"
              SvgIcon={HtmlSvg}
              skillText={"HTML"}
              titleClassName="text-gray-50"
              mainBg="bg-orange-400"
            />
          </div>
          <div className="flex gap-5 z-[3]">
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />

            <SkillFragment
              className="z-20"
              SvgIcon={TailwindSvg}
              skillText={"Tailwind"}
              titleClassName="text-gray-800"
              mainBg="bg-gray-50"
            />
            <SkillFragment
              className="z-10"
              SvgIcon={ArduinoSvg}
              skillText={"Arduino"}
              titleClassName="text-teal-50"
              mainBg="bg-[#00979d]"
            />
            <SkillFragment
              className="z-0"
              SvgIcon={ReduxSvg}
              skillText={"Redux"}
              titleClassName="text-gray-800"
              mainBg="bg-white "
            />
          </div>
          <div className="flex gap-5 z-[3]">
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />

            <SkillFragment
              className="z-20"
              SvgIcon={NpmSvg}
              skillText={"npm"}
              titleClassName="text-red-600"
              mainBg="bg-gray-50"
            />
            <SkillFragment
              className="z-10"
              SvgIcon={GitSvg}
              skillText={"Git"}
              titleClassName="text-gray-800"
              mainBg="bg-[#f0f0e8]"
            />
            <SkillFragment
              className="z-0"
              SvgIcon={BashShellSvg}
              skillText={"Bash/Shell"}
              titleClassName="text-gray-800"
              mainBg="bg-stone-300"
            />
          </div>
          <div className="flex gap-5 z-[3]">
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />
            <SkillFragment blank={true} />

            <SkillFragment
              className="z-20"
              SvgIcon={OSWindowsSvg}
              skillText={"Ubuntu"}
              titleClassName="text-gray-50"
              mainBg="bg-[#e95420]"
            />
            <SkillFragment
              className="z-10"
              SvgIcon={RaspberryPiSvg}
              skillText={"Raspberry Pi"}
              titleClassName="text-gray-800                                                                                                                                                                                                                                                  0"
              mainBg="bg-white"
            />
            <SkillFragment
              className="z-0"
              SvgIcon={MSWordSvg}
              skillText={"Microsoft Word"}
              titleClassName="text-gray-800"
              mainBg="bg-white"
            />
          </div>
        </div>
        <div className="absolute duration-200 inset-x-0 z-40  h-[15%] bg-gradient-to-t from-transparent to-white dark:to-gray-900 2xl:block" />
        <div className="absolute inset-y-0 left-0 z-40 w-1/12 duration-200 bg-gradient-to-l from-transparent to-white dark:to-gray-900 2xl:block" />
        <div className="absolute inset-y-0 right-0 z-40 w-1/12 duration-200 bg-gradient-to-r from-transparent to-white dark:to-gray-900 2xl:block" />
        <div className="absolute duration-200 inset-x-0 bottom-0 z-40  h-[15%] bg-gradient-to-b from-transparent to-white dark:to-gray-900 2xl:block" />
      </div>
    </section>
  );
};

export default SkillSection;
