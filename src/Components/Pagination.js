import React from "react";
import greater from "../images/greater.svg";

const Pagination = () => {
  return (
    <>
      <div className="mt-5">
        <div className="flex gap-2 xl:gap-[13px] justify-center items-center">
          <div>
            <img
              src={greater}
              alt="greater"
              className="object-contain cursor-pointer rotate-180  brightness-[100] hover:brightness-50"
            />
          </div>
          <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-xs xl:text-sm font-semibold bg-white/30 hover:bg-white  hover:text-darkblue text-white  transition-all duration-300 flex justify-center items-center">
            1
          </div>
          <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-xs xl:text-sm font-semibold bg-white/30 hover:bg-white  hover:text-darkblue text-white  transition-all duration-300 flex justify-center items-center">
            2
          </div>
          <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-xs xl:text-sm font-semibold bg-white/30 hover:bg-white  hover:text-darkblue text-white  transition-all duration-300 flex justify-center items-center">
            3
          </div>
          <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-xs xl:text-sm font-semibold bg-white/30 hover:bg-white  hover:text-darkblue text-white  transition-all duration-300 flex justify-center items-center">
            4
          </div>
          <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-xs xl:text-sm font-semibold bg-white/30 hover:bg-white  hover:text-darkblue text-white  transition-all duration-300 flex justify-center items-center">
            5
          </div>
          <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-xs xl:text-sm font-semibold hover:text-white text-white transition-all duration-300 flex justify-center items-center">
            ...
          </div>
          <div className="rounded-[4px] cursor-pointer size-5 xl:size-8 text-xs xl:text-sm font-semibold bg-white/30 hover:bg-white  hover:text-darkblue text-white  transition-all duration-300 flex justify-center items-center">
            50
          </div>
          <div>
            <img
              src={greater}
              alt="greater"
              className="object-contain cursor-pointer :brightness-[100] hover:brightness-50"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
