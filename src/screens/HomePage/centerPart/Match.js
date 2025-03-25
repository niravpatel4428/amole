import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import downarrow from "../../../images/downarrow.svg";
import whitedown from "../../../images/whitedown.svg";
import whitecalender from "../../../images/whitecalender.svg";
import whiteselectdown from "../../../images/whiteselectdown.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { leaguesData } from "../data";
const Match = () => {
  const [activeOdd, setActiveOdd] = useState(null);
  const [selectedOdd, setSelectedOdd] = useState(
    leaguesData[0]?.titleWrps[0]?.matches[0]?.odds[0][0] || null
  );
  const [isMobile, setIsMobile] = useState(false);

  const items = [
    { text: "Hrs", icon: downarrow, darkIcon: whitedown },
    { text: "TODAY" },
    { text: "THU" },
    { text: "FRI" },
    { text: "SAT" },
    { text: "SUN" },
    {
      text: "",
      icons: [whitecalender, whitedown],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="max-sm:mt-0 mt-3 s18:mt-[17px] sm:rounded-lg bg-[#0A3B3A] shadow-dashboardshadow">
        {/* sports / Hrs icon TODAY THU FRI SAT SUN */}
        <StickyHeader />
        {/* leage / 1*2 / double chance header */}
        <div className="scrollable">
          <div className="max-md:min-w-0 max-lg:min-w-[732px] flex items-center justify-between max-sm:p-[8px_15px] py-3 px-5 s18:p-[15px_23px]">
            <select className="rounded-md bg-forestGreen py-2 px-[11px] s18:p-[9px_11px] w-[247px] border-none outline-none text-white text-sm font-normal leading-12 appearance-none max-md:mx-2">
              <option value="" selected>
                Sort by league
              </option>
              <option value="option1">Sort by time</option>
            </select>
            <span className="text-white text-sm font-normal leading-tight max-md:hidden">
              1X2
            </span>
            <span className="text-white text-sm font-normal leading-tight max-md:hidden">
              Double chance
            </span>
            <select className="rounded-md bg-forestGreen py-2 px-[11px] s18:p-[9px_11px] w-[213px] border-none outline-none text-white text-sm font-normal leading-12 appearance-none max-md:mx-2">
              <option value="" selected>
                GG/NG
              </option>
              <option value="option1">To qualify</option>
            </select>
          </div>
        </div>
        {/* leage data */}
        <div className="main-dashboard-block">
          {leaguesData.map((league, leagueIndex) => (
            <div key={leagueIndex} className="main-title-block">
              {/* League Title */}
              <div className="title-block flex justify-between items-center cursor-pointer max-sm:p-[10px_15px] p-[10px_23px] bg-forestGreen">
                <span className="text-white max-sm:text-xs text-sm font-medium leading-tight">
                  {league.leagueTitle}
                </span>
                <img src={whiteselectdown} alt="downarrow" />
              </div>

              {/* Title Wrapper */}
              {league.titleWrps.map((titleWrp, titleWrpIndex) => (
                <div key={titleWrpIndex} className="title-wrp">
                  {titleWrp.matches.map((match, matchIndex) => (
                    <div
                      key={matchIndex}
                      className="flex justify-between items-center max-sm:p-[12px_15px] py-2 s16:py-3 px-5 s18:p-[15px_23px]"
                    >
                      {/* Teams */}
                      <Link
                        to="/matchprofile"
                        className="cursor-pointer max-sm:w-1/2 max-lg:w-[400px]"
                      >
                        <p className="text-white text-xs sm:text-sm s18:text-base font-normal leading-[143%] md:leading-tight s18:leading-[143%]">
                          {match.team1}
                        </p>
                        <p className="text-white text-xs sm:text-sm s18:text-base font-normal leading-[143%] md:leading-tight s18:leading-[143%]">
                          {match.team2}
                        </p>
                        <p className="flex items-center gap-[5px] mt-[5px]">
                          {match.details.map((detail, detailIndex) => (
                            <span
                              key={detailIndex}
                              className={`max-sm:text-[9px] text-xs leading-[133%] ${
                                detail.bold ? "font-bold" : "font-normal"
                              } ${
                                detail.colorRed
                                  ? "text-[#F87171]"
                                  : "text-extralightwhite"
                              }`}
                            >
                              {detail.text}
                            </span>
                          ))}
                        </p>
                      </Link>

                      {/* Odds */}
                      <div className="scrollable max-sm:w-full max-sm:max-w-[50%] max-lg:overflow-auto w-full lg:max-w-[520px] xl:max-w-[700px] s15:max-w-[550px] s18:max-w-[645px]">
                        <div className="w-full max-sm:min-w-full  max-lg:min-w-[550px] lg:max-w-[520px] xl:max-w-[700px] s15:max-w-[550px] s18:max-w-[645px] sm:grid sm:grid-cols-12 gap-3 xl:gap-[18px]">
                          {match.odds.map((group, groupIndex) => (
                            <div key={groupIndex} className="sm:col-span-4">
                              <div className="flex gap-1">
                                {group
                                  .filter((odd) => {
                                    if (isMobile) {
                                      return odd.mobileVisible;
                                    }
                                    return true;
                                  })
                                  .map((odd, oddIndex) => {
                                    const isSelected =
                                      JSON.stringify(selectedOdd) ===
                                      JSON.stringify(odd);
                                    return (
                                      <div
                                        key={oddIndex}
                                        className="w-3/4 sm:w-1/2"
                                      >
                                        <div
                                          className={`odd-block cursor-pointer rounded-md w-full py-3 md:py-2 s18:py-3  flex flex-col gap-1 border items-center justify-center 
                                                        ${
                                                          isSelected
                                                            ? "bg-[#E2E2E2]  text-black  border-yellow"
                                                            : "bg-teal border-doubleextralightwhite"
                                                        }
                                                    `}
                                          onClick={() => setSelectedOdd(odd)}
                                        >
                                          <span
                                            className={`${
                                              odd.highlight
                                                ? "flex items-center gap-[1px]"
                                                : ""
                                            } ${
                                              isSelected ? "!text-darkblue" : ""
                                            }  text-extralightwhite text-xs font-normal leading-normal md:leading-tight s18:leading-normal`}
                                          >
                                            {odd.label}
                                            {odd.highlight && (
                                              <span className="ml-[2px] mb-[1px] w-0 h-0 border-b-[9px] border-b-[#11A306] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent"></span>
                                            )}
                                          </span>
                                          <span
                                            className={`${
                                              isSelected ? "!text-darkblue" : ""
                                            } text-white text-sm s18:text-base font-medium leading-normal md:leading-tight s18:leading-normal`}
                                          >
                                            {odd.value}
                                          </span>
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const StickyHeader = () => {
  const items = [
    { text: "TODAY" },
    { text: "THU" },
    { text: "FRI" },
    { text: "SAT" },
    { text: "SUN" },
  ];
  const [startDate, setStartDate] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="sticky max-[420px]:top-20 top-20 sm:top-20 md:top-28 lg:top-28 xl:top-28 s15:top-28 s16:top-[118px] s18:top-28 rounded-md bg-[#0A3B3A] shadow-dashboardshadow">
        <div className="max-sm:flex-col max-sm:items-start max-sm:p-[8px_15px_0px] flex p-[0px_20px] items-center justify-between border-b-[1px] border-solid border-lightborderyellow">
          <span className="text-white text-base s18:text-xl font-bold leading-none">
            Sports
          </span>
          <ul className="max-sm:w-full flex gap-3 md:gap-5 items-center justify-between">
          <li className="sport-first-item max-sm:whitespace-nowrap max-sm:p-[5px_0px] py-3 s18:p-[27px_0px_27px] relative flex items-center cursor-pointer text-white text-xs md:text-sm s18:text-base font-medium !leading-tight s18:leading-[143%] hover:text-yellow transition-all duration-300 after:absolute after:content-[''] after:bg-darkblue after:w-[0px] after:left-[50%] after:translate-x-[-50%] after:h-[2px] after:mx-auto after:bottom-0 after:transition-all after:duration-300 hover:after:w-full hover:after:bg-yellow">
            <select name="hours" id="hours" className="bg-transparent">
              <option value="hrs">Hrs</option>
              <option value="12hrs">12hrs</option>
              <option value="10hrs">10hrs</option>
              <option value="8hrs">8hrs</option>
            </select>
          </li>
            {items.map((item, index) => (
              <li
                key={index}
                className="max-sm:whitespace-nowrap max-sm:p-[5px_0px] py-3 s18:p-[27px_0px_27px] text-xs md:text-sm relative flex items-center cursor-pointer text-white s18:text-base font-medium  !leading-tight s18:leading-[143%] hover:text-yellow transition-all duration-300 after:absolute after:content-[''] after:bg-darkblue after:w-[0px] after:left-[50%] after:translate-x-[-50%] after:h-[2px] after:mx-auto after:bottom-0 after:transition-all after:duration-300 hover:after:w-full hover:after:bg-yellow"
              >
                {item.text && <span>{item.text}</span>}
                {item.icon && (
                  <img
                    src={item.darkIcon}
                    alt="icon"
                    className="min-w-[10px] ml-[4px]"
                  />
                )}
                {item.icons &&
                  item.icons.map((icon, i) => (
                    <img
                      key={i}
                      src={icon}
                      alt="icon"
                      className={i > 0 ? "min-w-[10px] ml-[4px]" : ""}
                    />
                  ))}
              </li>
            ))}
            <li className="flex items-center">
            <div className="relative">
              <div
                className="relative flex items-center sport-section"
                onClick={() => setOpen(!open)}
              >
                <img
                  src={whitecalender}
                  alt="icon"
                  className="min-w-[10px] ml-[4px]"
                />
                <img
                  src={whitedown}
                  alt="icon"
                  className="min-w-[10px] ml-[4px]"
                />
              </div>
              {open && (
                <div className="absolute top-12 right-0 z-50">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      setOpen(false);
                    }}
                    inline
                     calendarClassName="custom-calendar !bg-white"
                  />
                </div>
              )}
            </div>
          </li>
          </ul>
        </div>
        <div className="max-sm:p-[8px_0px_8px_15px] p-[12px_0px_12px_20px] s18:p-[22px_0px_22px_20px]">
          <ul className="flex max-sm:gap-[15px] sm:gap-[23px] overflow-auto scrollable min-h-5">
            {sportsData.map((sport, index) => (
              <li
                key={index}
                className="cursor-pointer flex items-center whitespace-nowrap text-white hover:text-yellow text-sm s18:text-base font-normal leading-[143%] transition-all duration-300 "
              >
                {sport.name}
                <span className="pt-[2px] min-w-[33px] min-h-5 ml-[5px] rounded-[23px] bg-yellow flex justify-center items-center text-white text-sm font-medium leading-tight last:mr-3b">
                  {sport.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Match;

const sportsData = [
  { name: "Soccer", count: 135 },
  { name: "eSports", count: 27 },
  { name: "Basketball", count: 45 },
  { name: "Ice Hockey", count: 41 },
  { name: "Volleyball", count: 35 },
  { name: "Handball", count: 31 },
  { name: "Futsal", count: 13 },
  { name: "Darts", count: 8 },
  { name: "Waterpolo", count: 8 },
];
