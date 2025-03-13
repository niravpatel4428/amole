import React, { useState } from "react";
import { Link } from "react-router-dom";
import remove from "../../../images/remove.svg";
import darkremove from "../../../images/darkremove.svg";
import close from "../../../images/close.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BestSlipMobile = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggles = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="s15:hidden flex justify-center items-center fixed bottom-0 z-[9] left-[50%] translate-x-[-50%] w-full max-w-[428px] mx-auto rounded-[20px_20px_0px_0px] bg-charcoal p-[30px_15px_12px] lg:p-[24px_15px_12px] s18:p-[40px_15px_25px]">
        <span
          className="select-none cursor-pointer border-solid  inline-flex flex-col items-center gap-[7px] p-[0px] text-white text-lg md:text-sm s18:text-lg font-medium leading-[100%]"
          onClick={handleToggles}
        >
          {isOpen ? (
            <>
              <span className="absolute -top-[20px] lg:-top-4 s18:top-[-22px] left-1/2 translate-x-1/2 flex w-8 h-8 max-md:w-[38px] max-md:h-[38px] justify-center items-center rounded-[50%] text-black bg-white text-[22px] md:text-abse s16:text-lg max-md:text-[22px] font-medium leading-[100%]">
                <img src={close} alt="Close" className="w-[14px] h-[14px]" />
              </span>
              Close
            </>
          ) : (
            <>
              <span className="absolute -top-[20px] lg:-top-4 s18:top-[-22px] left-1/2 translate-x-1/2 flex w-8 h-8 max-md:w-[38px] max-md:h-[38px] justify-center items-center rounded-[50%] text-black bg-white text-[22px] md:text-abse s16:text-lg max-md:text-[22px] font-medium leading-[100%]">
                1
              </span>
              Betslip
            </>
          )}
        </span>
      </div>
      <div className={`open-content ${isOpen ? "block" : "hidden"}`}>
        <div className="odd-conected rounded-[7px] overflow-auto max-h-[400px] block fixed bottom-[84px] lg:bottom-[74px] z-[9] max-w-[428px] mx-auto left-[50%] translate-x-[-50%] s15:hidden pt-5">
          <div className=" rounded-[7px] bg-charcoal shadow-dashboardshadow w-full">
            <div className="flex items-center rounded-[7px_7px_0px_0px] bg-forestGreen px-[15px]">
              <span className="cursor-pointer border-solid border-r-[1px] border-r-doubleextralightwhite w-[50%] flex items-center gap-[7px] p-[10px_0px] text-white text-base s18:text-lg font-medium leading-[100%]">
                <span className="flex w-[32px] h-[32px] justify-center items-center bg-yellow rounded-[50%] text-black text-base s18:text-lg font-medium leading-[100%]">
                  1
                </span>
                Betslip
              </span>
              <span className="show-content cursor-pointer w-[50%] flex justify-center items-center p-[10px_0px] text-white text-base s18:text-lg font-medium leading-[100%]">
                My bets
              </span>
            </div>
            <div>
              <span className="cursor-pointer border-b-[2px] border-b-lightwhiteborder flex p-[12px] bg-[#0A3B3A] items-center gap-[12px] text-[#EF4444] text-sm font-medium leading-[128%]">
                <img src={remove} alt="remove" />
                Remove all
              </span>
              <div className="flex justify-between p-[15px_12px_10px] border-solid border-b-[2px] border-b-lightwhiteborder">
                <div className="flex gap-[12px] items-start">
                  <img
                    src={darkremove}
                    alt="remove"
                    className="cursor-pointer mt-[3px]"
                  />
                  <div className="flex flex-col gap-[5px] cursor-pointer">
                    <p className="text-white text-sm max-[1439px]:text-base font-medium leading-[125%]">
                      Everton FC
                    </p>
                    <p className="text-white text-sm max-[1439px]:text-base font-normal leading-[125%]">
                      1x2
                    </p>
                    <p className="text-white text-xs xl:text-sm font-normal leading-[125%]">
                      Evrrton FC - Aston Villa
                    </p>
                    <p className="text-white text-xs xl:text-sm font-normal leading-[125%]">
                      15/01 22:30
                    </p>
                  </div>
                </div>
                <span className="h-full rounded-[6px] flex justify-center items-center bg-yellow p-[5px_9px] text-darkblue text-sm max-[1439px]:text-base font-semibold leading-[125%]">
                  3.50
                </span>
              </div>
              <div className="p-[15px_15px_0px]">
                <span className="text-[#EF4444] text-sm max-[1439px]:text-base font-medium leading-[112%]">
                  Stake
                </span>
                <div className="flex gap-[5px] mt-[5px]">
                  <span className="cursor-pointer p-[8px_10px] max-[1439px]:p-[12px_14px] max-[1439px]:w-[58px] max-[1439px]:h-[43px] flex justify-center items-center rounded-[6px] border text-sm max-[1439px]:text-base font-medium leading-[112%] hover:border-bordercolor transition-all duration-300 bg-forestGreen border-doubleextralightwhite text-white hover:bg-yellow hover:text-darkblue">
                    20/-
                  </span>
                  <span className="cursor-pointer p-[8px_10px] max-[1439px]:p-[12px_14px] max-[1439px]:w-[58px] max-[1439px]:h-[43px] flex justify-center items-center rounded-[6px] border text-sm max-[1439px]:text-base font-medium leading-[112%] hover:border-bordercolor transition-all duration-300 bg-forestGreen border-doubleextralightwhite text-white hover:bg-yellow hover:text-darkblue">
                    50/-
                  </span>
                  <span className="cursor-pointer p-[8px_10px] max-[1439px]:p-[12px_14px] max-[1439px]:w-[58px] max-[1439px]:h-[43px] flex justify-center items-center rounded-[6px] border text-sm max-[1439px]:text-base font-medium leading-[112%] hover:border-bordercolor transition-all duration-300 bg-forestGreen border-doubleextralightwhite text-white hover:bg-yellow hover:text-darkblue">
                    100/-
                  </span>
                  <span className="cursor-pointer p-[8px_10px] max-[1439px]:p-[12px_14px] max-[1439px]:w-[58px] max-[1439px]:h-[43px] flex justify-center items-center rounded-[6px] border text-sm max-[1439px]:text-base font-medium leading-[112%] hover:border-bordercolor transition-all duration-300 bg-forestGreen border-doubleextralightwhite text-white hover:bg-yellow hover:text-darkblue">
                    500/-
                  </span>
                  <span className="flex justify-end p-[12px_14px] items-center w-full h-[43px] rounded-[6px]  text-lg   font-semibold leading-[120%] text-yellow border bg-forestGreen border-doubleextralightwhite">
                    50
                  </span>
                </div>
                <div className="p-[15px_0px] flex flex-col gap-[10px]">
                  <p className="flex justify-between items-center text-white text-sm max-[1439px]:text-base font-normal leading-[112%]">
                    Total Odds{" "}
                    <span className="text-white text-sm max-[1439px]:text-base font-semibold leading-[125%]">
                      3.50
                    </span>
                  </p>
                  <p className="flex justify-between items-center text-white text-sm max-[1439px]:text-base font-normal leading-[112%]">
                    Possible Win{" "}
                    <span className="flex gap-[5px] text-white text-sm max-[1439px]:text-base font-semibold leading-[125%]">
                      <span className="text-sm max-[1439px]:text-base text-extralightwhite font-semibold leading-[125%]">
                        KShs.
                      </span>{" "}
                      139.53
                    </span>
                  </p>
                  <p className="flex justify-between items-center text-white text-sm max-[1439px]:text-base font-normal leading-[112%]">
                    Amount(KShs){" "}
                    <span className="flex gap-[5px] text-white text-sm max-[1439px]:text-base font-semibold leading-[125%]">
                      <span className="text-sm max-[1439px]:text-base  font-semibold leading-[125%] text-extralightwhite">
                        KShs.
                      </span>{" "}
                      86.53
                    </span>
                  </p>
                  <p className="flex justify-between items-center text-white text-sm max-[1439px]:text-base font-normal leading-[112%]">
                    15% Excise Tax{" "}
                    <span className="flex gap-[5px] text-white text-sm max-[1439px]:text-base font-semibold leading-[125%]">
                      <span className="text-sm max-[1439px]:text-base  font-semibold leading-[125%] text-extralightwhite">
                        KShs.
                      </span>{" "}
                      13.04
                    </span>
                  </p>
                </div>
                <div className="rounded-[0px_0px_7px_7px] bg-forestGreen p-[15px_15px_20px] flex flex-col gap-[10px] mx-[-15px]">
                  <p className="flex justify-between items-center text-white text-sm max-[1439px]:text-base font-normal leading-[112%]">
                    Win{" "}
                    <span className="text-white text-sm max-[1439px]:text-base font-semibold leading-[125%]">
                      <span className="text-sm max-[1439px]:text-base  text-extralightwhite font-semibold leading-[125%]">
                        KShs.
                      </span>{" "}
                      130.04
                    </span>
                  </p>
                  <p className="flex justify-between items-center text-white text-sm max-[1439px]:text-base font-normal leading-[112%]">
                    20% Withholding Tax{" "}
                    <span className="flex gap-[5px] text-white text-sm max-[1439px]:text-base font-semibold leading-[125%]">
                      <span className="text-sm max-[1439px]:text-base text-extralightwhite font-semibold leading-[125%]">
                        KShs.
                      </span>{" "}
                      13.04
                    </span>
                  </p>
                  <p className="flex justify-between items-center text-white text-sm max-[1439px]:text-base font-normal leading-[112%]">
                    Possible Payout{" "}
                    <span className="flex gap-[5px] text-white text-base font-semibold leading-[125%]">
                      <span className="text-sm max-[1439px]:text-base  font-semibold leading-[125%] text-extralightwhite">
                        KShs.
                      </span>{" "}
                      133.04
                    </span>
                  </p>
                  <div className="flex justify-between items-center mt-4 max-[1439px]:mt-[40px]">
                    <label className="flex items-center text-xs max-[1439px]:text-sm font-normal leading-[128%] text-extralightwhite select-none">
                      <input
                        type="checkbox"
                        className="hidden peer"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <span className="mr-[9px] -mt-[2px] max-[1439px]:mt-0 w-3 max-[1439px]:w-[18px] h-3 max-[1439px]:h-[18px] rounded-[2px] border-[1px] bg-transparent border-solid border-[#A3A3A3] peer-checked:bg-green-600 peer-checked:border-green-600 flex justify-center items-center">
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
                        className={`relative w-7 h-4 max-[1439px]:w-[30px] max-[1439px]:h-[20px] flex items-center rounded-[11px] cursor-pointer ${
                          isToggled ? "bg-[#11A306]" : "bg-[#A3A3A3]"
                        }`}
                      >
                        <div
                          className={`w-[12px] h-[12px] max-[1439px]:w-[14px] max-[1439px]:h-[14px] bg-white rounded-[11px] transform transition-transform ${
                            isToggled ? "translate-x-3" : "translate-x-1"
                          }`}
                        ></div>
                      </div>
                      <span className="text-xs max-[1439px]:text-sm font-medium leading-[128%] text-extralightwhite">
                        Keep betslip
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-[9px] mt-[15px] md:mt-3 s18:mt-[15px]">
                    <Link
                      to="/"
                      className="inline-flex  border-[2px] border-solid  border-white hover:bg-transparent hover:text-white transition-all duration-300 bg-white rounded-[7px] text-darkblue p-[16px_17px] md:p-[10px_14px] s18:p-[16px_17px] text-sm font-medium leading-[111%]"
                    >
                      Share
                    </Link>
                    <span className="rounded-[7px] flex justify-center items-center w-full bg-yellow p-[15px] md:p-[10px_14px] s18:p-[15px] text-darkblue text-sm font-medium leading-[111%]">
                      Place Bet KShs. <span>133.04</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSlipMobile;
