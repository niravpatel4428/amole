import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "home", href: "/home" },
  { label: "sport", href: "/" },
  { label: "live", href: "/" },
  { label: "aviator", href: "/" },
  { label: "games", href: "/" },
  { label: "virtual sport", href: "/" },
  { label: "royal sport", href: "/" },
  { label: "royal win", href: "/" },
  { label: "deposit", href: "/" },
  { label: "check ticket", href: "/" },
  { label: "rules", href: "/" },
  { label: "promotions", href: "/" },
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
              href={item.href}
              className="inline-block whitespace-nowrap text-xs md:text-sm font-normal text-white hover:bg-navHover uppercase py-3 px-2"
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
