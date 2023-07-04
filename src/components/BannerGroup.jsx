import React from "react";
import BannerText from "./BannerText";
import BannerForm from "./BannerForm";

const BannerGroup = () => {
  return (
    <section className="flex flex-grow">
      <BannerText />
      <BannerForm />
    </section>
  );
};

export default BannerGroup;
