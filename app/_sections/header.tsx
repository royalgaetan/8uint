import React from "react";
import Image from "next/image";
import DescriptionCard from "@/components/global/description_card";
import Link from "next/link";
import { holdingName } from "@/lib/constants";
import { DMSerifText } from "@/lib/fonts";

const HeaderSection = () => {
  return (
    <div className="h-[100vh] w-full bg-white px-4 pt-3 pb-10 max-sm:p-2 max-sm:px-0 max-sm:pt-1">
      <div className="w-full h-full rounded-2xl overflow-hidden relative">
        <div className="absolute z-10 h-full w-auto">
          <video
            controls={false}
            className="object-cover max-lg:h-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/clouds.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute z-20 w-full h-full opacity-80 bg-gradient-to-t from-[#ED9182] from-40% to-[#82c9ff]"></div>
        <div className="absolute z-30 w-full h-full flex flex-col bg-slate-600/10 items-start justify-between py-7 px-7 max-sm:p-3 ">
          {/* Menu */}
          <div className="flex h-auto w-full justify-between items-center">
            <div className="flex flex-1 justify-start items-center">
              <Image
                src={"/8uint logo no-bg.png"}
                alt="8uint logo"
                width={70}
                height={70}
                className="-mr-2"
              />
              <h3 className="font-bold text-lg text-white">{holdingName}</h3>
            </div>
            <Link href={"#contact"}>
              <button className="hover:bg-white hover:text-[#333333] py-2 px-4 text-base text-white font-light rounded-md border-[1px] border-white transition-all duration-[100]">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Content */}
          <div className="flex max-sm:flex-col justify-between gap-5 lg:gap-36 pb-5">
            <div className="ml-5 max-sm:w-[95%] md:w-[60%] w-2/3 flex items-center">
              <h2
                className={`${DMSerifText.className} text-white lg:text-6xl max-sm:text-[2rem]/[1.2] md:text-5xl text-[2.3rem]`}
              >
                Building the next generations of Apps.
              </h2>
            </div>
            <div className="mr-3 w-1/3 lg:w-1/3 max-sm:w-1/2 max-sm:ml-6 ">
              <DescriptionCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
