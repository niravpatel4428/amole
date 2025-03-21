import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SportMode from "./Components/SportMode";
import DepositStrip from "./Components/DepositStrip";

const layout = ({ children }) => {
  return (
    <>
      <DepositStrip />
      <Header />
      <div className="bg-darkGreen sticky max-[420px]:top-12 top-12 md:top-[73px] lg:top-[76px] xl:top-[68px] s16:top-[78px] s18:top-[79px] z-40 ">
        <SportMode />
      </div>
      <main className="max-sm:pt-0 pt-[20px]">{children}</main>
      <Footer />
    </>
  );
};

export default layout;
