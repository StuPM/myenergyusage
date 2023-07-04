import React from "react";

const BannerText = () => {
  return (
    <>
      <section className="w-3/6 bg-gray-900 text-white flex">
        <div className="flex flex-col ">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Want to compare your usage to mine?
          </h1>
          <p>
            See whos using more and identify where you might be able to cut back
            or change things.
          </p>
          <p>
            If your with Octopus Energy, then enter your account details from
            the webpage here in the next section and your data will automatilly
            appear.
          </p>

          <p className="">
            If your not with Octopus Energy, then no problem, you can see how
            much my family uses in the graphs below.
          </p>
        </div>
      </section>
    </>
  );
};

export default BannerText;
