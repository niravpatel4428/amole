import SportMode from "../../Components/SportMode";
import Layout from "../../layout";
import Dashboard from "./Dashboard";
const Homepage = () => {
  return (
    <>
      <Layout>
      <div className="max-[420px]:pt-[80px] max-md:pt-[65px] md:pt-[75px] xl:pt-[60px] s18:pt-[120px] bg-[#F2F4F6] dark:bg-darkGreen relative max-sm:pb-[10px] pb-[20px] mt-[-1px]">
          <SportMode />
        </div>
        <Dashboard />
      </Layout>
    </>
  );
};

export default Homepage;
