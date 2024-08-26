import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { hotels } from "@/lib/data/makkah-hotels";
import HotelTab from "./hotel-tab";

function MakkahTab() {
  return (
    <TabsContent
      value="makkah"
      className="border-[1px] border-neutral-200 p-5 md:p-10 rounded-md mt-5"
    >
      <Tabs defaultValue={hotels[0].value}>
        <TabsList className="flex flex-col  p-2 space-y-4 mx-auto md:flex-row w-fit md:space-y-0  md:mx-0">
          {hotels.map((hotel) => (
            <TabsTrigger
              className="w-full md:w-fit"
              key={hotel.name}
              value={hotel.value}
            >
              {hotel.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {hotels.map((hotel) => (
          <HotelTab key={hotel.value} hotel={hotel} />
        ))}
      </Tabs>
    </TabsContent>
  );
}

export default MakkahTab;
