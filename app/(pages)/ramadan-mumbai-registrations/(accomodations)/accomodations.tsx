import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FoodTab from "./food-tab";
import MakkahTab from "./makkah-tab";
import MadinahTab from "./madinah-tab";

function Accommodations() {
  return (
    <div className="px-24 py-12">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-bakhla-red">
        Your Comfort, Our Priority
      </h4>
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        Hotels / Accommodations
      </h2>
      <Tabs defaultValue="makkah" className="mt-5">
        <TabsList>
          <TabsTrigger value="makkah">Makkah</TabsTrigger>
          <TabsTrigger value="madinah">Madinah</TabsTrigger>
          <TabsTrigger value="food">Food</TabsTrigger>
        </TabsList>
        <MakkahTab />
        <MadinahTab />
        <FoodTab />
      </Tabs>
    </div>
  );
}

export default Accommodations;
