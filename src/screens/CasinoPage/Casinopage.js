import React from "react";
import Casino from "./Casino";
import Layout from "../../layout";
import SportMode from "../../Components/SportMode";
import LoadingPopup from "./LoadingPopup";

const Casinopage = () => {
  return (
    <>
      <Layout>
        <LoadingPopup />
        <Casino />
      </Layout>
    </>
  );
};

export default Casinopage;
