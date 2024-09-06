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
  tourPackage: any;
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
          src={"/images/banners/landing.webp"}
          alt="Image"
          fill
          className="absolute object-cover scale-110 group-hover:scale-100 transition-transform ease-in-out duration-200"
        />
      </div>
      <div className="pt-5 px-7 flex flex-col justify-start items-start">
        <h4 className="scroll-m-20 mb-4 text-xl font-semibold tracking-tight text-bakhla-red">
          {tourPackage.Name}
        </h4>
        <div className="flex flex-col w-full justify-start items-start text-black text-sm space-y-1">
          <div className="w-full flex justify-between items-center ">
            <span className="font-semibold">Mouallim No.</span>
            <span className="text-neutral-600">{tourPackage.Mouallim_No}</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="font-semibold">Makkah Hotel</span>
            <span className="text-neutral-600">
              {tourPackage.HOTEL_MAKKAH.name}
            </span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="font-semibold">Madinah Hotel</span>
            <span className="text-neutral-600">
              {tourPackage.Hotel_in_Madinah.name}
            </span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="font-semibold">Flight Departure</span>
            <span className="text-neutral-600">
              {tourPackage.Flight_Departure}
            </span>
          </div>
        </div>
        <div className="my-4 text-sm text-black font-semibold">
          From <span className="text-bakhla-red">{tourPackage.Quint}</span> Per
          Person
        </div>
        <div className="text-sm text-neutral-600 font-semibold flex items-center">
          <Clock className="mr-2 w-4 h-4" />
          {tourPackage.Duration_in_Days} Days
        </div>
        <div className="py-3 mt-5 border-t-[1px] border-neutral-300 w-full flex justify-between items-center">
          <Link
            href={{
              pathname: `/packages/${tourPackage.Pakage_Parent_Group.toLowerCase()}/${
                tourPackage.Package_ID
              }`,
              query: tourPackage,
            }}
            // href={`/packages/${tourPackage.Pakage_Parent_Group.toLowerCase()}/${
            //   tourPackage.Package_ID
            // }`}
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
