import React from "react";
import Casino from "./Casino";
import Layout from "../../layout";
import SportMode from "../../Components/SportMode";

const Casinopage = () => {
  return (
    <>
      <Layout>
        <div className="max-[420px]:pt-[80px] max-md:pt-[65px] md:pt-[75px] xl:pt-[60px] s18:pt-[113px]  bg-darkGreen relative max-sm:pb-[10px] pb-[20px] mt-[-1px]">
          <SportMode />
        </div>
        <Casino />
      </Layout>
    </>
  );
};

export default Casinopage;
