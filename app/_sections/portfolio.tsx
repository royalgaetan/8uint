import React from "react";
import { DMSerif } from "../layout";
import PortfolioCard from "@/components/global/portfolio_card";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="mx-32 mb-44 mt-24 min-h-[100vh] flex flex-col gap-4 "
    >
      <div className="flex flex-col gap-1 items-center mb-10 w-1/2">
        <h2 className={`${DMSerif.className} text-[#333333] text-6xl mb-3`}>
          We build because we love that.
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-7 ">
        <PortfolioCard
          key={"Vscrape"}
          projectName="Vscrape"
          description="Take automation to the next level: create workflows, scrape the web while you sleep, extract data with AI, and export it in any format."
          link="https://www.vscrape.8uint.com"
          logoPath="/Vscrape logo.png"
          logoAlt="Vscrape logo"
        />
        <PortfolioCard
          key={"Lakissa"}
          projectName="Lakissa"
          description="New generation of CMS: Empower everyone to take opportunities at scale."
          link="https://www.lakissa.8uint.com"
          logoPath="/Lakissa logo.png"
          logoAlt="Lakissa logo"
        />
        <PortfolioCard
          key={"Wesh"}
          projectName="Wesh"
          description="Celebrate and share life's important moments effortlessly with Wesh. Enjoy intelligent reminders, seamless messaging, and captivating stories to keep you connected with your loved ones."
          link="https://www.royalgaetan.com/wesh"
          logoAlt="Wesh logo"
          logoPath="/Wesh logo.png"
        />
      </div>
    </div>
  );
};

export default Portfolio;
