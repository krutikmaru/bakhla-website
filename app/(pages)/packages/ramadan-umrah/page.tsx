"use client";
import { useState, useEffect } from "react";
// import Fuse from 'fuse.js'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import React from "react";
import ramadan_umrah_data from "./(utils)/data";
import RamadanUmrahCard from "./(components)/card";

function Page() {
  const tourDetails = [
    { label: "Mouallim No", value: "Category-D" },
    { label: "Makkah Hotel", value: "Swood Ajyad" },
    { label: "Madinah Hotel", value: "Ritz Al Madinah" },
    { label: "Flight Departure", value: "BOM | Saudi Airlines" },
  ];
  return (
    <div className="mt-20 flex justify-start items-start flex-wrap overflow-visible">
      <div className="w-full h-screen  relative">
        <Image
          src={`/images/banners/landing.webp`}
          alt="Banner"
          fill
          className="absolute object-cover"
        />
      </div>
      <div className="w-full px-6 sm:px-20 py-10 flex flex-col justify-start items-start space-y-5 overflow-visible">
        <h1 className="text-3xl font-bold text-center mb-8">
          Ramadan Umrah Packages 2024
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ramadan_umrah_data.map((p, index) => (
            <RamadanUmrahCard
              key={index}
              image={p.image}
              title={p.title}
              hotelMakkah={p.hotelMakkah}
              hotelMadinah={p.hotelMadinah}
              eid={p.eid}
              price={p.price}
              duration={p.duration}
              cardId={p.cardId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
