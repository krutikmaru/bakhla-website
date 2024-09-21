import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./button";
import { Package } from "@/lib/types";
import clsx from "clsx";

function PackageCardFace({
  data,
  className,
}: {
  data: any;
  className?: string;
}) {
  // CARDFACE_DISPLAY_FIELDS
  const CARDFACE_DISPLAY_FIELDS = [
    { name: "Hotel in Makkah", fieldname: "HOTEL_IN_MAKKAH" },
    { name: "Hotel in Madinah", fieldname: "HOTEL_IN_MADINA" },
    { name: "Flight Departure", fieldname: "FLIGHT_DEPARTURE" },
  ];
  return (
    <div
      className={clsx(
        "group w-[350px] sm:w-[380px] min-h-[500px]  shadow-lg bg-white border-[1px] border-neutral-100 overflow-hidden rounded-[8px] flex flex-col items-start justify-start",
        className
      )}
    >
      <div className="w-full h-[200px] relative overflow-hidden">
        <Image
          src={`data:image/jpeg;base64,${data.Image}`}
          // src={"/images/banners/landing.webp"}
          alt="Image"
          fill
          className="absolute object-cover scale-110 group-hover:scale-100 transition-transform ease-in-out duration-200"
        />
      </div>
      <div className="pt-5 px-7 w-full flex flex-col justify-start items-start">
        <h4 className="scroll-m-20 mb-4 text-xl font-semibold tracking-tight text-bakhla-red">
          {data.NAME}
        </h4>
        <div className="flex flex-col w-full justify-start items-start text-black text-sm space-y-1">
          {CARDFACE_DISPLAY_FIELDS.map((f) => (
            <div
              key={f.fieldname}
              className="w-full flex justify-between items-center "
            >
              <span className="font-semibold">{f.name}</span>
              <span className="text-neutral-600">
                {!data[f.fieldname] ? "NA" : data[f.fieldname]}
              </span>
            </div>
          ))}
        </div>
        <div className="my-4 text-sm text-black font-semibold">
          From{" "}
          <span className="text-bakhla-red">{data["QUIT_I_QUAD"] || "NA"}</span>{" "}
          Per Person
        </div>
        <div className="text-sm text-neutral-600 font-semibold flex items-center">
          <Clock className="mr-2 w-4 h-4" />
          {data["NO_OF_DAYS"]} Days
        </div>
        <div className="py-3 mt-5 border-t-[1px] border-neutral-300 w-full flex justify-between items-center">
          <Link
            href={"#"}
            // href={{
            //   pathname: `/packages/${tourPackage.Pakage_Parent_Group.toLowerCase()}/${
            //     tourPackage.Package_ID
            //   }`,
            //   query: tourPackage,
            // }}
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
