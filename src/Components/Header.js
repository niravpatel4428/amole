import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import amole from "../images/amolebet.png";
import search from "../images/search.svg";
import darksearch from "../images/darksearch.svg";
import login from "../images/login.svg";
import Register from "./Register";
import Login from "./Login";

const Header = () => {
  // Toggle Register / Login Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenRGS, setIsModalOpenRGS] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModalRGS = () => {
    setIsModalOpenRGS(true);
  };
  const closeModalRGS = () => {
    setIsModalOpenRGS(false);
  };
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isCollapsed) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isCollapsed]);

  return (
    <>
      <section className="sticky top-0 left-0 right-0 w-full bg-shadeGreen z-50 py-4">
        <div className="flex max-xl:justify-between items-center w-full max-w-[1780px] mx-auto max-sm:px-[15px] px-[30px]">
          <div className="max-420: relative z-[100] flex max-xl:pl-[40px]">
            <Link to="/" className="inline-block">
              <img
                src={amole}
                alt="amole"
                className="object-cover max-[420px]:w-[75px] max-lg:w-[130px] lg:w-[150px]
              s16:w-[180px]"
              />
            </Link>
          </div>
          <div className="max-xl:flex max-md:items-center xl:hidden gap-[10px]">
            <span className="max-[420px]:w-[30px] max-[420px]:h-[30px] max-[420px]:p-[8px] md:hidden max-md:flex justify-center items-center bg-white/10 rounded-[5px] w-[40px] h-[40px] cursor-pointer">
              <img src={search} alt="search" className="invert" />
            </span>
            {/* search btn */}
            <div className="relative max-md:hidden">
              <input
                type="search"
                className="h-full xl:w-[150px] s16:w-full md:p-[11px_40px_11px_12px] s16:p-[11px_40px_11px_15px] rounded-[5px] 
                bg-white/10 shadow-inputshadow placeholder:text-[16px] placeholder:leading-[150%] placeholder:text-white text-white"
                placeholder="Search.."
              />
              <img
                src={darksearch}
                alt="search"
                className="absolute w-[18px] h-[18px] top-[50%] translate-y-[-50%] right-[15px] z-50"
              />
            </div>
            {/* join now btn */}
            <button
              onClick={openModalRGS}
              className="max-[420px]:h-[30px] max-[420px]:text-[12px] max-md:min-w-[70px] max-md:h-[40px] min-w-[88px] bg-yellow  border-solid border-[2px] border-transparent rounded-[5px] inline-flex items-center justify-center p-[11px_8px] max-md:text-[14px] text-[16px] leading-[150%] font-medium transition-all duration-300 hover:bg-transparent hover:border-yellow hover:text-yellow"
            >
              Join Now
            </button>
            {/* login btn */}
            <button
              onClick={openModal}
              className="max-[420px]:h-[30px] max-md:text-[0px] max-md:min-w-[40px] max-md:h-[40px] min-w-[88px] shadow-inputshadow !rounded-md overflow-hidden inline-flex items-center justify-center p-[11px_8px] text-[16px] leading-[150%] font-medium transition-all duration-300 bg-buttonGradient bg-no-repeat text-white  hover:text-white hover:bg-buttonGradientHover"
            >
              Login
              <img src={login} alt="search" className="md:hidden" />
            </button>
          </div>
          {/* big screen links */}
          <div className={`hidden xl:flex justify-between w-full`}>
            <ul className="flex flex-row items-center xl:gap-[18px] s16:gap-[30px] xl:mt-0 mx-auto">
              <li>
                {/* Native scrolling using hash links */}
                <Link to="/" className="text-white text-sm s18:text-[16px] !leading-tight s18:leading-[150%] font-normal hover:text-yellow transtition-all duration-300">
                  Sports Betting
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-sm s18:text-[16px] !leading-tight s18:leading-[150%] font-normal hover:text-yellow transtition-all duration-300">
                  Live Betting
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-sm s18:text-[16px] !leading-tight s18:leading-[150%] font-normal hover:text-yellow transtition-all duration-300">
                  OdiLeague
                </Link>
              </li>
              <li>
                <Link to="/casino" className="text-white text-sm s18:text-[16px] !leading-tight s18:leading-[150%] font-normal hover:text-yellow transtition-all duration-300">
                  Casino
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-sm s18:text-[16px] !leading-tight s18:leading-[150%] font-normal hover:text-yellow transtition-all duration-300">
                  Jackpots
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-sm s18:text-[16px] !leading-tight s18:leading-[150%] font-normal hover:text-yellow transtition-all duration-300">
                  Livescore
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-sm s18:text-[16px] !leading-tight s18:leading-[150%] font-normal hover:text-yellow transtition-all duration-300">
                  Promotions
                </Link>
              </li>
            </ul>
            <div className="flex gap-[10px]">
              {/* search */}
              <div className="relative">
                <input
                  type="search"
                  className="h-full xl:w-[150px] s16:w-full p-[8px_40px_8px_12px] s18:p-[11px_40px_11px_15px] rounded-[5px] 
                  bg-[#0A3B3A] shadow-inputshadow placeholder:text-[16px] placeholder:!leading-none s18: s18:placeholder:leading-[150%] placeholder:text-white text-white"
                  placeholder="Search.."
                />
                <img
                  src={darksearch}
                  alt="search"
                  className="absolute w-[18px] h-[18px] top-[50%] translate-y-[-50%] right-[15px] z-50"
                />
              </div>
              {/* joinnow btn */}
              <button
                onClick={openModalRGS}
                className="min-w-[88px] bg-yellow  border-solid border-[2px] border-transparent rounded-[5px] inline-flex items-center justify-center p-2 px-2 s18:p-[11px_8px] text-sm s18:text-[16px] !leading-none s18:leading-[150%] font-medium transition-all duration-300 hover:bg-transparent hover:border-yellow hover:text-yellow"
              >
                Join Now
              </button>
              {/* login btn */}
              <button
                onClick={openModal}
                className="min-w-[88px] shadow-inputshadow border-solid border-[2px] border-[#1b4334] rounded-[5px] inline-flex items-center justify-center p-2 px-2 s18:p-[11px_8px] text-sm s18:text-[16px] !leading-none s18:leading-[150%] font-medium transition-all duration-300 bg-buttonGradient bg-no-repeat text-white hover:text-white hover:border-[#1b4334] hover:bg-buttonGradientHover"
              >
                Login
              </button>
              {/* theme btn */}
            </div>
          </div>
          {/* hamburger toggle button */}
          <button
            className="rounded absolute z-[999] xl:hidden"
            id="navbar-toggle"
            onClick={toggleCollapse}
          >
            <span
              className={`${
                isCollapsed
                  ? "w-[20px] rotate-45 top-[4px] duration-500"
                  : "duration-500"
              } relative w-[18px] max-[420px]:h-[2px] h-[3px] rounded-md bg-yellow block mb-1`}
            ></span>
            <span
              className={`${
                isCollapsed ? "hidden" : "duration-500"
              } relative w-[24px] max-[420px]:h-[2px] h-[3px] rounded-md bg-yellow block mb-1`}
            ></span>
            <span
              className={`${
                isCollapsed
                  ? "w-[20px] -rotate-45 -top-[2px] duration-500"
                  : "duration-500"
              } relative w-[18px] max-[420px]:h-[2px] h-[3px] rounded-md bg-yellow block`}
            ></span>
          </button>
        </div>
        {/* small screen menubar */}
        <div className={`${isCollapsed ? "block" : "xl:hidden"}`}>
          <div
            className={`${
              isCollapsed
                ? "top-0 left-0 h-full transition-all duration-500"
                : "top-0 left-[-100%] transition-all duration-500"
            } fixed z-[990] top-0 overflow-auto bg-[#136459] h-full w-full xl:hidden`}
          >
            <div className="h-full w-full flex justify-center">
              <ul className="flex flex-col items-center justify-center gap-5 overflow-auto">
                <li>
                  {/* Native scrolling using hash links */}
                  <Link to="/" className="text-white text-sm s18:text-[16px] !leading-tight s18:leading-[150%] font-normal hover:text-yellow transtition-all duration-300">
                    Sports Betting
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-300">
                    Live Betting
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-300">
                    OdiLeague
                  </Link>
                </li>
                <li>
                  <Link to="/casino" className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-300">
                    Casino
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-300">
                    Jackpots
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-300">
                    Livescore
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-white text-[16px] leading-[150%] font-normal hover:text-yellow transtition-all duration-300">
                    Promotions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Login isOpen={isModalOpen} onClose={closeModal} />
      <Register isOpen={isModalOpenRGS} onClose={closeModalRGS} />
    </>
  );
};

export default Header;
