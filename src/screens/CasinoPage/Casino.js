import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dashboardimg from "../../images/dashboardimg.png";
import dashboardimg2 from "../../images/dashboardimg2.png";
import dashboardimg3 from "../../images/dashboardimg3.png";
import search from "../../images/search.svg";
import c1 from "../../images/c1.png";
import c2 from "../../images/c2.png";
import c3 from "../../images/c3.png";
import c4 from "../../images/c4.png";
import c5 from "../../images/c5.png";
import c6 from "../../images/c6.png";
import c7 from "../../images/c7.png";
import c8 from "../../images/c8.png";
import c9 from "../../images/c9.png";
import c10 from "../../images/c10.png";
import c11 from "../../images/c11.png";
import c12 from "../../images/c12.png";
import c13 from "../../images/c13.png";
import c14 from "../../images/c14.png";
import c15 from "../../images/c15.png";
import c16 from "../../images/c16.png";
import c17 from "../../images/c17.png";
import c18 from "../../images/c18.png";
import c19 from "../../images/c19.png";
import c20 from "../../images/c20.png";
import c21 from "../../images/c21.png";
import c22 from "../../images/c22.png";
import c23 from "../../images/c23.png";
import c24 from "../../images/c24.png";
import c25 from "../../images/c25.png";
import c26 from "../../images/c26.png";
import c27 from "../../images/c27.png";
import c28 from "../../images/c28.png";
import c29 from "../../images/c29.png";
import c30 from "../../images/c30.png";
import fire from "../../images/fire.svg";
import crash from "../../images/crash.svg";
import virtuals from "../../images/virtuals.svg";
import lite from "../../images/lite.svg";
import drops from "../../images/drops.svg";
import slots from "../../images/slots.svg";
import table from "../../images/table.svg";
import live from "../../images/live.svg";
import split from "../../images/split.svg";
import spribe from "../../images/spribe.svg";
import elbet from "../../images/elbet.svg";
import pragmetic from "../../images/pragmetic.svg";
import imoon from "../../images/imoon.svg";
import golden from "../../images/golden.svg";
import aviatrix from "../../images/aviatrix.svg";
import evolution from "../../images/evolution.svg";
import smartsoft from "../../images/smartsoft.svg";
import kaya from "../../images/kaya.svg";
import spinmatic from "../../images/spinmatic.svg";
import close from "../../images/close.svg";
import Payroll from "../../Components/Payroll";
import CustomerCare from "../../Components/CustomerCare";
import Pagination from "../../Components/Pagination";
import Winners from "./Winners";
const Casino = () => {
  const sliderRef = useRef();
  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [],
  };
  const imageslider = [
    { image: dashboardimg },
    { image: dashboardimg2 },
    { image: dashboardimg3 },
  ];
  const [isToggled, setIsToggled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="relative bg-darkGreen pb-[70px] s15:pb-[100px]">
        <div className="w-full max-w-[1760px] md:px-5 mx-auto">
          <div className="grid grid-cols-12 gap-5 md:gap-3 s18:gap-5">
            {/* left side part */}
            <div className="max-md:hidden md:col-span-3 s15:col-span-2">
              <div className="w-full flex flex-col gap-[10px]">
                <div className="rounded-md bg-[#0a3b3a] p-[10px_12px] s15:p-[10px_12px] s18:py-[17px] s18:px-5 flex gap-2 s15:gap-3">
                  <img
                    src={fire}
                    alt="fire"
                    className="object-contain invert hover:invert-0 "
                  />
                  <p className="text-xs s14:text-sm font-normal text-white/60">
                    New
                  </p>
                </div>
                <div className="rounded-md bg-[#0a3b3a] p-[10px_6px] s15:p-[10px] flex flex-col gap-1 s14:gap-2 s15:gap-[10px]">
                  <p className="text-white text-xs font-normal">Categories</p>
                  {categories.map((category) => (
                    <Link
                      to={category.linktext}
                      key={category.id}
                      className="rounded-md bg-transparent hover:bg-[#0F5149] p-[4px_6px] 
                      s15:p-[8px_10px] s18:p-[10px] flex justify-between items-center gap-3 transition-all duration-300 group"
                    >
                      <div className="flex flex-row items-center gap-2 s15:gap-3">
                        <span className="w-3 min-w-3 max-w-3 s15:w-4 s15:min-w-4 s15:max-w-4">
                          {category.image && (
                            <img
                              src={category.image}
                              alt={category.name}
                              className="object-contain w-4 h-4 invert group-hover:opacity-50"
                            />
                          )}
                        </span>
                        <p className="text-xs s15:text-sm font-normal !leading-none text-white/60 group-hover:text-white/50 capitalize">
                          {category.name}
                        </p>
                      </div>
                      {category.count !== null && (
                        <p className="text-xs s15:text-sm font-normal text-white/60 group-hover:text-white/50">
                          {category.count}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
                <div className="rounded-md bg-[#0a3b3a] p-[10px_6px] s15:p-[10px] flex flex-col gap-1 s14:gap-2 s18:gap-[10px]">
                  <p className="text-white text-xs font-normal">Providers</p>
                  {providers.map((category) => (
                    <Link
                      to={category.linktext}
                      key={category.id}
                      className="rounded-md bg-transparent hover:bg-[#0F5149] p-[4px_6px] 
                      s15:p-[8px_10px] s18:p-[10px] flex justify-between items-center gap-3 transition-all duration-300 group"
                    >
                      <div className="flex flex-row items-center gap-2 s15:gap-3">
                        {category.img !== null && (
                          <span className="w-3 min-w-3 max-w-3 s15:w-4 s15:min-w-4 s15:max-w-4">
                            <img
                              src={category.image}
                              alt={category.name}
                              className="object-contain w-4 h-4 invert group-hover:opacity-50"
                            />
                          </span>
                        )}
                        <p className="text-xs s15:text-sm font-normal !leading-none text-white/60 group-hover:text-white/50 capitalize">
                          {category.name}
                        </p>
                      </div>
                      {category.count !== null && (
                        <p className="text-xs s15:text-sm font-normal text-white/60 group-hover:text-white/50">
                          {category.count}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Search bar */}
            <div className="col-span-12 md:col-span-9 s15:col-span-7">
              <div className="flex flex-col gap-[10px] ">
                <Slider ref={sliderRef} {...settings}>
                  {imageslider.map((imageslider, index) => (
                    <div key={index}>
                      <div className="cursor-pointer">
                        <div className="max-[575px]:flex max-[575px]:justify-center rounded-md w-full">
                          <img
                            src={imageslider.image}
                            alt="img"
                            className="w-full rounded-md h-full"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="p-5 md:p-3 s15:p-5 bg-[#0a3b3a] rounded-md shadow-inputshadow">
                  <Winners />
                  {/* search */}
                  <div className="relative rounded-md shadow-inputshadow inputshadow mb-3 s15:mb-5">
                    <input
                      type="text"
                      className="p-[8px_40px_8px_8px] s18:p-[12px_40px_12px_12px] rounded-md w-full text-xs lg:text-sm s18:text-base font-normal placeholder:text-white/30 bg-white/10 text-white "
                      placeholder="Search Games.."
                    />
                    <img
                      src={search}
                      alt="search"
                      className="absolute top-1/2 -translate-y-1/2 right-4 invert"
                    />
                  </div>
                  {/* all games */}
                  <div>
                    <p className="text-white text-sm lg:text-base s15:text-lg font-bold mb-3 s15:mb-5">
                      All Games
                    </p>
                    <div className="grid grid-cols-6 gap-2 md:gap-3 s18:gap-[17px] place-content-center ">
                      {images.map((image, index) => (
                        <Link
                          to={image.url}
                          key={index}
                          className="rounded xl:rounded-md"
                        >
                          <img
                            src={image.src}
                            alt={`c${index + 1}`}
                            className="object-contain rounded xl:rounded-md"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Pagination */}
              <Pagination />
            </div>
            <div className="col-span-0 hidden s15:block s15:col-span-3">
              <div className="odd-conected">
                <div className="flex flex-col gap-5">
                  <div className="bg-[#02191E] rounded-md overflow-hidden">
                    <div className="bg-[#136459] grid grid-cols-2">
                      <div className="p-[10px_14px] flex items-center gap-2 text-lg text-white font-medium !leading-none border-r-[1px] border-white/20">
                        <span className="bg-yellow rounded-full size-[31px] text-black text-[19px] font-medium flex justify-center items-center">
                          0
                        </span>
                        Betslip
                      </div>
                      <div className="p-[10px_14px] flex items-center justify-center gap-2 text-lg text-white font-medium !leading-none text-center">
                        My bets
                      </div>
                    </div>
                    <div className="bg-[#0A3B3A] px-[19px] pb-5">
                      <div className="pt-16 pb-[92px] text-center">
                        <h3 className="text-white text-lg font-normal mb-[2px]">
                          No selections
                        </h3>
                        <p className="text-white text-[13px] font-normal !leading-tight w-full max-w-[250px] mx-auto">
                          Please add match selections by selecting the odds on
                          any match
                        </p>
                      </div>
                      <p className="text-white text-base font-medium mb-3">
                        Have a booking code? Please enter it here.
                      </p>
                      <div>
                        <input
                          type="text"
                          placeholder="Booking code"
                          className="rounded-md border-[1px] border-white/15 bg-[#136459] text-white placeholder:text-white text-base font-normal p-[12px_16px] s15:p-[20px_22px] w-full"
                        />
                      </div>
                      <button className="bg-yellow hover:bg-[#EBBC1350] rounded-md w-full p-[19px] mt-3 text-[#0C2240] text-sm s15:text-[17px] font-medium !leading-none">
                        Load betslip
                      </button>
                    </div>
                  </div>
                  <div>
                    <Payroll />
                  </div>
                  <div>
                    <CustomerCare />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s15:hidden flex justify-center items-center fixed bottom-0 z-[9] left-[50%] translate-x-[-50%] w-full max-w-[428px] mx-auto rounded-[20px_20px_0px_0px] bg-[#02191E] p-[30px_15px_12px] lg:p-[24px_15px_12px] s18:p-[40px_15px_25px]">
        <span
          className="select-none cursor-pointer border-solid border-r-[1px] border-r-doubleextralightwhite inline-flex flex-col items-center gap-[7px] p-[0px] text-white text-[18px] font-medium leading-[100%]"
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

export default Casino;

const categories = [
  { id: 1, linktext: "/", name: "New", image: fire, count: null },
  { id: 2, linktext: "/", name: "Crash", image: crash, count: 28 },
  { id: 3, linktext: "/", name: "Virtuals", image: virtuals, count: 10 },
  { id: 4, linktext: "/", name: "Lite", image: lite, count: 14 },
  { id: 5, linktext: "/", name: "Drops and …", image: drops, count: 3 },
  { id: 6, linktext: "/", name: "Slots", image: slots, count: 310 },
  { id: 7, linktext: "/", name: "Table/Cards", image: table, count: 12 },
  { id: 8, linktext: "/", name: "Live", image: live, count: 164 },
  { id: 9, linktext: "/", name: "Popular", image: null, count: 1 },
];

const providers = [
  { id: 1, linktext: "/", name: "Split The Pot", image: split, count: null },
  { id: 2, linktext: "/", name: "Spribe", image: spribe, count: null },
  { id: 3, linktext: "/", name: "Elbet", image: elbet, count: null },
  {
    id: 4,
    linktext: "/",
    name: "Pragmatic Play",
    image: pragmetic,
    count: null,
  },
  { id: 5, linktext: "/", name: "iMoon", image: imoon, count: null },
  { id: 6, linktext: "/", name: "Golden Race", image: golden, count: null },
  { id: 7, linktext: "/", name: "Aviatrix", image: aviatrix, count: null },
  { id: 8, linktext: "/", name: "Evolution", image: evolution, count: null },
  { id: 9, linktext: "/", name: "Smartsoft", image: smartsoft, count: null },
  { id: 10, linktext: "/", name: "Kaya", image: kaya, count: null },
  { id: 11, linktext: "/", name: "Spinmatic", image: spinmatic, count: null },
];

const images = [
  { src: c1, url: "/page1" },
  { src: c2, url: "/page2" },
  { src: c3, url: "/page3" },
  { src: c4, url: "/page4" },
  { src: c5, url: "/page5" },
  { src: c6, url: "/page6" },
  { src: c7, url: "/page7" },
  { src: c8, url: "/page8" },
  { src: c9, url: "/page9" },
  { src: c10, url: "/page10" },
  { src: c11, url: "/page11" },
  { src: c12, url: "/page12" },
  { src: c13, url: "/page13" },
  { src: c14, url: "/page14" },
  { src: c15, url: "/page15" },
  { src: c16, url: "/page16" },
  { src: c17, url: "/page17" },
  { src: c18, url: "/page18" },
  { src: c19, url: "/page19" },
  { src: c20, url: "/page20" },
  { src: c21, url: "/page21" },
  { src: c22, url: "/page22" },
  { src: c23, url: "/page23" },
  { src: c24, url: "/page24" },
  { src: c25, url: "/page25" },
  { src: c26, url: "/page26" },
  { src: c27, url: "/page27" },
  { src: c28, url: "/page28" },
  { src: c29, url: "/page29" },
  { src: c30, url: "/page30" },
];
