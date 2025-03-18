import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import amole from "../images/amolebet.png";
import search from "../images/search.svg";
import wallet from "../images/wallet.svg";
import darksearch from "../images/darksearch.svg";
import login from "../images/login.svg";
import Register from "./Register";
import Login from "./Login";

const menuItems = [
  { label: "Sports Betting", path: "/" },
  { label: "Live Betting", path: "/" },
  { label: "OdiLeague", path: "/" },
  { label: "Casino", path: "/casino" },
  { label: "Jackpots", path: "/" },
  { label: "Livescore", path: "/" },
  { label: "Promotions", path: "/" },
];

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
      <section className="sticky top-0 left-0 right-0 w-full bg-shadeGreen z-50 py-2 md:py-4">
        <div className="flex max-xl:justify-between items-center w-full max-w-[1780px] mx-auto max-sm:px-[15px] px-[30px]">
          <div className="max-420:relative z-[100] flex max-xl:pl-[30px]">
            <Link to="/" className="inline-block">
              <img
                src={amole}
                alt="amole"
                className="object-cover w-16 md:w-[130px] lg:w-[150px]
              s16:w-[180px]"
              />
            </Link>
          </div>
          <div className="max-xl:flex max-md:items-center xl:hidden gap-2">
            <span className="p-2 md:hidden max-md:flex justify-center items-center bg-white/10 rounded-5px w-fit h-fit cursor-pointer">
              <img src={search} alt="search" className="invert w-3 sm:w-4" />
            </span>
            {/* search btn */}
            <div className="relative max-md:hidden">
              <input
                type="search"
                className="h-full xl:w-[150px] s16:w-full md:p-[11px_40px_11px_12px] s16:p-[11px_40px_11px_15px] rounded-5px 
                bg-white/10 shadow-inputshadow placeholder:text-base placeholder:leading-normal placeholder:text-white text-white"
                placeholder="Search.."
              />
              <img
                src={darksearch}
                alt="search"
                className="absolute w-[18px] h-[18px] top-1/2 -translate-y-1/2 right-[15px] z-50"
              />
            </div>
            {/* Balance */}
            <button className="bg-yellow border-2 border-transparent hover:border-yellow rounded-md flex gap-1 sm:gap-2 items-center justify-between py-2 px-1 sm:px-2 text-[8px] sm:text-xs font-medium text-darkGreen hover:text-yellow hover:bg-transparent group">
              <UserIcon />
              <span>$20.15</span>
            </button> 
            {/* join now btn */}
            <button
              onClick={openModalRGS}
              className="bg-yellow border-solid border-2 border-transparent rounded-5px py-2 px-1 sm:px-2 text-center text-[8px] sm:text-xs leading-normal font-medium transition-all duration-300 hover:bg-transparent hover:border-yellow hover:text-yellow"
            >
              Join Now
            </button>
            {/* login btn */}
            <button
              onClick={openModal}
              className="max-md:text-[0px] w-fit shadow-inputshadow !rounded-md overflow-hidden inline-flex items-center justify-center py-[10px] px-2 text-base leading-none font-medium transition-all duration-300 bg-buttonGradient bg-no-repeat text-white  hover:text-white hover:bg-buttonGradientHover"
            >
              Login
              <img src={login} alt="search" className="md:hidden w-3 sm:w-4" />
            </button>
            
          </div>
          {/* big screen links */}
          <div className={`hidden xl:flex justify-between w-full`}>
            <ul className="flex flex-row items-center xl:gap-[18px] s16:gap-[30px] xl:mt-0 mx-auto">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="text-white text-sm s18:text-base !leading-tight s18:leading-normal font-normal hover:text-yellow transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-[10px]">
              {/* search */}
              <div className="relative">
                <input
                  type="search"
                  className="h-full xl:w-[150px] s16:w-full p-[8px_40px_8px_12px] s18:p-[11px_40px_11px_15px] rounded-5px 
                  bg-[#0A3B3A] shadow-inputshadow placeholder:text-base placeholder:!leading-none s18: s18:placeholder:leading-normal placeholder:text-white text-white"
                  placeholder="Search.."
                />
                <img
                  src={darksearch}
                  alt="search"
                  className="absolute w-[18px] h-[18px] top-1/2 -translate-y-1/2 right-[15px] z-50"
                />
              </div>
              {/* joinnow btn */}
              <button
                onClick={openModalRGS}
                className="min-w-[88px] bg-yellow  border-solid border-2 border-transparent rounded-5px inline-flex items-center justify-center p-2 px-2 s18:p-[11px_8px] text-sm s18:text-base !leading-none s18:leading-normal font-medium transition-all duration-300 hover:bg-transparent hover:border-yellow hover:text-yellow"
              >
                Join Now
              </button>
              {/* login btn */}
              <button
                onClick={openModal}
                className="min-w-[88px] shadow-inputshadow border-solid border-2 border-[#1b4334] rounded-5px inline-flex items-center justify-center p-2 px-2 s18:p-[11px_8px] text-sm s18:text-base !leading-none s18:leading-normal font-medium transition-all duration-300 bg-buttonGradient bg-no-repeat text-white hover:text-white hover:border-[#1b4334] hover:bg-buttonGradientHover"
              >
                Login
              </button>
              {/* theme btn */}
            </div>
          </div>
          {/* hamburger toggle button */}
          <Hamburger
            toggleCollapse={toggleCollapse}
            isCollapsed={isCollapsed}
          />
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
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {/* Native scrolling using hash links */}
                    <Link
                      to={item.path}
                      className="text-white text-sm s18:text-base !leading-tight s18:leading-normal font-normal hover:text-yellow transtition-all duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
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

const UserIcon = () => {
  return (
    <img src={wallet} alt="icon" className="w-3 sm:w-4 group-hover:invert" />
  )
}

const Hamburger = ({ toggleCollapse, isCollapsed }) => {
  return (
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
        } relative w-6 max-[420px]:h-[2px] h-[3px] rounded-md bg-yellow block mb-1`}
      ></span>
      <span
        className={`${
          isCollapsed
            ? "w-[20px] -rotate-45 -top-[3px] duration-500"
            : "duration-500"
        } relative w-[18px] max-[420px]:h-[2px] h-[3px] rounded-md bg-yellow block`}
      ></span>
    </button>
  );
};
