import React from "react";
import {
  ChartSpline,
  CircleCheck,
  CircleCheckBig,
  CogIcon,
  Grid2X2Check,
  LightbulbIcon,
} from "lucide-react";
import ProcessCard from "@/components/global/process_card";
import { DMSerifText } from "@/lib/fonts";

const OurProcess = () => {
  return (
    <div className="relative rounded-2xl overflow-clip mx-4 my-8 max-md:mx-0 bg-[#333333]">
      <div className="absolute z-10 -top-20 -right-20">
        <Grid2X2Check className="text-[#4f4f4f]/20  rotate-45" size={"30rem"} />
      </div>
      <div className="absolute z-10 -bottom-44 -left-44">
        <CircleCheckBig
          className="text-[#4f4f4f]/20  rotate-45"
          size={"20rem"}
        />
      </div>
      <div className="relative z-20 top-0 right-0 h-fit w-auto px-7 md:px-0 py-24 flex flex-1 max-md:flex-col gap-14 lg:gap-24 md:gap-24 justify-center items-start max-md:items-center">
        <div className="flex flex-col gap-1 lg:items-start items-center w-1/3 md:w-[20%] max-md:w-full">
          <h2
            className={`${DMSerifText.className} text-white text-6xl mb-3 md:text-5xl lg:text-start text-center `}
          >
            Our Process
          </h2>
          <hr className="h-3 w-36 bg-white" />
        </div>
        <div className="max-sm:w-full w-[50%] lg:w-1/3 max-md:w-2/3 grid grid-cols-2 gap-7">
          <ProcessCard
            title="Hypothesis"
            subtitle="We define the problems we aim to solve and engage with potential customers from day-1"
            icon={LightbulbIcon}
          />
          <ProcessCard
            title="Validation & Prototyping"
            subtitle="We validate the identified problems with our target audience and start developing an MVP (or MVF: Minimal Viable Feature Set)."
            icon={CircleCheck}
          />
          <ProcessCard
            title="Continuous Development"
            subtitle="We maintain constant communication with our audience, refining the product based on their feedback and input."
            icon={CogIcon}
          />
          <ProcessCard
            title="Scaling"
            subtitle="Once the market and problems are validated, we scale and introduce new features based on evolving customer needs."
            icon={ChartSpline}
          />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
