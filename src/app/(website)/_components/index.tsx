import React from "react";
import Onboarding from "./onboarding";
import Services from "./services";
import Featured from "./featured";
import TopSelling from "./top-selling";
import CustomerSays from "./customer-says";
import ContactForm from "./contact-form";

const Home = () => {
  return (
    <div>
      <Onboarding />
      <Services />
      <TopSelling />
      {/* <Explore />
      <Category /> */}
      <Featured />
      <ContactForm />
      {/* <CustomerSays /> */}
    </div>
  );
};

export default Home;
