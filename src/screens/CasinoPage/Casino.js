import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Payroll from "../../Components/Payroll";
import CustomerCare from "../../Components/CustomerCare";
import Pagination from "../../Components/Pagination";
import CasinoLeftPart from "./casinoLeft/CasinoLeftPart";
import Winners from "./Winners";
import CenterImageSlider from "../../Components/CenterImageSlider";
import CasinoCenter from "./casinoCenter/CasinoCenter";
import CasinoBestSlipDesktop from "./casinoRight/CasinoBestSlipDesktop";
import BestSlipMobile from "./bestSlipMobileCasinoPage/bestSlipMobile";
import MobileLeftPart from "./casinoLeft/MobileLeftPart";
const Casino = () => {
  return (
    <>
      <div className="relative bg-darkGreen pb-[70px] s15:pb-[100px]">
        <div className="w-full max-w-[1760px] md:px-5 mx-auto">
          <div className="grid grid-cols-12 gap-5 md:gap-3 s18:gap-5">
            {/* left side part */}
            <div className="max-md:hidden md:col-span-3 s15:col-span-2">
              <CasinoLeftPart />
            </div>
            {/* center part */}
            <div className="col-span-12 md:col-span-9 s15:col-span-7">
              <div className="flex flex-col gap-[10px] ">
                <>
                  <CenterImageSlider />
                </>

                <div className="md:p-3 s15:p-5 rounded-md shadow-inputshadow">
                  <>
                    <Winners />
                  </>
                  <>
                    <MobileLeftPart />
                    <CasinoCenter />
                  </>
                </div>
              </div>
              <Pagination />
            </div>
            {/* right side part */}
            <div className="col-span-0 hidden s15:block s15:col-span-3">
              <div className="odd-conected">
                <div className="flex flex-col gap-5">
                  <>
                    <CasinoBestSlipDesktop />
                  </>
                  <>
                    <Payroll />
                  </>
                  <>
                    <CustomerCare />
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <BestSlipMobile />
      </>
    </>
  );
};

export default Casino;
