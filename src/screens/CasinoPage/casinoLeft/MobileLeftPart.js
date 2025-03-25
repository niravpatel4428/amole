import React, { useState } from "react";
import { Link } from "react-router-dom";
import fire from "../../../images/fire.svg";
import crash from "../../../images/crash.svg";
import virtuals from "../../../images/virtuals.svg";
import lite from "../../../images/lite.svg";
import drops from "../../../images/drops.svg";
import slots from "../../../images/slots.svg";
import table from "../../../images/table.svg";
import live from "../../../images/live.svg";
import split from "../../../images/split.svg";
import spribe from "../../../images/spribe.svg";
import elbet from "../../../images/elbet.svg";
import pragmetic from "../../../images/pragmetic.svg";
import imoon from "../../../images/imoon.svg";
import golden from "../../../images/golden.svg";
import aviatrix from "../../../images/aviatrix.svg";
import evolution from "../../../images/evolution.svg";
import smartsoft from "../../../images/smartsoft.svg";
import kaya from "../../../images/kaya.svg";
import spinmatic from "../../../images/spinmatic.svg";
const MobileLeftPart = () => {
  return (
    <>
      <div className="block md:hidden bg-[#0a3b3a] py-1 mt-[-10px]">
        <div className="flex gap-2 scrollable">
          {categories.map((category) => (
            <Link
              to={category.linktext}
              key={category.id}
              className="rounded bg-transparent hover:bg-[#0F5149] p-[4px_6px] s15:p-[8px_10px] s18:p-[10px] transition-all duration-300 group"
            >
              <div className="flex flex-col items-center gap-2">
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
                  {category.name.length > 6
                    ? `${category.name.slice(0, 6)}...`
                    : category.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileLeftPart;

const categories = [
  { id: 1, linktext: "/", name: "New", image: fire, count: null },
  { id: 2, linktext: "/", name: "Crash", image: crash, count: 28 },
  { id: 3, linktext: "/", name: "Virtuals", image: virtuals, count: 10 },
  { id: 4, linktext: "/", name: "Lite", image: lite, count: 14 },
  { id: 5, linktext: "/", name: "Drops and …", image: drops, count: 3 },
  { id: 6, linktext: "/", name: "Slots", image: slots, count: 310 },
  { id: 7, linktext: "/", name: "Table/Cards", image: table, count: 12 },
  { id: 8, linktext: "/", name: "Live", image: live, count: 164 },
  { id: 10, linktext: "/", name: "Split The Pot", image: split, count: 54 },
  { id: 11, linktext: "/", name: "Spribe", image: spribe, count: 78 },
  { id: 12, linktext: "/", name: "Elbet", image: elbet, count: 95 },
  {
    id: 13,
    linktext: "/",
    name: "Pragmatic Play",
    image: pragmetic,
    count: 125,
  },
  { id: 14, linktext: "/", name: "iMoon", image: imoon, count: 75 },
  { id: 15, linktext: "/", name: "Golden Race", image: golden, count: 12 },
  { id: 16, linktext: "/", name: "Aviatrix", image: aviatrix, count: 36 },
  { id: 17, linktext: "/", name: "Evolution", image: evolution, count: 28 },
  { id: 18, linktext: "/", name: "Smartsoft", image: smartsoft, count: 76 },
  { id: 20, linktext: "/", name: "Kaya", image: kaya, count: 110 },
  { id: 21, linktext: "/", name: "Spinmatic", image: spinmatic, count: 63 },
];
