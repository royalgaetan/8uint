import React from "react";
import { Star } from "lucide-react";

const DescriptionCard = () => {
  return (
    <div className="w-auto h-full bg-white/30 p-5">
      <div>
        <Star
          className="hover:fill-white fill-transparent transition-all duration-[1000]"
          color="white"
          size={"2rem"}
          strokeWidth={"1px"}
        />
      </div>
      <div className="mt-3 text-sm text-white">
        We design and build world-class apps that empower each individual to{" "}
        <b>do more</b> with <b>less effort</b>
      </div>
    </div>
  );
};

export default DescriptionCard;
