// "use client"
// import PackageCardFace from "@/components/ui/package-card";
// import { packages as allPackages } from "@/lib/data/packages";
// import Image from "next/image";
// import React, { useState } from "react";
// import axios from "axios";
// import mappings from "./package-api-mappings";
// import { redirect } from "next/navigation";
// import filters, { renderFilters } from "./filters";
// import { useSearchParams } from 'next/navigation'

// function Page() {
//   const searchParams = useSearchParams()
//   const packageName = searchParams.get('packageName')?.toLowerCase();
//   const [data, setData] = useState();

//   if (!packageName) redirect("/");

//   let api: any;
//   let packageFilters: any;

//   if (packageName in mappings) {
//     api = mappings[packageName as keyof typeof mappings];
//     packageFilters = filters[packageName as keyof typeof filters];
//     console.log(packageFilters);
//   } else {
//     redirect("/");
//   }

//   try {
//     const res: any = await axios.post(api["*"]);
//     data = res.data;
//     data = cleanData(data);
//     console.log("meera", data);
//     // Use promise.all for get_images here
//   } catch (e) {
//     console.log("error", e);
//   }

//   // return <h1>Test</h1>;

//   return (
//     <div className="pt-32 px-6 sm:px-20 flex justify-center items-start flex-wrap">
//       <div className="w-full h-[500px] mb-10 bg-neutral-100 rounded-md overflow-hidden relative">
//         <Image
//           className="absolute object-cover"
//           fill
//           src={"/images/banners/landing.webp"}
//           alt="Banner"
//         />
//         <div className="w-full h-full absolute bg-gradient-to-b from-transparent to-black flex justify-center items-center ">
//           <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl text-white">
//             {packageName}
//           </h1>
//         </div>
//       </div>
//       {renderFilters(packageFilters)}
//       {data.map((p: any) => {
//         return <PackageCardFace className="mr-3 mb-5" key={p.id} data={p} />;
//       })}
//     </div>
//   );
// }

// export default Page;

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
