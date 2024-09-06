import PackageCardFace from "@/components/ui/package-card";
import { packages as allPackages } from "@/lib/data/packages";
import Image from "next/image";
import React from "react";
import axios from "axios";

async function page({ params }: { params: { packageName: string } }) {
  const packageName = params["packageName"];
  let data = null;
  try {
    const res: any = await axios.post(
      "http://127.0.0.1:5000/data/all_packages"
    );
    data = res.data.data;
    console.log("m21", data);
    console.log(data);
  } catch (e) {
    console.log("error", e);
  }

  // return <h1>Meera 4ever</h1>;

  return (
    <div className="pt-32 px-6 sm:px-20 flex justify-center items-start flex-wrap">
      <div className="w-full h-[500px] mb-10 bg-neutral-100 rounded-md overflow-hidden relative">
        <Image
          className="absolute object-cover"
          fill
          src={"/images/banners/landing.webp"}
          alt="Banner"
        />
        <div className="w-full h-full absolute bg-gradient-to-b from-transparent to-black flex justify-center items-center ">
          <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl text-white">
            Ramadan
          </h1>
        </div>
      </div>
      {data.map((p: any) => {
        console.log("data", p);
        return (
          <PackageCardFace
            className="mr-3 mb-5"
            key={p.Package_ID}
            tourPackage={p}
          />
        );
      })}
    </div>
  );
}

export default page;
