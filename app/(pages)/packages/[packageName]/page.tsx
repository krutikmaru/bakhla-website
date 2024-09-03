import PackageCardFace from "@/components/ui/package-card";
import { packages as allPackages } from "@/lib/data/packages";
import Image from "next/image";
import React from "react";

function page({ params }: { params: { packageName: string } }) {
  const packageName = params["packageName"];
  const packages = allPackages.filter((p) => p.name === packageName);

  return (
    <div className="pt-32 px-6 sm:px-20 flex justify-center items-start flex-wrap">
      <div className="w-full h-[500px] mb-10 bg-neutral-100 rounded-md overflow-hidden relative">
        <Image
          className="absolute object-cover"
          fill
          src={packages[0].image}
          alt="Banner"
        />
        <div className="w-full h-full absolute bg-gradient-to-b from-transparent to-black flex justify-center items-center ">
          <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl text-white">
            Ramadan
          </h1>
        </div>
      </div>
      {packages.map((p) => {
        return (
          <PackageCardFace className="mr-3 mb-5" key={p.id} tourPackage={p} />
        );
      })}
    </div>
  );
}

export default page;
