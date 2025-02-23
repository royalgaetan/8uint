import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

type props = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

const ProcessCard = ({ title, subtitle, icon }: props) => {
  const Icon = icon;
  return (
    <div className="flex flex-col gap-2 group cursor-pointer mr-2">
      <div>
        <Icon
          className={cn(
            "group-hover:stroke-[url(#gradient)] text-white fill-transparent transition-all duration-700 icon-gradient"
          )}
          size={"2rem"}
          strokeWidth={"1px"}
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="40%" stopColor="#ED9182" />
              <stop offset="100%" stopColor="#82c9ff" />
            </linearGradient>
          </defs>
        </Icon>
      </div>
      <h6 className="text-white font-normal group-hover:font-semibold transition-all duration-700 tracking-wide text-sm">
        {title}
      </h6>
      <p className="text-white font-thin tracking-wide text-xs">{subtitle}</p>
    </div>
  );
};

export default ProcessCard;
