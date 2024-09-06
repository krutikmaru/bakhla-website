"use client";
import { useRouter } from "next/navigation";

import Link from "next/link";
import React from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

function Page({ params }: { params: { packageId: string } }) {
  const router = useRouter();

  return (
    <div className="mt-20 flex justify-start items-start flex-wrap overflow-visible">
      <div className="w-full h-[500px]  relative">
        <Image
          src="/images/banners/landing.webp"
          alt="Banner"
          fill
          className="absolute object-cover"
        />
      </div>
      <div className="w-full px-6 sm:px-20 py-10 flex flex-col justify-start items-start space-x-0 space-y-5 overflow-visible md:flex-row md:space-x-10 md:space-y-0">
        <div className="w-full">
          {/* Introduction */}
          <div>
            <h4 className="scroll-m-20  text-xl font-semibold tracking-tight text-bakhla-red">
              RAMADAN UMRAH 2024 GOLD PACKAGE (SHABAN | RAMADAN – RT01)
            </h4>
            <p className="leading-7 [&:not(:first-child)]:mt-2">
              Bakhla Tours & Travels Pvt. Ltd. is the best tour & travels for
              Hajj & Umrah Tours from Mumbai. We are serving pilgrims from all
              over India for Hajj Umrah & Ziyarat Packages for the last 30
              years. Umrah in Ramadan is not an easy task, but the staff members
              of Bakhla Tours & Travels in Saudi Arabia & India make it utmost
              comfortable for the pilgrim who is traveling for this
              self-purification journey. Bakhla Tours & Travels gives the best
              possible price for ramadan umrah packages with the best possible
              facilities. The full month Ramadan Umrah package means Eid-Ul-Fitr
              will be celebrated in Madina Shareef. The full month of Ramadan
              will be spent in both the holy cities Makkah and Madinah, this
              will be divided as per package details. To get the full
              information of the package fill out the form or call us on the
              below-given number.
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
          {/* Recommendations */}
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
          {/* Duration */}
          <div className="mt-5 pb-3 border-b-2 border-neutral-200">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
              Duration
            </h4>
            <p className="leading-7 ">
              Shaban | Ramadan 15 Days Package (7 Days Madina | 8 Days Makkah)
            </p>
          </div>
          {/* Pricing */}
          <div className="mt-5 pb-3 border-b-2 border-neutral-200">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
              Pricing
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-2 gap-5 md:gap-0">
              <div className="flex flex-col">
                <span className="text-bakhla-red font-semibold">
                  Quint | Quad
                </span>
                <span>₹1,29,000/-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-bakhla-red font-semibold">Double</span>
                <span>₹1,81,500/-</span>
              </div>
              <div className="flex flex-col">
                <span className="text-bakhla-red font-semibold">Triple</span>
                <span>₹1,46,500/-</span>
              </div>
            </div>
          </div>
          {/* Dates */}
          <div className="mt-5 pb-3 border-b-2 border-neutral-200">
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-5">
              <div className="flex flex-col">
                <span className="text-bakhla-red font-semibold">
                  Start Date
                </span>
                <span>05th March 2024</span>
              </div>
              <div className="flex flex-col">
                <span className="text-bakhla-red font-semibold">End Date</span>
                <span>20th March 2024</span>
              </div>
              <div className="flex flex-col">
                <span className="text-bakhla-red font-semibold">
                  Start Hijri
                </span>
                <span>24th Shaban 2024</span>
              </div>
              <div className="flex flex-col">
                <span className="text-bakhla-red font-semibold">End Hijri</span>
                <span>10th Ramadan 2024</span>
              </div>
            </div>
          </div>
          {/* Hotels */}
          <div className="mt-5 pb-3 border-b-2 border-neutral-200">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
              Hotels
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-5 md:gap-0">
              <div className="flex flex-col">
                <span className="text-bakhla-red font-semibold">Makkah</span>
                <span>Snood Ajyad</span>
                <span className="text-sm text-neutral-600">
                  Distance: 200 M
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-bakhla-red font-semibold">Madinah</span>
                <span>Odst Al Madinah</span>
                <span className="text-sm text-neutral-600">
                  Distance: 200 M
                </span>
              </div>
            </div>
          </div>
          {/* Meals */}
          <div className="mt-5 pb-3 border-b-2 border-neutral-200">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
              Meals
            </h4>
            <p className="leading-7 ">Sehri & Iftar, Buffet Indian Food</p>
          </div>
          {/* NOTE */}
          <div className="mt-5 pb-3 border-b-2 border-neutral-200">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
              Note
            </h4>
            <ul>
              <li className="leading-7 text-bakhla-red list-disc ml-5">
                PACKAGE DETAILS ARE TENTATIVE CAN BE CHANGE WITHOUT PRIOR
                INTIMATION.
              </li>
              <li className="leading-7 text-bakhla-red list-disc ml-5">
                HAND WRITTEN PASSPORTS ARE NOT ALLOWED. .
              </li>
            </ul>
          </div>
          <div className="mt-5">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-bakhla-red">
                  Package includes
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc">
                    <li>Umrah Visa</li>
                    <li>Umrah Kit</li>
                    <li>Stay</li>
                    <li>Transportation</li>
                    <li>Zam Zam 5 Litres</li>
                    <li>Sehri & Iftar, Buffet Indian Food</li>
                    <li>Ziyarat of Makkah</li>
                    <li>Ziyarat of Madina</li>
                    <li>Laundry</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-bakhla-red">
                  Package excludes
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc">
                    <li>Ticket</li>
                    <li>Room Service</li>
                    <li>Porter Service</li>
                    <li>GST & TCS</li>
                    <li>Individual Transfer</li>
                    <li>Excess Baggage</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-bakhla-red">
                  Child Policy
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc">
                    <li>0-2 Years ₹20,000/- Without Bed</li>
                    <li>2-6 Years ₹27,000/- Without Bed</li>
                    <li>6-12 Years ₹40,000/- Without Bed</li>
                    <li>Child With Bed Same As Adult</li>
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
                      Booking Cancelled 20 Days Before Departure will be Charged
                      ₹ 50,000/- per seat as a Cancellation Fee.
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="w-full h-80  relative top-0 md:w-[500px] md:sticky md:top-28">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>₹1,29,000</CardTitle>
              <CardDescription>per person</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="number" placeholder="Your Phone" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Your Email" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="tour">Tour</Label>
                    <Select>
                      <SelectTrigger id="tour">
                        <SelectValue placeholder="Select Tour" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="hajj">Hajj</SelectItem>
                        <SelectItem value="umrah">Umrah</SelectItem>
                        <SelectItem value="ziyarat">Ziyarat</SelectItem>
                        <SelectItem value="ramadan">Ramadan</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="bg-bakhla-red hover:bg-bakhla-red/90">
                Send Inquiry
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Page;
