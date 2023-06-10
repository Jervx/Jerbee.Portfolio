import { motion } from "framer-motion";

import { GoMarkGithub } from "react-icons/go";
import { BsMouse } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { useState } from "react";

import { randomInt } from "@/helpers/Utils";

const HeroMe = () => {
  const [imgFoc, setImgFoc] = useState(randomInt(2));


  return (
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
            <p className="leading-[3rem] text-2xl my-8 tracking-wider font-inter">
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
  )
}

export default HeroMe