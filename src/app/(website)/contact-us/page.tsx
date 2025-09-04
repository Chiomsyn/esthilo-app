import React from "react";
import Hero from "./_components/hero";
import ContactForm from "./_components/contact-form";
import GoogleMap from "./_components/google-map";

const page = () => {
  return (
    <>
      <Hero />
      <ContactForm />
      <GoogleMap />
    </>
  );
};

export default page;
