import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type props = {
  projectName: string;
  logoPath: string;
  logoAlt: string;
  description: string;
  link: string;
};

const PortfolioCard = ({
  projectName,
  logoPath,
  logoAlt,
  description,
  link,
}: props) => {
  return (
    <Link href={link} target="_blank">
      <div className="relative h-[350px] w-full bg-slate-300 rounded-sm group cursor-pointer overflow-clip">
        <div className="absolute z-10 top-0 h-full w-full flex flex-1 gap-1 items-center justify-center group-hover:opacity-0 transition-all duration-400">
          <div className="rounded-full w-10 h-10 relative p-2">
            <Image
              alt={logoAlt}
              src={logoPath}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h6 className="font-semibold text-slate-500 text-lg">
            {projectName}
          </h6>
        </div>
        <div className="absolute z-20 top-0 h-full w-full flex flex-col items-end justify-between opacity-0 group-hover:opacity-100 transition-all duration-400 ">
          <div className="flex flex-1 justify-end mr-3 mt-3">
            <ArrowUpRight
              className="stroke-[url(#gradient)] fill-transparent transition-all duration-[1000]"
              size={"2rem"}
              strokeWidth={"2px"}
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="40%" stopColor="#ED9182" />
                  <stop offset="100%" stopColor="#82c9ff" />
                </linearGradient>
              </defs>
            </ArrowUpRight>
          </div>
          <div className="h-1/3 px-3 mb-2  flex items-end">
            <p className="text-sm text-slate-600 line-clamp-10">
              {description}
            </p>
          </div>
          <div className="h-3 w-full bg-gradient-to-r from-[#ED9182]  to-[#82c9ff]"></div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
