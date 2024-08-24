import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PackageSelection from "./package-selection";

function Packages() {
  return (
    <div className="px-24 py-6">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-bakhla-red">
        Bakhla Tours & Travels Pvt. Ltd.
      </h4>
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
        Ramadan Umrah Packages{" "}
        <span className="text-bakhla-red">{new Date().getFullYear()}</span>
      </h2>
      <Tabs defaultValue="15D" className="mt-5">
        <TabsList>
          <TabsTrigger value="15D">15 Days</TabsTrigger>
          <TabsTrigger value="20D">20 Days</TabsTrigger>
          <TabsTrigger value="1M">1 Month</TabsTrigger>
        </TabsList>
        <PackageSelection duration="15D" />
      </Tabs>
    </div>
  );
}

export default Packages;
