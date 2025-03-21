import React from "react";
import { Link } from "react-router-dom";
import whiteselectdown from "../../../images/whiteselectdown.svg";

const DetailNavbar = () => {
  const navItems = [
    "All",
    "FullTime",
    "Inplay",
    "Handicaps",
    "Combo",
    "Teams",
    "Marginals",
  ];

  return (
    <>
      <div className="sticky top-20 md:top-28 lg:top-28 xl:top-28 s15:top-28 s16:top-[118px] s18:top-[123px] shadow-dashboardshadow bg-forestGreen border-b border-doubleextralightwhite max-sm:mt-0 mt-3 s18:mt-[17px] z-20">
        <div className="relative">
          <Link
            to="/home"
            className="absolute py-2 md:py-3 left-0 bg-forestGreen h-full w-10 flex items-center z-[2] cursor-pointer sm:!rounded-[12px_0_0_0]"
          >
            <img
              src={whiteselectdown}
              alt="whiteselectdown"
              className="w-3 ml-3 rotate-90 cursor-pointer"
            />
          </Link>
          <ul className="flex flex-row max-lg:justify-start items-center gap-3 overflow-x-auto scrollable pl-10">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="inline-block uppercase whitespace-nowrap py-2 xl:py-3 px-2 text-xs xl:text-sm font-normal text-white hover:bg-teal"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DetailNavbar;
