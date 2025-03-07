import React from "react";
import { Link } from "react-router-dom";
const SportMode = () => {
  return (
    <div className="bg-white dark:bg-nav">
      <ul className="flex flex-row justify-center items-center gap-4 overflow-x-auto">
        <li className="text-xs md:text-sm font-normal text-[#374151] dark:text-white hover:bg-black/10 dark:hover:bg-navHover uppercase py-3 px-2 first:pl-10 last:pr-10">
          <Link href="/">
           home
          </Link>
           </li>
        <li className="text-xs md:text-sm font-normal text-[#374151] dark:text-white hover:bg-black/10 dark:hover:bg-navHover uppercase py-3 px-2">
          <Link href="/">
           sport
          </Link>
           </li>
        <li className="text-xs md:text-sm font-normal text-[#374151] dark:text-white hover:bg-black/10 dark:hover:bg-navHover uppercase py-3 px-2">
          <Link href="/">
           live
          </Link>
           </li>
        <li className="text-xs md:text-sm font-normal text-[#374151] dark:text-white hover:bg-black/10 dark:hover:bg-navHover uppercase py-3 px-2">
          <Link href="/">
           aviator
          </Link>
           </li>
        <li className="text-xs md:text-sm font-normal text-[#374151] dark:text-white hover:bg-black/10 dark:hover:bg-navHover uppercase py-3 px-2">
          <Link href="/">
           games
          </Link>
           </li>
        <li className="text-xs md:text-sm font-normal text-[#374151] dark:text-white hover:bg-black/10 dark:hover:bg-navHover uppercase py-3 px-2">
          <Link href="/">
           virtual sport
          </Link>
           </li>
        <li className="text-xs md:text-sm font-normal text-[#374151] dark:text-white hover:bg-black/10 dark:hover:bg-navHover uppercase py-3 px-2">
          <Link href="/">
           royal sport
          </Link>
           </li>
        <li className="text-xs md:text-sm font-normal text-[#374151] dark:text-white hover:bg-black/10 dark:hover:bg-navHover uppercase py-3 px-2">
          <Link href="/">
           royal win
          </Link>
           </li>
        <li className="text-xs md:text-sm font-normal text-[#374151] dark:text-white hover:bg-black/10 dark:hover:bg-navHover uppercase py-3 px-2">
          <Link href="/">
           deposit
          </Link>
           </li>
        <li className="text-xs md:text-sm font-normal text-[#374151] dark:text-white hover:bg-black/10 dark:hover:bg-navHover uppercase py-3 px-2">
          <Link href="/">
           check ticket
          </Link>
           </li>
        <li className="text-xs md:text-sm font-normal text-[#374151] dark:text-white hover:bg-black/10 dark:hover:bg-navHover uppercase py-3 px-2">
          <Link href="/">
           rules
          </Link>
           </li>
        <li className="text-xs md:text-sm font-normal text-[#374151] dark:text-white hover:bg-black/10 dark:hover:bg-navHover uppercase py-3 px-2">
          <Link href="/">
           promotions
          </Link>
           </li>
      </ul>
    </div>
  );
};

export default SportMode;
