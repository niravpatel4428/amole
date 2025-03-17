import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "home", innerLinks: "/home" },
  { label: "sport", innerLinks: "/" },
  { label: "live", innerLinks: "/" },
  { label: "aviator", innerLinks: "/" },
  { label: "games", innerLinks: "/" },
  { label: "virtual sport", innerLinks: "/" },
  { label: "royal sport", innerLinks: "/" },
  { label: "royal win", innerLinks: "/" },
  { label: "deposit", innerLinks: "/" },
  { label: "check ticket", innerLinks: "/" },
  { label: "rules", innerLinks: "/" },
  { label: "promotions", innerLinks: "/" },
];

const SportMode = () => {
  return (
    <div className="bg-nav">
      <ul className="flex flex-row max-lg:justify-start justify-center items-center gap-4 overflow-x-auto scrollable">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`${index === 0 ? "first:pl-2" : ""} ${
              index === navItems.length - 1 ? "last:pr-2" : ""
            }`}
          >
            <Link
              to={item.innerLinks}
              className="inline-block whitespace-nowrap text-xs md:text-sm font-normal text-white hover:bg-navHover uppercase py-2 md:py-3 px-2"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SportMode;
