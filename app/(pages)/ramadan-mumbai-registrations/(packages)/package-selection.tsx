"use client";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { packages } from "@/lib/data/packages";
import { Package as PackageType } from "@/lib/types";
import clsx from "clsx";
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import InquiryDialog from "../(components)/inquiry-dialog";

type PackageSelectionProps = {
  duration: string;
};

function PackageSelection({ duration = "15D" }: PackageSelectionProps) {
  const filteredPackages = packages.filter((p) => p.duration === duration);
  const [current, setCurrent] = useState<PackageType>(filteredPackages[0]);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <TabsContent value={duration}>
      <Dialog
        open={open}
        onOpenChange={(isOpen) => (!isOpen ? setOpen(false) : undefined)}
      >
        {/* Carousel */}
        <div className="w-full overflow-x-scroll pb-2 flex space-x-2 items-stretch">
          {filteredPackages.map((p) => (
            <div
              onClick={() => setCurrent(p)}
              key={p.id}
              className={clsx(
                "min-w-[200px] border-[1px] border-neutral-300 rounded-md overflow-hidden p-5 flex flex-col justify-between items-start cursor-pointer",
                current.id === p.id && "bg-neutral-200"
              )}
            >
              <div>
                <h6 className="scroll-m-20 font-semibold tracking-tight">
                  {p.title.date}
                </h6>
                <h6 className="scroll-m-20 font-semibold tracking-tight">
                  {p.title.duration}
                </h6>
                <h6 className="scroll-m-20 font-semibold tracking-tight">
                  {p.title.type}
                </h6>
              </div>
              <h6 className="scroll-m-20 font-semibold tracking-tight text-bakhla-red">
                {p.id}
              </h6>
            </div>
          ))}
        </div>
        {/* Display */}
        <div className="w-full min-h-[400px] p-7 mt-5 border-[1px] border-neutral-300 bg-packages bg-left lg:bg-right bg-cover rounded-md overflow-hidden ">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            {current.category}
          </h2>
          <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-bakhla-red">
            {current.summary}
          </h4>
          <div className="flex flex-col justify-start items-start mt-10 w-full">
            {/* Room Sizes */}
            <div className="flex flex-col items-center space-x-0 space-y-5 w-full sm:flex-row sm:space-x-2 sm:space-y-0">
              <div className="w-full text-lg sm:text-base md:w-[150px] flex flex-row sm:flex-col space-y-1 items-center sm:items-start justify-between sm:justify-start text-bakhla-red font-semibold">
                <span>Quad</span>
                <Button
                  onClick={() => setOpen(true)}
                  size="sm"
                  className="text-xs py-0 bg-bakhla-red hover:bg-bakhla-red/90"
                >
                  View
                </Button>
              </div>
              <div className="w-full text-lg sm:text-base md:w-[150px] flex flex-row sm:flex-col space-y-1 items-center sm:items-start justify-between sm:justify-start text-bakhla-red font-semibold">
                <span>Triple</span>
                <Button
                  onClick={() => setOpen(true)}
                  size="sm"
                  className="text-xs py-0 bg-bakhla-red hover:bg-bakhla-red/90"
                >
                  View
                </Button>
              </div>
              <div className="w-full text-lg sm:text-base md:w-[150px] flex flex-row sm:flex-col space-y-1 items-center sm:items-start justify-between sm:justify-start text-bakhla-red font-semibold">
                <span>Double</span>
                <Button
                  onClick={() => setOpen(true)}
                  size="sm"
                  className="text-xs py-0 bg-bakhla-red hover:bg-bakhla-red/90"
                >
                  View
                </Button>
              </div>
              <div className="w-full text-lg sm:text-base md:w-[150px] flex flex-row sm:flex-col space-y-1 items-center sm:items-start justify-between sm:justify-start text-bakhla-red font-semibold">
                <span>Air Ticket</span>
                <Button
                  onClick={() => setOpen(true)}
                  size="sm"
                  className="text-xs py-0 bg-bakhla-red hover:bg-bakhla-red/90"
                >
                  View
                </Button>
              </div>
            </div>
            {/* Hotels & Food */}
            <div className="flex flex-col space-x-0 border-t-2 border-b-2 py-10 border-bakhla-red space-y-5 justify-start mt-7 w-full lg:w-fit sm:flex-row sm:space-x-2 sm:space-y-0">
              <div className="w-full text-lg sm:text-base md:w-[150px] flex flex-row sm:flex-col space-y-1 items-center sm:items-start justify-between sm:justify-start text-bakhla-red font-semibold">
                <span>Hotel Makkah</span>
                <span className="text-sm text-neutral-500">
                  {current.hotelMakkah}
                </span>
              </div>
              <div className="w-full text-lg sm:text-base md:w-[150px] flex flex-row sm:flex-col space-y-1 items-center sm:items-start justify-between sm:justify-start text-bakhla-red font-semibold">
                <span>Hotel Madinah</span>
                <span className="text-sm text-neutral-500">
                  {current.hotelMadinah}
                </span>
              </div>
              <div className="w-full text-lg sm:text-base md:w-[150px] flex flex-row sm:flex-col space-y-1 items-center sm:items-start justify-between sm:justify-start text-bakhla-red font-semibold">
                <span>Food Menu</span>
                <span className="text-sm text-neutral-500">
                  {current.foodMenu}
                </span>
              </div>
              <div className="w-full text-lg sm:text-base md:w-[150px] flex flex-row sm:flex-col space-y-1 items-center sm:items-start justify-between sm:justify-start text-bakhla-red font-semibold">
                <span>Eid</span>
                <span className="text-sm text-neutral-500">{current.Eid}</span>
              </div>
            </div>
            {/* Dates */}
            <div className="flex flex-col space-x-0 space-y-5 justify-start mt-7  pt-5 w-full sm:flex-row sm:space-x-2 sm:space-y-0">
              <div className="w-full text-lg sm:text-base md:w-[150px] flex flex-row sm:flex-col space-y-1 items-center sm:items-start justify-between sm:justify-start text-bakhla-red font-semibold">
                <span>Start Date</span>
                <span className="text-sm text-neutral-500">
                  {current.startDate}
                </span>
              </div>
              <div className="w-full text-lg sm:text-base md:w-[150px] flex flex-row sm:flex-col space-y-1 items-center sm:items-start justify-between sm:justify-start text-bakhla-red font-semibold">
                <span>Start Hijri</span>
                <span className="text-sm text-neutral-500">
                  {current.startHijri}
                </span>
              </div>
              <div className="w-full text-lg sm:text-base md:w-[150px] flex flex-row sm:flex-col space-y-1 items-center sm:items-start justify-between sm:justify-start text-bakhla-red font-semibold">
                <span>End Date</span>
                <span className="text-sm text-neutral-500">
                  {current.endDate}
                </span>
              </div>
              <div className="w-full text-lg sm:text-base md:w-[150px] flex flex-row sm:flex-col space-y-1 items-center sm:items-start justify-between sm:justify-start text-bakhla-red font-semibold">
                <span>End Hijri</span>
                <span className="text-sm text-neutral-500">
                  {current.endHijri}
                </span>
              </div>
            </div>
          </div>
        </div>
        <InquiryDialog />
      </Dialog>
    </TabsContent>
  );
}

export default PackageSelection;
