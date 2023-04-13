import Head from "next/head";
import Layout from "@/layouts/Layout";
import { motion } from "framer-motion";

import { GoMarkGithub } from "react-icons/go";
import { BsMouse } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { useState } from "react";

import { randomInt } from "@/helpers/Utils";

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
      <main className="w-full md:px-16">
        <section className="h-[90vh] relative  bg-no-repeat bg-cover flex justify-between items-center overflow-hidden">
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
            <p className="leading-[4rem] md:leading-[5rem] text-4xl md:text-6xl tracking-wider font-maven-pro firstfirst-letter:uppercase">
              Hello,
              <br /> I&apos;m{" "}
              <span className="font-medium font-inter clipped">Jerbee</span>
            </p>
            <p className="mt-3 text-xl tracking-wider md:mt-9 md:text-2xl font-maven-pro">
              A self-taught
              <span className="text-accent ">
                {" "}
                web developer
              </span>{" "}
              from the <span className="font-bold font-inter">Philippines</span>.
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
            className="items-center justify-center hidden w-1/2 h-screen md:flex"
            onClick={() => setImgFoc(randomInt(2))}
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
            className="absolute flex justify-center w-full bottom-5"
          >
            <div>
              <BsMouse className="mx-auto text-2xl animate-bounce" />
              <p className="mx-auto mt-2 text-sm tracking-widest">scroll</p>
            </div>
          </motion.div>
        </section>
        <section className="w-full h-screen bg-no-repeat bg-cover mt-28">
            <p className="mt-16 text-4xl text-center">My Skills</p>
            <div className="w-full p-8 mt-8 ">

            </div>
        </section>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
