"use client";
import PackageCardFace from "@/components/ui/package-card";
import { packages as allPackages } from "@/lib/data/packages";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import mappings from "./package-api-mappings";
import { redirect, useParams } from "next/navigation";
import filters, { renderFilters } from "./filters";
import Loading from "./loading";
import { capitalizeWords } from "@/lib/utils";

function Page() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [settings, setSettings] = useState([]);
  const [filtersArray, setFiltersArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const packageName = params.packageName as string;
  console.log("Alex", packageName);

  if (!packageName) redirect("/");

  let api: any;
  let packageFilters: any;

  if (packageName in mappings) {
    api = mappings[packageName as keyof typeof mappings];
    packageFilters = filters[packageName as keyof typeof filters];
  } else {
    redirect("/");
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const res_settings = await axios.post(api["static"]);
        const res: any = await axios.post(api["*"]);
        setSettings(res_settings.data[0]);
        setData(res.data);
        console.log(res.data);
        console.log(res_settings);
        setLoading(false);
      } catch (e) {
        console.log("error", e);
      }
    }
    fetchData();
  }, [api]);

  if (loading) {
    return <Loading />;
  }

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
            {capitalizeWords(packageName)}
          </h1>
        </div>
      </div>
      {renderFilters(packageFilters, filtersArray, setFiltersArray)}
      {getFilteredData(data, filtersArray).length === 0 && <h1>No results</h1>}
      {getFilteredData(data, filtersArray).map((p: any) => {
        return (
          <PackageCardFace
            className="mr-3 mb-5"
            key={p.id}
            data={p}
            settings={settings}
            name={packageName}
          />
        );
      })}
    </div>
  );
}

export default Page;

function getFilteredData(data: any, filters: any) {
  let dataCopy = JSON.parse(JSON.stringify(data));
  filters.map((f: any) => {
    if (f.type === "equals") {
      dataCopy = dataCopy.filter((dc: any) => dc[f.fieldname] === f.value);
    }
    if (f.type === "range") {
      const range = f.value;
      dataCopy = dataCopy.filter((dc: any) => {
        if (range.to === "*") {
          return dc[f.fieldname] >= range.from;
        } else {
          return dc[f.fieldname] >= range.from && dc[f.fieldname] < range.to;
        }
      });
    }
  });
  return dataCopy;
}

// function cleanData(data: any) {
//   let cleanedData: any;
//   cleanedData = data.map((cd: any) => {
//     const deepCopy = JSON.parse(JSON.stringify(cd));
//     for (const [key, value] of Object.entries(deepCopy)) {
//       if (key === "Image") {
//         const blob = deepCopy["Image"][0]["blob"];
//         deepCopy["Image"] = blob;
//         continue;
//       }
//       if (
//         typeof deepCopy[key] !== "string" &&
//         typeof deepCopy[key] !== "number" &&
//         deepCopy[key] !== null
//       ) {
//         if (
//           deepCopy[key]!.hasOwnProperty("id") &&
//           deepCopy[key]!.hasOwnProperty("name")
//         ) {
//           deepCopy[key] = deepCopy[key].name;
//         }
//       }
//     }
//     return deepCopy;
//   });
//   return cleanedData;
// }
