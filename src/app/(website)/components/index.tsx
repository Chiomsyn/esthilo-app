import React from "react";
import Onboarding from "./onboarding";
import Services from "./services";
import Featured from "./featured";
import TopSelling from "./top-selling";
import CustomerSays from "./customer-says";

const Home = () => {
  return (
    <div>
      <Onboarding />
      <Services />
      <TopSelling />
      {/* <Explore />
      <Category /> */}
      <Featured />
      <CustomerSays />
    </div>
  );
};

export default Home;
