import React from "react";
import symbol1 from "../images/symbol1.png";
import symbol2 from "../images/symbol2.png";
import symbol3 from "../images/symbol3.png";
import symbol4 from "../images/symbol4.png";
import symbol5 from "../images/symbol5.png";
import symbol6 from "../images/symbol6.png";
const MobileGames = () => {
  const symbols = [symbol1, symbol2, symbol3, symbol4, symbol5, symbol6];

  return (
    <>
      <ul className="max-md:flex hidden flex-wrap justify-between py-3 px-[15px] md:p-[20px] bg-forestGreen">
        {symbols.map((symbol, index) => (
          <li key={index} className="w-[15%]">
            <img
              src={symbol}
              alt={`symbol-${index + 1}`}
              className="w-full border-solid border-white border-2 rounded-[8px]"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MobileGames;
