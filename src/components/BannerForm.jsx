import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectGetStarted } from "../features/octopus/octopusSlice";

const BannerForm = () => {
  const getStartedFormComponents = useSelector(selectGetStarted);

  const [yourAPIDetails, setYourAPIDetails] = useState([]);

  const setDetailsOnInput = (e) => {
    setYourAPIDetails({ ...yourAPIDetails, [e.target.id]: e.target.value });
    console.log(yourAPIDetails);
  };

  return (
    <>
      <section id="GetStarted" className="flex flex-wrap w-3/6">
        {/* <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24"> */}
        <div className="mx-auto text-center">
          <p className="mt-4 text-gray-500">
            Enter your account credientals and meter details below.
          </p>
          <p>
            These can be found{" "}
            <a href="https://octopus.energy/dashboard/new/accounts/personal-details/api-access">
              here
            </a>
            .
          </p>
        </div>

        <form action="" className="w-10/12 mx-auto" onInput={setDetailsOnInput}>
          {getStartedFormComponents.map((element) => (
            <div key={element.label}>
              <label htmlFor={element.label} className="sr-only">
                {element.label}
              </label>

              <div className="relative">
                <input
                  id={element.label}
                  type={element.type}
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder={element.text}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </form>
        {/* </div> */}
      </section>
    </>
  );
};

export default BannerForm;
