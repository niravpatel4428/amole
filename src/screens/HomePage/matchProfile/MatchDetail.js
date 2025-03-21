import React, { useState } from "react";
import selectdropdownsvg from "../../../images/selectdropdownsvg.svg";

const MatchDetail = ({ setShowDetail, showDetail }) => {
  const [showDropdown, setShowDropdown] = useState({});

  const handleShow = (key) => {
    setShowDropdown((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <>
      <div className="bg-teal shadow-dashboardshadow sm:!rounded-[0_0_12px_12px]">
        {/* 1X2 */}
        <div className="w-full relative">
          <div
            onClick={() => handleShow("1X2")}
            className="w-full relative flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-forestGreen/50"
          >
            <span class="text-white max-sm:text-xs text-sm font-medium leading-[128%]">
              1X2
            </span>
            <img src={selectdropdownsvg} alt="downarrow" className="w-4" />
          </div>
          <div
            className={`p-3 s18:p-[15px_23px] cursor-pointer w-full gap-1 ${
              showDropdown["1X2"] ? "hidden" : "flex"
            } `}
          >
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col items-center justify-center bg-transparent border border-doubleextralightwhite">
              <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                1
              </span>
              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.70
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col items-center justify-center bg-transparent border border-doubleextralightwhite">
              <span class="   text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                X
              </span>
              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                3.90
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3 flex flex-col items-center justify-center bg-transparent border border-doubleextralightwhite ">
              <span class="   text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                2
              </span>
              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                5.00
              </span>
            </div>
          </div>
        </div>
        {/* DoubleChance */}
        <div className="w-full">
          <div
            onClick={() => handleShow("DoubleChance")}
            className="w-full flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-forestGreen/50"
          >
            <span class="text-white max-sm:text-xs text-sm font-medium leading-[128%]">
              Double chance
            </span>
            <img src={selectdropdownsvg} alt="downarrow" className="w-4" />
          </div>
          <div
            className={`p-3 s18:p-[15px_23px] cursor-pointer w-full gap-1 ${
              showDropdown["DoubleChance"] ? "hidden" : "flex"
            }`}
          >
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col items-center justify-center bg-transparent border border-doubleextralightwhite">
              <span class="   text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                1 or X
              </span>
              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.29
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col items-center justify-center bg-transparent border border-doubleextralightwhite">
              <span class="   text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                1 or 2
              </span>
              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.37
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3 flex flex-col items-center justify-center bg-transparent border border-doubleextralightwhite ">
              <span class="   text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                X or 2
              </span>
              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.35
              </span>
            </div>
          </div>
        </div>
        {/* GG/Ng */}
        <div className="w-full">
          <div
            onClick={() => handleShow("GG/Ng")}
            className="w-full flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-forestGreen/50"
          >
            <span class="text-white max-sm:text-xs text-sm font-medium leading-[128%] uppercase">
              GG/Ng
            </span>
            <img src={selectdropdownsvg} alt="downarrow" className="w-4" />
          </div>
          <div
            className={`p-3 s18:p-[15px_23px] cursor-pointer w-full gap-1 ${
              showDropdown["GG/Ng"] ? "hidden" : "flex"
            }`}
          >
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  yes
                </span>
                <span className="ml-[2px] mb-[1px] w-0 h-0 border-b-[9px] border-b-[#11A306] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></span>
              </div>
              {/* highlight is true and check hight is true then green another red */}
              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.29
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  No
                </span>
                {/* highlight is true and check hight is true then green another red */}
                <span className="ml-[2px] mb-[1px] w-0 h-0 border-t-[9px] border-t-[#ec3737] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></span>
              </div>
              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.37
              </span>
            </div>
          </div>
        </div>
        {/* Drawnobet */}
        <div className="w-full">
          <div
            onClick={() => handleShow("Drawnobet")}
            className="w-full flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-forestGreen/50"
          >
            <span class="text-white max-sm:text-xs text-sm font-medium leading-[128%] uppercase">
              Draw no bet
            </span>
            <img src={selectdropdownsvg} alt="downarrow" className="w-4" />
          </div>
          <div
            className={`p-3 s18:p-[15px_23px] cursor-pointer w-full gap-1 ${
              showDropdown["Drawnobet"] ? "hidden" : "flex"
            }`}
          >
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  1
                </span>
              </div>
              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                2.24
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  2
                </span>
              </div>
              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.60
              </span>
            </div>
          </div>
        </div>
        {/* Over/Under */}
        <div className="w-full">
          <div
            onClick={() => handleShow("Over/Under")}
            className="w-full flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-forestGreen/50"
          >
            <span class="text-white max-sm:text-xs text-sm font-medium leading-[128%] uppercase">
              Over/Under
            </span>
            <img src={selectdropdownsvg} alt="downarrow" className="w-4" />
          </div>
          <div
            className={`${
              showDropdown["Over/Under"] ? "hidden" : "flex"
            } flex-col gap-1 py-3`}
          >
            <div className="px-3 s18:p-[0px_23px] cursor-pointer w-full flex gap-1">
              <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
                <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                  <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                    over 0.5
                  </span>
                </div>
                <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                  1.6
                </span>
              </div>
              <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
                <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                  <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                    over 0.5
                  </span>
                </div>
                <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                  7.60
                </span>
              </div>
            </div>
            <div className="px-3 s18:p-[0px_23px] cursor-pointer w-full flex gap-1">
              <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
                <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                  <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                    over 1.5
                  </span>
                </div>
                <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                  1.6
                </span>
              </div>
              <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
                <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                  <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                    over 1.5
                  </span>
                </div>
                <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                  7.60
                </span>
              </div>
            </div>
            <div className="px-3 s18:p-[0px_23px] cursor-pointer w-full flex gap-1">
              <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
                <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                  <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                    over 2.5
                  </span>
                </div>
                <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                  1.6
                </span>
              </div>
              <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
                <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                  <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                    over 2.5
                  </span>
                </div>
                <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                  7.60
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* 1stgoal */}
        <div className="w-full">
          <div
            onClick={() => handleShow("1stgoal")}
            className="w-full flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-forestGreen/50"
          >
            <span class="text-white max-sm:text-xs text-sm font-medium leading-[128%] uppercase">
              1st goal
            </span>
            <img src={selectdropdownsvg} alt="downarrow" className="w-4" />
          </div>
          <div
            className={`p-3 s18:p-[15px_23px] cursor-pointer w-full gap-1 ${
              showDropdown["1stgoal"] ? "hidden" : "flex"
            }`}
          >
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  none
                </span>
              </div>
              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                9.40
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  1
                </span>
                <span className="ml-[2px] mb-[1px] w-0 h-0 border-b-[9px] border-b-[#11A306] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></span>
              </div>

              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.29
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  2
                </span>

                <span className="ml-[2px] mb-[1px] w-0 h-0 border-t-[9px] border-t-[#ec3737] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></span>
              </div>
              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.37
              </span>
            </div>
          </div>
        </div>
        {/* Lastgoal */}
        <div className="w-full">
          <div
            onClick={() => handleShow("Lastgoal")}
            className="w-full flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-forestGreen/50"
          >
            <span class="text-white max-sm:text-xs text-sm font-medium leading-[128%] uppercase">
              Last goal
            </span>
            <img src={selectdropdownsvg} alt="downarrow" className="w-4" />
          </div>
          <div
            className={`p-3 s18:p-[15px_23px] cursor-pointer w-full gap-1 ${
              showDropdown["Lastgoal"] ? "hidden" : "flex"
            }`}
          >
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  none
                </span>
              </div>
              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                9.40
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  1
                </span>
                <span className="ml-[2px] mb-[1px] w-0 h-0 border-b-[9px] border-b-[#11A306] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></span>
              </div>

              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.29
              </span>
            </div>
            <div class="cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-[4px] items-center justify-center  border border-doubleextralightwhite bg-transparent">
              <div className="cursor-pointer rounded-md w-full flex gap-[4px] items-center justify-center">
                <span class="text-white text-xs font-normal leading-normal md:leading-tight s18:leading-normal">
                  2
                </span>

                <span className="ml-[2px] mb-[1px] w-0 h-0 border-t-[9px] border-t-[#ec3737] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></span>
              </div>
              <span class=" text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal">
                1.37
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchDetail;
