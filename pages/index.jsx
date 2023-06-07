import Head from "next/head";
import Layout from "@/layouts/Layout";
import { motion } from "framer-motion";

import { GoMarkGithub } from "react-icons/go";
import { BsMouse } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { useState } from "react";

import { randomInt } from "@/helpers/Utils";

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

export default function Home() {
  const [imgFoc, setImgFoc] = useState(randomInt(2));

  return (
    <>
      <Head>
        <title>Jerbee</title>
        <meta name="description" content="Hi, Welcome to my portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full overflow-hidden md:px-16">
        <section className="h-[90vh] relative bg-no-repeat bg-cover flex justify-between items-center max-w-max mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              default: { ease: "easeOut" },
            }}
            animate={{ opacity: 1 }}
            className="z-10 w-full px-24 md:w-1/2"
          >
            <p className="leading-[4rem] md:leading-[5rem] text-4xl md:text-6xl tracking-wider font-ibm firstfirst-letter:uppercase">
              Hello,
              <br /> I&apos;m{" "}
              <span className="font-medium font-inter clipped">Jerbee</span>
            </p>
            <p className="mt-3 text-xl leading-loose tracking-wider md:mt-9 md:text-2xl font-maven-pro">
              A passionate fresh-graduate of Bachelor of Science in Information
              Technology, on a mission to carve a path as a full-stack web
              developer hailing from the Philippines.
            </p>
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/Jervx"
                target="blank"
                className="flex items-center mt-4"
              >
                <GoMarkGithub className="text-3xl duration-200 hover:text-gray-900 hover:scale-110" />
              </a>
              <a
                href="https://linkedin.com/in/jerbee-paragas-8970b024b"
                target="blank"
                className="flex items-center mt-4"
              >
                <ImLinkedin className="text-3xl duration-200 hover:scale-110" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.4,
              default: { ease: "easeOut" },
            }}
            animate={{ opacity: 1 }}
            className="items-center justify-center hidden w-1/2 max-h-max md:flex"
            onClick={() => setImgFoc(imgFoc === 1 ? 0 : 1)}
          >
            <img
              className="object-cover h-[90vh]"
              src={imgFoc === 0 ? "/Me-Featherd.png" : "/Me-Featherd2.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            animate={{ opacity: 1 }}
            className="absolute flex justify-center hidden w-full bottom-5"
          >
            <div>
              <BsMouse className="mx-auto text-2xl animate-bounce" />
              <p className="mx-auto mt-2 text-sm tracking-widest">scroll</p>
            </div>
          </motion.div>
        </section>
        <section className="w-full h-screen bg-no-repeat bg-cover mt-28">
          <p className="mt-16 mb-16 text-4xl text-center">My Skills</p>
          <div className="relative mx-auto lg:h-[60vh] max-w-[1800px] overflow-hidden  sm:h-[650px]">
            {/* left-[-60%] top-[10vh] top-0 left-0  */}
            <div className="absolute flex flex-col origin-top-left will-change-transform skewed-container gap-y-5 top-[55%];">
              <div className="flex gap-5 z-[3]">
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
                  titleClassName="text-gray-80                                                                                                                                                                                                                                                  0"
                  mainBg="bg-[#f0f0e8]"
                />
                <SkillFragment
                  className="z-0"
                  SvgIcon={MSWordSvg}
                  skillText={"Microsoft Word"}
                  titleClassName="text-gray-800"
                  mainBg="bg-white"
                />
              </div>
              <div className="flex gap-5 z-[3]">
                <SkillFragment blank={true} />
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
                <SkillFragment blank={true} />

                <SkillFragment
                  className="z-20"
                  SvgIcon={VscodeSvg}
                  skillText={"vscode"}
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
                  SvgIcon={TailwindSvg}
                  skillText={"Tailwind"}
                  titleClassName="text-gray-800"
                  mainBg="bg-gray-50"
                />
                <SkillFragment
                  className="z-10"
                  SvgIcon={ArduinoSvg}
                  skillText={"Arduino"}
                  titleClassName="text-gray-50"
                  mainBg="bg-gray-400"
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
                  titleClassName="text-gray-50"
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
                  titleClassName="text-gray-80                                                                                                                                                                                                                                                  0"
                  mainBg="bg-[#f0f0e8]"
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
            <div className="absolute inset-y-0 left-0 z-40 hidden w-1/12 bg-gradient-to-l from-transparent to-white dark:to-gray-900 2xl:block" />
            <div className="absolute inset-y-0 right-0 z-40 hidden w-1/12 bg-gradient-to-r from-transparent to-white dark:to-gray-900 2xl:block" />
          </div>
        </section>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
