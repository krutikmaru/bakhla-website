import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ramadan_umrah_data from "../(utils)/data";
import { RamadanUmrahPackage } from "../(utils)/types";
import { mapHtmlToReact } from "@/lib/utils-tsx";
import { cookies } from "next/headers";
import ContactForm from "../(components)/contact-form";

function Page({ params }: { params: { packageId: string } }) {
  const tour = ramadan_umrah_data.find(
    (p) => p.package_id === params.packageId
  );
  const showPrices = cookies().has("show_prices");
  if (!tour) {
    return (
      <div className="h-screen flex justify-center items-center flex-wrap overflow-visible">
        Not Found
      </div>
    );
  }
  return (
    <div className="mt-20 flex justify-start items-start flex-wrap overflow-visible">
      <div className="w-full h-[500px]  relative">
        <Image
          src={tour.image}
          alt="Banner"
          fill
          className="absolute object-cover"
        />
      </div>
      <div className="w-full px-6 sm:px-20 py-10 flex flex-col justify-start items-start space-x-0 space-y-5 overflow-visible md:flex-row md:space-x-10 md:space-y-0">
        <div className="w-full">
          <Introduction tour={tour} />
          <Recommendation />
          <Duration />
          <Pricing showPrices={showPrices} tour={tour} />
          <Dates tour={tour} />
          <Hotels tour={tour} />
          <Meals />
          <Notes />
          <Accordions />
        </div>
        {!showPrices && <ContactForm showPrices={showPrices} />}
      </div>
    </div>
  );
}

export default Page;

function Introduction({ tour }: { tour: RamadanUmrahPackage }) {
  return (
    <div>
      <h4 className="scroll-m-20  text-xl font-semibold tracking-tight text-bakhla-red">
        Ramadan Umrah {tour.year} {tour.title} {tour.package_id}
      </h4>
      {mapHtmlToReact(tour.html_introduction)}
    </div>
  );
}

function Recommendation() {
  return (
    <div className="mt-5">
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
        Recommended
      </h4>
      <div className="flex flex-col mt-1">
        <Link className="text-bakhla-red" href={"#"}>
          Hajj Packages
        </Link>
        <Link className="text-bakhla-red" href={"#"}>
          Umrah Packages
        </Link>
        <Link className="text-bakhla-red" href={"#"}>
          Ramadan Umrah Packages
        </Link>
        <Link className="text-bakhla-red" href={"#"}>
          Umrah Packages from Mumbai 2024
        </Link>
        <Link className="text-bakhla-red" href={"#"}>
          Hajj Packages 2024
        </Link>
        <Link className="text-bakhla-red" href={"#"}>
          Best Umrah Package
        </Link>
      </div>
    </div>
  );
}

function Duration() {
  return (
    <div className="mt-5 pb-3 border-b-[1px] border-neutral-200">
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
        Duration
      </h4>
      <p className="leading-7 ">
        Shaban | Ramadan 15 Days Package (7 Days Madina | 8 Days Makkah)
      </p>
    </div>
  );
}

function Pricing({
  showPrices,
  tour,
}: {
  showPrices: boolean;
  tour: RamadanUmrahPackage;
}) {
  return (
    <div className="mt-5 pb-3 border-b-[1px] border-neutral-200">
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
        Pricing
      </h4>
      {!showPrices ? (
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">
            Send inquiry using the form to reveal pricing
          </span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-5 md:gap-0">
          <div className="flex flex-col">
            <span className="text-bakhla-red font-semibold">Quint | Quad</span>
            <span>{tour.prices.quad}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-bakhla-red font-semibold">Triple</span>
            <span>{tour.prices.triple}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-bakhla-red font-semibold">Double</span>
            <span>{tour.prices.double}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function Dates({ tour }: { tour: RamadanUmrahPackage }) {
  return (
    <div className="mt-5 pb-3 border-b-[1px] border-neutral-200">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-5">
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Start Date</span>
          <span>{tour.start_date}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">End Date</span>
          <span>{tour.end_date}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Start Hijri</span>
          <span>{tour.start_hijri}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">End Hijri</span>
          <span>{tour.end_hijri}</span>
        </div>
      </div>
    </div>
  );
}

function Hotels({ tour }: { tour: RamadanUmrahPackage }) {
  return (
    <div className="mt-5 pb-3 border-b-2 border-neutral-200">
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
        Hotels
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-5 md:gap-0">
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Makkah</span>
          <span>{tour.hotel_makkah}</span>
          {/* <span className="text-sm text-neutral-600">Distance: 200 Mtrs</span> */}
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Madinah</span>
          <span>{tour.hotel_madinah}</span>
          {/* <span className="text-sm text-neutral-600">Distance: 250 Mtrs</span> */}
        </div>
      </div>
    </div>
  );
}

function Meals() {
  return (
    <div className="mt-5 pb-3 border-b-2 border-neutral-200">
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
        Meals
      </h4>
      <p className="leading-7 ">Sehri & Iftar, Buffet Indian Food</p>
    </div>
  );
}

function Notes() {
  return (
    <div className="mt-5 pb-3 border-b-2 border-neutral-200">
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
        Note
      </h4>
      <ul>
        <li className="leading-7 text-bakhla-red list-disc ml-5">
          PACKAGE DETAILS ARE TENTATIVE CAN BE CHANGE WITHOUT PRIOR INTIMATION.
        </li>
        <li className="leading-7 text-bakhla-red list-disc ml-5">
          HAND WRITTEN PASSPORTS ARE NOT ALLOWED. .
        </li>
      </ul>
    </div>
  );
}

function Accordions() {
  return (
    <div className="mt-5">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-bakhla-red">
            Package includes
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc">
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-bakhla-red">
            Package excludes
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-di  sc">
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-bakhla-red">
            Child Policy
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc">
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-bakhla-red">
            Booking Requirements
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc">
              <li>6 Months Validity on PASSPORT With 2 Empty Pages</li>
              <li>Aadhaar Card</li>
              <li>Pan Card</li>
              <li>2 Passport Size Photos</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-bakhla-red">
            Cancellation Policy
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc">
              <li>
                Booking Cancelled 20 Days Before Departure will be Charged ₹
                50,000/- per seat as a Cancellation Fee.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
