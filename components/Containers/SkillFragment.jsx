import React from "react";

const SkillFragment = ({
  blank,
  className,
  mainBg,
  SvgIcon,
  skillText,
  titleClassName,
}) => {
  return blank ? (
    <div className="w-[10rem] h-[10.3rem]"></div>
  ) : (
    <div
      className={`relative inline-block ${className} group hover:translate-x-2 hover:-translate-y-2 hover:scale-[1.025] duration-150 ease-out cursor-pointer`}
    >
      <div
        className={`fragment-skill-shadow-2 absolute z-0 rounded-xl -translate-x-1 translate-y-0 w-[10.2rem] h-[10.6rem] ${mainBg}`}
      ></div>
      <div
        className={`flex p-2 absolute rounded-xl fragment-skill-shadow w-full h-full ${mainBg}  ${titleClassName}`}
      >
        {" "}
        {!SvgIcon ? (
          <p className="w-24 h-24 mx-auto my-auto text-center">mama mo</p>
        ) : (
          <SvgIcon className={`w-32 mx-auto`} />
        )}
        <p
          className={`inline-block mx-auto bottom-1 absolute text-sm font-semibold text-center z-30 w-4/5 font-inter px-3 py-0 rounded-full fragment-skill-shadow opacity-0 group-hover:opacity-100 backdrop-blur-sm group-hover:scale-105 duration-150 ease-out ${titleClassName}`}
        >
          {skillText}
        </p>
      </div>
      <div className="w-[10rem] h-[10.3rem] p-2"></div>
    </div>
  );
};

export default SkillFragment;
