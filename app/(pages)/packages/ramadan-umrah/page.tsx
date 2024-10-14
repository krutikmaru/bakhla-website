"use client";
import { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import ramadan_umrah_data from "./(utils)/data";
import RamadanUmrahCard from "./(components)/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(ramadan_umrah_data);
  const [showFilters, setShowFilters] = useState(false);

  // States for advanced filters
  const [cardId, setCardId] = useState("");
  const [selectedMakkahHotels, setSelectedMakkahHotels] = useState<string[]>(
    []
  );
  const [selectedMadinahHotels, setSelectedMadinahHotels] = useState<string[]>(
    []
  );
  const [duration, setDuration] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500000]);

  const fuse = new Fuse(ramadan_umrah_data, {
    keys: ["title", "hotelMakkah", "hotelMadinah", "eid", "cardId"],
    threshold: 0.3,
  });

  useEffect(() => {
    let results = ramadan_umrah_data;

    if (searchTerm) {
      results = fuse.search(searchTerm).map((result) => result.item);
    }

    if (cardId) {
      results = results.filter((pkg) =>
        pkg.cardId.toLowerCase().includes(cardId.toLowerCase())
      );
    }

    if (selectedMakkahHotels.length > 0) {
      results = results.filter((pkg) =>
        selectedMakkahHotels.includes(pkg.hotelMakkah)
      );
    }

    if (selectedMadinahHotels.length > 0) {
      results = results.filter((pkg) =>
        selectedMadinahHotels.includes(pkg.hotelMadinah)
      );
    }

    if (duration) {
      results = results.filter((pkg) =>
        pkg.duration.toLowerCase().includes(duration.toLowerCase())
      );
    }

    results = results.filter(
      (pkg) =>
        pkg.price_in_number >= priceRange[0] &&
        pkg.price_in_number <= priceRange[1]
    );

    setFilteredData(results);
  }, [
    searchTerm,
    cardId,
    selectedMakkahHotels,
    selectedMadinahHotels,
    duration,
    priceRange,
  ]);

  // Clear all filters
  const clearFilters = () => {
    setCardId("");
    setSelectedMakkahHotels([]);
    setSelectedMadinahHotels([]);
    setDuration("");
    setPriceRange([0, 500000]);
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

  return (
    <div className="mt-20 flex justify-start items-start flex-wrap overflow-visible">
      <div className="w-full h-screen relative">
        <Image
          src={`/images/banners/landing.webp`}
          alt="Banner"
          fill
          className="absolute object-cover"
        />
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
                value={cardId}
                onChange={(e) => setCardId(e.target.value)}
                className="w-full"
              />
            </div>

            <div>
              <h2 className="font-medium mb-2 text-neutral-500">
                Filter by Hotel in Makkah
              </h2>
              {["Snood Ajyad", "Olyan Ajyad Ex-Massa", "Wahat Deafah"].map(
                (hotel) => (
                  <div key={hotel} className="flex items-center space-x-2 mb-2">
                    <Checkbox
                      id="hotel_makkah"
                      checked={selectedMakkahHotels.includes(hotel)}
                      onClick={() =>
                        handleHotelSelection(setSelectedMakkahHotels, hotel)
                      }
                    />
                    <label
                      htmlFor="hotel_makkah"
                      className="text-sm font-medium"
                    >
                      {hotel}
                    </label>
                  </div>
                )
              )}
            </div>

            <div>
              <h2 className="font-medium mb-2 text-neutral-500">
                Filter by Hotel in Madinah
              </h2>
              {["Odst Al Madinah", "Ritz Al Madina", "Karam Al Madina"].map(
                (hotel) => (
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
                )
              )}
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
