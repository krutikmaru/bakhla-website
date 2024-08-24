import { TabsContent } from "@/components/ui/tabs";
import { Hotel } from "@/lib/types";
import { Map, MapPin } from "lucide-react";
import React from "react";
import Media from "./media";

type HotelTabProps = {
  hotel: Hotel;
};
function HotelTab({ hotel }: HotelTabProps) {
  return (
    <TabsContent value={hotel.value} className="mt-5">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {hotel.name}
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-2">
        {hotel.description}
      </p>
      <div className="mt-5 flex space-x-2 ">
        <span className="font-semibold flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          Location:
        </span>
        <span>{hotel.location}</span>
      </div>
      <div className="mt-2 space-x-2 flex">
        <span className="font-semibold flex items-center">
          <Map className="w-4 h-4 mr-2" />
          Address:
        </span>
        <span>{hotel.address}</span>
      </div>
      <Media media={hotel.media} />
    </TabsContent>
  );
}

export default HotelTab;
