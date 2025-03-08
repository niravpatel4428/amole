import React from "react";
import Layout from "../../layout";
import Transaction from "./Transaction";
import Slidersection from "../HomePage/Slider";
import SportMode from "../../Components/SportMode";

const Transactionpage = () => {
  return (
    <>
      <Layout>
        <div className="max-[420px]:pt-[80px] max-md:pt-[65px] md:pt-[75px] xl:pt-[60px] s18:pt-[113px] bg-darkGreen relative max-sm:pb-[10px] pb-[20px] mt-[-1px]">
          <SportMode />
        </div>
        <Transaction />
      </Layout>
    </>
  );
};

export default Transactionpage;
