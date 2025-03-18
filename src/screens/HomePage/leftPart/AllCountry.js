import React, { useState } from "react";
import darkdropdownarrow from "../../../images/darkdropdownarrow.svg";
import smallwhite from "../../../images/smallwhite.svg";

const countrys = [
  {
    name: "Albania",
    count: 4,
  },
  {
    name: "United Arab Emirates",
    count: 1,
  },
  {
    name: "Argentina",
    count: 5,
  },
  {
    name: "Australia",
    count: 22,
  },
  {
    name: "Austria Amateur",
    count: 10,
  },
  {
    name: "Azerbaijan",
    count: 5,
  },
  {
    name: "Belgium",
    count: 17,
  },
  {
    name: "Bangladesh",
    count: 3,
  },
  {
    name: "Bulgaria",
    count: 5,
  },
  {
    name: "Bahrain",
    count: 2,
  },
  {
    name: "Belarus",
    count: 7,
  },
  {
    name: "Brazil",
    count: 73,
  },
];

const AllCountry = () => {
  const [isCountryVisible, setIsCountryVisible] = useState(true);

  const toggleCountryVisibility = () => {
    setIsCountryVisible(!isCountryVisible);
  };
  return (
    <>
      <div className="rounded-md bg-teal shadow-dashboardshadow mt-3">
        <div
          className="dropdown-block cursor-pointer flex items-center justify-between rounded-[6px_6px_0px_0px] p-[8px_10px] xl:p-[8px_15px] bg-forestGreen"
          onClick={toggleCountryVisibility}
        >
          <span className="text-white text-sm md:text-base s18:text-lg font-medium !leading-tight s18:leading-normal">
            All countries
          </span>
          <img
            src={darkdropdownarrow}
            alt="dropdown"
            className="w-[15px] xl:w-[19px]"
          />
        </div>
        {isCountryVisible && (
          <div className="country-block">
            {countrys.map((country, index) => (
              <div
                key={index}
                className="cursor-pointer flex justify-between py-2 px-3 s18:p-[10px_14px] border-b-[1px] border-solid border-bordercolor"
              >
                <div className="country-name relative mr-[10px] text-white text-xs xl:text-sm font-medium leading-tight">
                  {country.name}
                  <ul className="dropdown-list">
                    <li className="text-lightwhite text-xs xl:text-sm font-normal block leading-tight  md:!leading-tight s18:leading-tight">
                      {country.dropdownitem}
                    </li>
                  </ul>
                </div>
                <span className="flex items-center text-lightwhite text-xs xl:text-sm font-normal leading-tight">
                  {country.count}
                  <img
                    src={smallwhite}
                    alt="dropdown"
                    className="ml-[6px] xl:ml-3 w-3"
                  />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllCountry;
