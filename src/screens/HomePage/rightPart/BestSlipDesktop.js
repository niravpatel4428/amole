import React, { useState } from "react";
import { Link } from "react-router-dom";
import remove from "../../../images/remove.svg";
import darkremove from "../../../images/darkremove.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const BestSlipDesktop = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className="odd-conected rounded-[7px] bg-teal shadow-dashboardshadow w-full">
        <div className="flex items-center rounded-[7px_7px_0px_0px] bg-forestGreen px-[15px]">
          <span className="border-solid border-r-[1px] border-r-doubleextralightwhite w-[50%] flex items-center gap-[7px] py-[10px] md:py-2 s18:py-[10px] text-white text-base md:text-sm s18:text-lg font-medium leading-none">
            <span className="flex w-8 md:w-6 s18:w-8 h-8 md:h-6 s18:h-8 justify-center items-center bg-yellow rounded-50 text-black text-[19px] md:text-base s18:text-[19px] font-medium !leading-none">
              1
            </span>{" "}
            Betslip
          </span>
          <span className="cursor-pointer w-[50%] flex justify-center items-center py-[10px] md:py-2 s18:py-[10px] text-white text-base md:text-sm s18:text-lg font-medium leading-none">
            My bets
          </span>
        </div>
        <span className="cursor-pointer border-solid border-b-[2px] border-b-lightwhiteborder flex p-3 md:p-2 md:px-3 s18:p-3 bg-[#0A3B3A] items-center gap-3 text-[#EF4444] text-sm font-medium leading-tight">
          <img src={remove} alt="remove" />
          Remove all
        </span>
        <div className="flex justify-between p-[10px_13px_8px] s18:p-[15px_15px_10px] border-solid border-b-[2px] border-b-lightwhiteborder">
          <div className="flex gap-3 items-start">
            <img
              src={darkremove}
              alt="remove"
              className="cursor-pointer mt-[3px]"
            />
            <div className="flex flex-col gap-1 s18:gap-[5px] cursor-pointer">
              <p className="text-white text-base md:text-sm s18:text-base font-medium leading-tight">
                Everton FC
              </p>
              <p className="text-white text-base md:text-sm s18:text-base font-normal leading-tight">
                1x2
              </p>
              <p className="text-white text-sm md:text-xs s18:text-sm font-normal leading-tight">
                Evrrton FC - Aston Villa
              </p>
              <p className="text-white text-sm md:text-xs s18:text-sm font-normal leading-tight">
                15/01 22:30
              </p>
            </div>
          </div>
          <span className="h-full rounded-md flex justify-center items-center bg-yellow text-darkblue p-[5px_9px] text-base font-semibold leading-tight">
            3.50
          </span>
        </div>
        <div className="p-[15px_15px_0px] md:p-[12px_12px_0px] s18:p-[15px_15px_0px]">
          <span className="text-[#EF4444] text-base md:text-sm s18:text-base font-medium leading-12">
            Stake
          </span>
          <div className="flex gap-[5px] mt-[5px] md:mt-3 s18:mt-[5px]">
            <span className="cursor-pointer p-[10px_14px] xl:p-[8px_12px] s18:p-[12px_14px] s18:w-[58px] s18:h-[43px] flex justify-center items-center rounded-md border text-base md:text-sm s18:text-base font-medium !leading-none s18:leading-12 hover:border-bordercolor transition-all duration-300 bg-forestGreen border-doubleextralightwhite text-white hover:bg-yellow hover:text-darkblue">
              20/-
            </span>
            <span className="cursor-pointer p-[10px_14px] xl:p-[8px_12px] s18:p-[12px_14px] s18:w-[58px] s18:h-[43px] flex justify-center items-center rounded-md border text-base md:text-sm s18:text-base font-medium !leading-none s18:leading-12 transition-all duration-300 bg-forestGreen border-doubleextralightwhite text-white hover:bg-yellow hover:text-darkblue">
              50/-
            </span>
            <span className="cursor-pointer p-[10px_14px] xl:p-[8px_12px] s18:p-[12px_14px] s18:w-[58px] s18:h-[43px] flex justify-center items-center rounded-md border text-base md:text-sm s18:text-base font-medium !leading-none s18:leading-12 transition-all duration-300 bg-forestGreen border-doubleextralightwhite text-white hover:bg-yellow hover:text-darkblue">
              100/-
            </span>
            <span className="cursor-pointer p-[10px_14px] xl:p-[8px_12px] s18:p-[12px_14px] s18:w-[58px] s18:h-[43px] flex justify-center items-center rounded-md border text-base md:text-sm s18:text-base font-medium !leading-none s18:leading-12 transition-all duration-300 bg-forestGreen border-doubleextralightwhite text-white hover:bg-yellow hover:text-darkblue">
              500/-
            </span>
            <span className="flex justify-end p-[10px_14px] xl:p-[8px_12px] s18:p-[12px_14px] items-center w-full s18:h-[43px] rounded-md text-lg text-base s18:text-lg font-semibold !leading-none s18:leading-[120%] text-yellow bg-forestGreen border-doubleextralightwhite">
              50
            </span>
          </div>
          <div className="p-[15px_0px] md:p-[12px_0] s18:p-[15px_0px] flex flex-col gap-[10px] md:gap-2 s18:gap-[10px]">
            <p className="flex justify-between items-center text-white text-base md:text-sm s18:text-base font-normal !leading-none s18:!leading-12">
              Total Odds{" "}
              <span className="text-white text-base md:text-sm s18:text-base font-semibold !leading-none s18:!leading-tight">
                3.50
              </span>
            </p>
            <p className="flex justify-between items-center text-white text-base md:text-sm s18:text-base font-normal !leading-none s18:!leading-12">
              Possible Win{" "}
              <span className="flex gap-[5px] text-white text-base md:text-sm s18:text-base font-semibold !leading-none s18:!leading-tight">
                <span className="text-base md:text-sm s18:text-base text-extralightwhite font-semibold !leading-none s18:!leading-tight">
                  KShs.
                </span>{" "}
                139.53
              </span>
            </p>
            <p className="flex justify-between items-center text-white text-base md:text-sm s18:text-base font-normal !leading-none s18:!leading-12">
              Amount(KShs){" "}
              <span className="flex gap-[5px] text-white text-base md:text-sm s18:text-base font-semibold !leading-none s18:!leading-tight">
                <span className="text-base md:text-sm s18:text-base font-semibold !leading-none s18:!leading-tight text-extralightwhite">
                  KShs.
                </span>{" "}
                86.53
              </span>
            </p>
            <p className="flex justify-between items-center text-white text-base md:text-sm s18:text-base font-normal !leading-none s18:!leading-12">
              15% Excise Tax{" "}
              <span className="flex gap-[5px] text-white text-base font-semibold !leading-none s18:!leading-tight">
                <span className="text-base font-semibold !leading-none s18:!leading-tight text-extralightwhite">
                  KShs.
                </span>{" "}
                13.04
              </span>
            </p>
          </div>
          <div className="rounded-[0px_0px_7px_7px] bg-forestGreen p-[15px_15px_20px] md:p-[12px_12px_15px] s18:p-[15px_15px_20px] flex flex-col gap-[10px] md:gap-2 s18:gap-[10px] -mx-[15px] md:-mx-[12px] s18:-mx-[15px]">
            <p className="flex justify-between items-center text-white text-base md:text-sm s18:text-base font-normal leading-12 md:leading-none s18:leading-12">
              Win{" "}
              <span className="text-white text-base md:text-sm s18:text-base font-semibold leading-tight">
                <span className="text-base md:text-sm s18:text-base text-extralightwhite font-semibold leading-tight">
                  KShs.
                </span>{" "}
                130.04
              </span>
            </p>
            <p className="flex justify-between items-center text-white text-base md:text-sm s18:text-base font-normal leading-12 md:leading-none s18:leading-12">
              20% Withholding Tax{" "}
              <span className="flex gap-[5px] text-white text-base md:text-sm s18:text-base font-semibold leading-tight">
                <span className="text-base md:text-sm s18:text-base text-extralightwhite font-semibold leading-tight">
                  KShs.
                </span>{" "}
                13.04
              </span>
            </p>
            <p className="flex justify-between items-center text-white text-base md:text-sm s18:text-base font-normal leading-12 md:leading-none s18:leading-12">
              Possible Payout{" "}
              <span className="flex gap-[5px] text-white text-base md:text-sm s18:text-base font-semibold leading-tight">
                <span className="text-base md:text-sm s18:text-base font-semibold leading-tight text-extralightwhite">
                  KShs.
                </span>{" "}
                133.04
              </span>
            </p>
            <div className="flex justify-between items-center mt-10 md:mt-7 s18:mt-10">
              <label className="flex items-center text-sm font-normal leading-tight text-extralightwhite select-none">
                <input
                  type="checkbox"
                  className="hidden peer"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="mr-[9px] w-[18px] h-[18px] rounded-[2px] border bg-transparent border-solid border-[#A3A3A3] peer-checked:bg-green-600 peer-checked:border-green-600 flex justify-center items-center">
                  {/* Always show an icon */}
                  {isChecked ? (
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-white ml-[1px] font-bold opacity-100"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-gray-400 opacity-0"
                    />
                  )}
                </span>
                Accept odd changes
              </label>
              <div className="flex items-center gap-[9px]">
                {/* Toggle Switch */}
                <div
                  onClick={handleToggle}
                  className={`relative w-[30px] h-5 flex items-center rounded-[11px] cursor-pointer ${
                    isToggled ? "bg-[#11A306]" : "bg-[#A3A3A3]"
                  }`}
                >
                  <div
                    className={`w-[14px] h-[14px] bg-white rounded-[11px] transform transition-transform ${
                      isToggled ? "translate-x-3" : "translate-x-1"
                    }`}
                  ></div>
                </div>
                <span className="text-sm font-medium leading-tight text-extralightwhite">
                  Keep betslip
                </span>
              </div>
            </div>
            <div className="flex gap-[9px] mt-[15px] md:mt-3 s18:mt-[15px]">
              <Link
                to="/"
                className="inline-flex border-2 border-white hover:bg-transparent hover:text-white  transition-all duration-300 bg-white rounded-[7px] text-darkblue 
                             p-[16px_17px] md:p-[8px_14px] s18:p-[16px_17px] text-lg md:text-sm s18:text-lg font-medium leading-[111%]"
              >
                Share
              </Link>
              <button className="rounded-[7px] cursor-pointer flex justify-center items-center w-full bg-yellow hover:bg-yellow/70 p-[16px_17px] md:p-[8px_14px] s18:p-[15px] text-darkblue text-lg md:text-sm s18:text-lg font-medium leading-[111%]">
                Place Bet KShs. <span>133.04</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSlipDesktop;
