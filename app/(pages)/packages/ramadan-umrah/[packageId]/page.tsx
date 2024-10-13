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

function Page() {
  return (
    <div className="mt-20 flex justify-start items-start flex-wrap overflow-visible">
      <div className="w-full h-[500px]  relative">
        <Image
          src={`/images/banners/landing.webp`}
          alt="Banner"
          fill
          className="absolute object-cover"
        />
      </div>
      <div className="w-full px-6 sm:px-20 py-10 flex flex-col justify-start items-start space-x-0 space-y-5 overflow-visible md:flex-row md:space-x-10 md:space-y-0">
        <div className="w-full">
          <Introduction />
          <Recommendation />
          <Duration />
          <Pricing />
          <Dates />
          <Hotels />
          <Meals />
          <Notes />
          <Accordions />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Page;

function Introduction() {
  return (
    <div>
      <h4 className="scroll-m-20  text-xl font-semibold tracking-tight text-bakhla-red">
        RAMADAN UMRAH 2024 GOLD PACKAGE (SHABAN | RAMADAN - RT01)
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-2">
        Bakhla Tours & Travels Pvt. Ltd. is the best tour & travels for Hajj &
        Umrah Tours from Mumbai. We are serving pilgrims from all over India for
        Hajj Umrah & Ziyarat Packages for the last 30 years. Umrah in Ramadan is
        not an easy task, but the staff members of Bakhla Tours & Travels in
        Saudi Arabia & India make it utmost comfortable for the pilgrim who is
        traveling for this self-purification journey. Bakhla Tours & Travels
        gives the best possible price for ramadan umrah packages with the best
        possible facilities. The full month Ramadan Umrah package means
        Eid-Ul-Fitr will be celebrated in Madina Shareef. The full month of
        Ramadan will be spent in both the holy cities Makkah and Madinah, this
        will be divided as per package details.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-2">
        For More Details On Ramadan Umrah Package{" "}
        <Link href={"#"} className="text-bakhla-red">
          CLICK HERE
        </Link>
        . You Can Call OR Whatsapp Us On{" "}
        <Link className="text-bakhla-red" href={"tel:+919920820751"}>
          +919920820751.
        </Link>
      </p>
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

function Pricing() {
  return (
    <div className="mt-5 pb-3 border-b-[1px] border-neutral-200">
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
        Pricing
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-5 md:gap-0">
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Quint | Quad</span>
          <span>₹1,29,000/-</span>
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Triple</span>
          <span>₹1,46,500/-</span>
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Double</span>
          <span>₹1,81,500/-</span>
        </div>
      </div>
    </div>
  );
}

function Dates() {
  return (
    <div className="mt-5 pb-3 border-b-[1px] border-neutral-200">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-5">
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Start Date</span>
          <span>5th March, 2024</span>
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">End Date</span>
          <span>20th March, 2024</span>
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Start Hijri</span>
          <span>24th Shaban, 2024</span>
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">End Hijri</span>
          <span>10th Ramadan, 2024</span>
        </div>
      </div>
    </div>
  );
}

function Hotels() {
  return (
    <div className="mt-5 pb-3 border-b-2 border-neutral-200">
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
        Hotels
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-5 md:gap-0">
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Makkah</span>
          <span>Odst Al Madinah</span>
          <span className="text-sm text-neutral-600">Distance: 200 Mtrs</span>
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Madinah</span>
          <span>Snood Ajyad</span>
          <span className="text-sm text-neutral-600">Distance: 250 Mtrs</span>
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

function ContactForm() {
  return (
    <div className="w-full h-80  relative top-0 md:w-[500px] md:sticky md:top-28">
      <form>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>₹1,46,500/-</CardTitle>
            <CardDescription>per person</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name *</Label>
                <Input required name="name" id="name" placeholder="Your Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  required
                  name="phone"
                  id="phone"
                  type="number"
                  placeholder="Your Phone"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email *</Label>
                <Input
                  required
                  id="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              type="submit"
              className="bg-bakhla-red hover:bg-bakhla-red/90"
            >
              Send Inquiry
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
