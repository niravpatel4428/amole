import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CenterImageSlider from "../../../Components/CenterImageSlider";
import MobileGames from "../../../Components/MobileGames";
import Match from "./Match";
const CenterLeague = () => {
  return (
    <>
      <div className="sm:mb-2 md:mb-0">
        <CenterImageSlider />
      </div>
      <>
        <MobileGames />
      </>
      <>
        <Match />
      </>
    </>
  );
};

export default CenterLeague;
