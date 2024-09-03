import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { Package } from "@/lib/types";
import clsx from "clsx";

function PackageCardFace({
  tourPackage,
  className,
}: {
  tourPackage: Package;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "group w-[350px] sm:w-[380px] min-h-[500px]  shadow-lg bg-white border-[1px] border-neutral-100 overflow-hidden rounded-[8px] flex flex-col items-start justify-start",
        className
      )}
    >
      <div className="w-full h-[200px] relative overflow-hidden">
        <Image
          src={tourPackage.image}
          alt="Image"
          fill
          className="absolute object-cover scale-110 group-hover:scale-100 transition-transform ease-in-out duration-200"
        />
      </div>
      <div className="pt-5 px-7 flex flex-col justify-start items-start">
        <h4 className="scroll-m-20 mb-4 text-xl font-semibold tracking-tight text-bakhla-red">
          {tourPackage.displayTitle}
        </h4>
        <div className="flex flex-col w-full justify-start items-start text-black text-sm space-y-1">
          <div className="w-full flex justify-between items-center ">
            <span className="font-semibold">Mouallim No.</span>
            <span className="text-neutral-600">{tourPackage.mouallim}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="font-semibold">Makkah Hotel</span>
            <span className="text-neutral-600">{tourPackage.hotelMakkah}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="font-semibold">Madinah Hotel</span>
            <span className="text-neutral-600">{tourPackage.hotelMadinah}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="font-semibold">Flight Departure</span>
            <span className="text-neutral-600">{tourPackage.departure}</span>
          </div>
        </div>
        <div className="my-4 text-sm text-black font-semibold">
          From{" "}
          <span className="text-bakhla-red">{tourPackage.priceFormatted}</span>{" "}
          Per Person
        </div>
        <div className="text-sm text-neutral-600 font-semibold flex items-center">
          <Clock className="mr-2 w-4 h-4" />
          13 Days
        </div>
        <div className="py-3 mt-5 border-t-[1px] border-neutral-300 w-full flex justify-between items-center">
          <Link
            href={`/packages/${tourPackage.name}/${tourPackage.id}`}
            className="text-bakhla-red"
          >
            Read More
          </Link>
          <Button className="bg-bakhla-red hover:bg-bakhla-red/90">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PackageCardFace;
