"use client";
import { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider"; // Assuming you have a slider component
import ramadan_umrah_data from "../(utils)/data";
import RamadanUmrahCard from "./card";
import Link from "next/link";
import { FileText } from "lucide-react";

function Main({ showPrices }: { showPrices: boolean }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(ramadan_umrah_data);
  const [showFilters, setShowFilters] = useState(false);

  // States for advanced filters
  const [packageId, setPackageId] = useState("");
  const [selectedMakkahHotels, setSelectedMakkahHotels] = useState<string[]>(
    []
  );
  const [selectedMadinahHotels, setSelectedMadinahHotels] = useState<string[]>(
    []
  );
  const [duration, setDuration] = useState("");
  const [maxPrice, setMaxPrice] = useState(500000);

  const fuse = new Fuse(ramadan_umrah_data, {
    keys: [
      "title",
      "hotel_makkah",
      "hotel_madinah",
      "eid",
      "package_id",
      "duration",
      "html_introduction",
    ],
    threshold: 0.5,
  });

  const uniqueMakkahHotels = Array.from(
    new Set(ramadan_umrah_data.map((pkg) => pkg.hotel_makkah))
  );
  const uniqueMadinahHotels = Array.from(
    new Set(ramadan_umrah_data.map((pkg) => pkg.hotel_madinah))
  );

  useEffect(() => {
    let results = ramadan_umrah_data;

    if (searchTerm) {
      results = fuse.search(searchTerm).map((result) => result.item);
    }

    if (packageId) {
      results = results.filter((pkg) =>
        pkg.package_id.toLowerCase().includes(packageId.toLowerCase())
      );
    }

    if (selectedMakkahHotels.length > 0) {
      results = results.filter((pkg) =>
        selectedMakkahHotels.includes(pkg.hotel_makkah)
      );
    }

    if (selectedMadinahHotels.length > 0) {
      results = results.filter((pkg) =>
        selectedMadinahHotels.includes(pkg.hotel_madinah)
      );
    }

    if (duration) {
      results = results.filter((pkg) =>
        pkg.duration.toLowerCase().includes(duration.toLowerCase())
      );
    }

    results = results.filter((pkg) => pkg.price_in_number <= maxPrice);

    setFilteredData(results);
  }, [
    searchTerm,
    packageId,
    selectedMakkahHotels,
    selectedMadinahHotels,
    duration,
    maxPrice,
  ]);

  // Clear all filters
  const clearFilters = () => {
    setPackageId("");
    setSelectedMakkahHotels([]);
    setSelectedMadinahHotels([]);
    setDuration("");
    setMaxPrice(500000);
    setSearchTerm("");
  };

  const handleHotelSelection = (
    setSelectedHotels: (fn: (prev: string[]) => string[]) => void,
    hotelName: string
  ) => {
    setSelectedHotels((prev: string[]) =>
      prev.includes(hotelName)
        ? prev.filter((hotel) => hotel !== hotelName)
        : [...prev, hotelName]
    );
  };

  // Handle slider value change
  const handleMaxPriceChange = (newMax: number[]) => {
    setMaxPrice(newMax[0]);
  };

  return (
    <div className="mt-20 flex justify-start items-start flex-wrap overflow-visible">
      <div className="w-full h-screen relative">
        <Image
          src={`/images/banners/ramadan-umrah.webp`}
          alt="Banner"
          fill
          className="absolute object-cover"
        />
        <Link
          href="/pdfs/ramadan-umrah.pdf"
          className="absolute bottom-12 left-12 bg-bakhla-red/50 backdrop-blur-md p-4 rounded-full hover:bg-opacity-80 transition-opacity"
        >
          <FileText className="text-white" />
        </Link>
      </div>

      <div className="w-full px-6 sm:px-20 py-10 flex flex-col justify-start items-start space-y-5 overflow-visible">
        <div className="w-full flex justify-between items-center mb-4">
          <Input
            type="text"
            placeholder="Search packages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-2/3"
          />
          <div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
            >
              Advanced Filters
            </Button>
            <Button variant="ghost" onClick={clearFilters}>
              Clear All Filters
            </Button>
          </div>
        </div>

        {showFilters && (
          <div className="w-full space-y-5 mb-5 border p-5 rounded-md">
            <div>
              <Label htmlFor="id" className="text-neutral-500">
                Package ID
              </Label>
              <Input
                type="text"
                placeholder="Search by Package ID"
                value={packageId}
                onChange={(e) => setPackageId(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <h2 className="font-medium mb-2 text-neutral-500">
                Filter by Hotel in Makkah
              </h2>
              {uniqueMakkahHotels.map((hotel) => (
                <div key={hotel} className="flex items-center space-x-2 mb-2">
                  <Checkbox
                    id="hotel_makkah"
                    checked={selectedMakkahHotels.includes(hotel)}
                    onClick={() =>
                      handleHotelSelection(setSelectedMakkahHotels, hotel)
                    }
                  />
                  <label htmlFor="hotel_makkah" className="text-sm font-medium">
                    {hotel}
                  </label>
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-medium mb-2 text-neutral-500">
                Filter by Hotel in Madinah
              </h2>
              {uniqueMadinahHotels.map((hotel) => (
                <div key={hotel} className="flex items-center space-x-2 mb-2">
                  <Checkbox
                    id="hotel_madinah"
                    checked={selectedMadinahHotels.includes(hotel)}
                    onClick={() =>
                      handleHotelSelection(setSelectedMadinahHotels, hotel)
                    }
                  />
                  <label
                    htmlFor="hotel_madinah"
                    className="text-sm font-medium"
                  >
                    {hotel}
                  </label>
                </div>
              ))}
            </div>

            <div>
              <Label htmlFor="id" className="text-neutral-500">
                Duration
              </Label>
              <Input
                type="text"
                placeholder="Search by Duration (e.g., 15 Days, Full Month)"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full"
              />
            </div>

            {showPrices && (
              <div>
                <h2 className="font-medium mb-2 text-neutral-500">
                  Price Range
                </h2>
                <div className="w-full">
                  <Label htmlFor="max_price" className="text-neutral-500 ">
                    Max Price: ₹{maxPrice}
                  </Label>
                  <Slider
                    id="max_price"
                    className="mt-2"
                    min={0}
                    max={500000}
                    step={10000}
                    value={[maxPrice]}
                    onValueChange={handleMaxPriceChange}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        <p className="text-sm font-medium mb-4">
          {filteredData.length} Results found
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((p, index) => (
            <RamadanUmrahCard
              key={index}
              image={p.image}
              title={p.title}
              hotelMakkah={p.hotel_makkah}
              hotelMadinah={p.hotel_madinah}
              eid={p.eid}
              price={p.price}
              duration={p.duration}
              cardId={p.package_id}
              showPrices={showPrices}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
