"use client";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { packages } from "@/lib/data/packages";
import { Package as PackageType } from "@/lib/types";
import clsx from "clsx";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

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
        <div className="w-full min-h-[400px] p-7 mt-5 border-[1px] border-neutral-300 bg-packages bg-right bg-cover rounded-md overflow-hidden ">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            {current.category}
          </h2>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-bakhla-red">
            {current.summary}
          </h4>
          <div className="flex flex-col justify-start items-start mt-10">
            {/* Room Sizes */}
            <div className="flex items-center space-x-2">
              <div className="w-[150px] flex flex-col space-y-1 items-start justify-start text-bakhla-red font-semibold">
                <span>Quad</span>
                <Button
                  onClick={() => setOpen(true)}
                  size="sm"
                  className="text-xs py-0 bg-bakhla-red hover:bg-bakhla-red/90"
                >
                  View
                </Button>
              </div>
              <div className="w-[150px] flex flex-col space-y-1 items-start justify-start text-bakhla-red font-semibold">
                <span>Triple</span>
                <Button
                  onClick={() => setOpen(true)}
                  size="sm"
                  className="text-xs py-0 bg-bakhla-red hover:bg-bakhla-red/90"
                >
                  View
                </Button>
              </div>
              <div className="w-[150px] flex flex-col space-y-1 items-start justify-start text-bakhla-red font-semibold">
                <span>Double</span>
                <Button
                  onClick={() => setOpen(true)}
                  size="sm"
                  className="text-xs py-0 bg-bakhla-red hover:bg-bakhla-red/90"
                >
                  View
                </Button>
              </div>
              <div className="w-[150px] flex flex-col space-y-1 items-start justify-start text-bakhla-red font-semibold">
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
            <div className="flex justify-start space-x-2 mt-7">
              <div className="w-[150px] items-start justify-start flex flex-col space-y-1  text-bakhla-red font-semibold">
                <span>Hotel Makkah</span>
                <span className="text-sm text-neutral-500">
                  {current.hotelMakkah}
                </span>
              </div>
              <div className="w-[150px] items-start justify-start flex flex-col space-y-1  text-bakhla-red font-semibold">
                <span>Hotel Madinah</span>
                <span className="text-sm text-neutral-500">
                  {current.hotelMadinah}
                </span>
              </div>
              <div className="w-[150px] items-start justify-start flex flex-col space-y-1  text-bakhla-red font-semibold">
                <span>Food Menu</span>
                <span className="text-sm text-neutral-500">
                  {current.foodMenu}
                </span>
              </div>
              <div className="w-[150px] items-start justify-start flex flex-col space-y-1  text-bakhla-red font-semibold">
                <span>Eid</span>
                <span className="text-sm text-neutral-500">{current.Eid}</span>
              </div>
            </div>
            {/* Dates */}
            <div className="flex justify-start space-x-2 mt-7 border-t-2 border-bakhla-red w-full pt-5">
              <div className="w-[150px] items-start justify-start flex flex-col space-y-1  text-bakhla-red font-semibold">
                <span>Start Date</span>
                <span className="text-sm text-neutral-500">
                  {current.startDate}
                </span>
              </div>
              <div className="w-[150px] items-start justify-start flex flex-col space-y-1  text-bakhla-red font-semibold">
                <span>Start Hijri</span>
                <span className="text-sm text-neutral-500">
                  {current.startHijri}
                </span>
              </div>
              <div className="w-[150px] items-start justify-start flex flex-col space-y-1  text-bakhla-red font-semibold">
                <span>End Date</span>
                <span className="text-sm text-neutral-500">
                  {current.endDate}
                </span>
              </div>
              <div className="w-[150px] items-start justify-start flex flex-col space-y-1  text-bakhla-red font-semibold">
                <span>End Hijri</span>
                <span className="text-sm text-neutral-500">
                  {current.endHijri}
                </span>
              </div>
            </div>
          </div>
        </div>
        <DialogContent>
          <DialogHeader>
            <Image
              src="/logo.png"
              height={53}
              width={150}
              alt="Bakhla Tours Logo"
              className="mx-auto mb-2"
            />

            <DialogDescription className="text-center">
              Kindly fill this form Our team will get in touch with you.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <div>
              <Label
                htmlFor="name"
                className="text-right text-xs text-neutral-500"
              >
                Name
              </Label>
              <Input id="name" placeholder="Meera Maru" />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="text-right text-xs text-neutral-500"
              >
                Email
              </Label>
              <Input id="email" type="email" placeholder="meera@gmail.com" />
            </div>
            <div>
              <Label
                htmlFor="phone"
                className="text-right text-xs text-neutral-500"
              >
                Phone
              </Label>
              <Input id="phone" type="number" placeholder="+91 1234567891" />
            </div>
            <div className="flex items-center space-x-2 py-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept privacy policy.
              </label>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="w-full bg-bakhla-red hover:bg-bakhla-red/90"
            >
              Send Inquiry
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TabsContent>
  );
}

export default PackageSelection;
