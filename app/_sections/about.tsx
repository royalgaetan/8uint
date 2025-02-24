import { DMSerifText } from "@/lib/fonts";
import React from "react";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="min-h-[100vh] w-full bg-white flex flex-col text-center items-center justify-start pt-28 pb-11 px-10 max-sm:mt-14 max-sm:mb-24"
    >
      <div className=" w-[min(100%,600px)] h-auto">
        <div className="flex flex-col gap-1 items-center mb-10">
          <h2
            className={`${DMSerifText.className} text-[#333333] text-6xl mb-3`}
          >
            Who are we?
          </h2>
          <hr className="h-3 w-64 bg-gradient-to-r from-[#ED9182]  to-[#82c9ff]" />
        </div>
        <div className="text-lg max-md:text-base font-thin tracking-wider">
          <p>
            We are individuals who master code, design, and human psychology,
            adopting velocity as a principle to deliver magic into the hands of
            the customers and users we serve.
          </p>
          <br />
          <p>
            Our long-term mission is to reduce the time it takes for individuals
            to accomplish tasks and create amazing things.
          </p>
        </div>
        <p className="italic text-[#333333] mt-5">
          &quot;The future is written in the code.&quot;
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
