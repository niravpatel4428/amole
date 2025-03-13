import React, { useState } from "react";
import close from "../../../images/close.svg";
const BestSlipMobile = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="s15:hidden flex justify-center items-center fixed bottom-0 z-[9] left-[50%] translate-x-[-50%] w-full max-w-[428px] mx-auto rounded-[20px_20px_0px_0px] bg-[#02191E] p-[30px_15px_12px] lg:p-[24px_15px_12px] s18:p-[40px_15px_25px]">
        <span
          className="select-none cursor-pointer border-solid border-r-[1px] border-r-doubleextralightwhite inline-flex flex-col items-center gap-[7px] p-[0px] text-white text-lg font-medium leading-[100%]"
          onClick={handleToggle}
        >
          {isOpen ? (
            <>
              <span className="absolute -top-[20px] lg:-top-4 s18:top-[-22px] left-[50%] translate-x-[-50%] flex w-8 h-8 max-md:w-[38px] max-md:h-[38px] justify-center items-center rounded-[50%] text-black bg-white text-[22px] md:text-abse s16:text-lg max-md:text-[22px] font-medium leading-[100%]">
                <img src={close} alt="Close" className="w-[14px] h-[14px]" />
              </span>
              Close
            </>
          ) : (
            <>
              <span className="absolute -top-[20px] lg:-top-4 s18:top-[-22px] left-[50%] translate-x-[-50%] flex w-8 h-8 max-md:w-[38px] max-md:h-[38px] justify-center items-center rounded-[50%] text-black bg-white text-[22px] md:text-abse s16:text-lg max-md:text-[22px] font-medium leading-[100%]">
                1
              </span>
              Betslip
            </>
          )}
        </span>
      </div>
      <div
        className={`rounded-[7px] open-content ${isOpen ? "block" : "hidden"}`}
      >
        <div className="odd-conected overflow-auto max-h-[550px] block fixed bottom-[84px] lg:bottom-[74px] z-[9] max-w-[428px] mx-auto left-[50%] translate-x-[-50%] s15:hidden rounded-[7px] bg-bluedarkmodecolor shadow-dashboardshadow w-full">
          <div className="bg-[#24354E] rounded-md overflow-hidden">
            <div className="bg-[#136459] grid grid-cols-2">
              <div className="p-[8px_10px] s15:p-[10px_14px] cursor-pointer flex items-center gap-2 text-sm xl:text-base s15:text-lg text-white font-medium !leading-none border-r-[1px] border-white/20">
                <span className="bg-yellow rounded-full size-6 s15:size-[31px] text-black text-xs md:text-sm xl:text-base s15:text-[19px] font-medium flex justify-center items-center">
                  0
                </span>
                Betslip
              </div>
              <div className="p-[8px_10px] s15:p-[10px_14px] cursor-pointer flex items-center justify-center gap-2 text-sm xl:text-base s15:text-lg text-white font-medium !leading-none text-center">
                My bets
              </div>
            </div>
            <div className="bg-[#02191E] px-[19px] pb-5">
              <div className="pt-16 pb-[92px] text-center">
                <h3 className="text-white text-sm xl:text-base s15:text-lg font-normal mb-[2px]">
                  No selections
                </h3>
                <p className="text-white text-xs xl:text-[13px] font-normal !leading-tight w-full max-w-[250px] mx-auto">
                  Please add match selections by selecting the odds on any match
                </p>
              </div>
              <p className="text-white text-xs xl:text-sm s15:text-base font-medium mb-3">
                Have a booking code? Please enter it here.
              </p>
              <div>
                <input
                  type="text"
                  placeholder="Booking code"
                  className="rounded-md border-[1px] border-white/15 bg-[#136459] text-white placeholder:text-white text-base 
                  font-normal p-[12px_16px] md:p-[12px_18px] s18:p-[20px_22px] w-full"
                />
              </div>
              <button className="bg-yellow hover:bg-[#EBBC1350] rounded-md w-full py-3 px-4 s18:p-[19px] mt-3 text-[#0C2240] text-sm s15:text-[17px] font-medium !leading-none">
                Load betslip
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSlipMobile;
