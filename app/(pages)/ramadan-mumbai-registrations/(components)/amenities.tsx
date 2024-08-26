import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import amenities from "@/lib/data/amenities";
import { Amenity } from "@/lib/types";

function Amenities() {
  return (
    <div className="px-24 py-6">
      {/* Inclusions */}
      <div>
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          Inclusions
        </h2>
        <div className="flex items-start justify-center flex-wrap mt-5">
          {amenities
            .filter((amenity) => amenity.type === "inclusion")
            .map((amenity) => (
              <Icon key={amenity.title} amenity={amenity} />
            ))}
        </div>
      </div>
      {/* Exclusions */}
      <div>
        <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
          Exclusions
        </h2>
        <div className="flex items-start justify-center flex-wrap mt-5">
          {amenities
            .filter((amenity) => amenity.type === "exclusion")
            .map((amenity) => (
              <Icon key={amenity.title} amenity={amenity} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Amenities;

function Icon({ amenity }: { amenity: Amenity }) {
  return (
    <div className="w-[150px] mb-5 sm:mb-0 flex flex-col justify-center items-center">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <Image
              src={amenity.icon}
              width={100}
              height={100}
              alt={amenity.title}
            />
          </TooltipTrigger>
          <TooltipContent className="w-[200px] text-center ">
            <p>{amenity.description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <span className="font-semibold text-bakhla-red text-center">
        {amenity.title}
      </span>
    </div>
  );
}
