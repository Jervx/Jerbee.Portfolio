import React from "react";

import MarsSvg from "../Icons/MarsSvg";
import AstronautSvg from "../Icons/AstronautSvg";

const PlayGroundSection = () => {
  return (
    <section className="w-full h-screen bg-no-repeat bg-cover mt-28">
      <div className="relative mx-auto lg:h-[80vh] max-w-[1800px]  sm:h-[650px] rounded-3xl">
        <MarsSvg className="w-64 h-64 mx-auto pluto float" />
        <AstronautSvg className="absolute z-40 w-16 h-16 mx-auto left-1/2 drift" />
        <p className="text-6xl text-center font-open-sans mt-9"><span className="text-3xl leading-[8rem] tracking-wider font-cormorant p-8 rounded bg-neutral-100 dark:bg-gray-800">Harness the Power of Simplicity</span><br/>I love <span className="font-thin">minimalist</span> UI, How about U?</p>
      </div>
    </section>
  );
};

export default PlayGroundSection;
