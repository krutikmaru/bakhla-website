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
          <Details />
          <Pricing />
          <Dates />
          <Hotels />
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

function Details() {
  return (
    <div className="mt-5 pb-3 border-b-[1px] border-neutral-200">
      <div className="flex space-x-2 items-center">
        <h4 className="scroll-m-20 font-semibold tracking-tight text-neutral-800">
          Departure Cities:
        </h4>
        <p className="leading-7 ">Mumbai</p>
      </div>
      <div className="flex space-x-2 items-center">
        <h4 className="scroll-m-20 font-semibold tracking-tight text-neutral-800">
          Sectors | Airlines:
        </h4>
        <p className="leading-7 ">Bom - Jed - Bom | Saudi Airlines</p>
      </div>
      <div className="flex space-x-2 items-center">
        <h4 className="scroll-m-20 font-semibold tracking-tight text-neutral-800">
          Baggage Allowance:
        </h4>
        <p className="leading-7 ">
          30 kg Check in Luggage + 07 kg Hand Luggage + 5 Ltr Zam Zam
        </p>
      </div>
      <div className="flex space-x-2 items-center">
        <h4 className="scroll-m-20 font-semibold tracking-tight text-neutral-800">
          Meal:
        </h4>
        <p className="leading-7 ">
          Gold Menu | Full Board – Food cooked by our Indian Chefs served in
          Buffet style.
        </p>
      </div>
      <div className="flex space-x-2 items-center">
        <h4 className="scroll-m-20 font-semibold tracking-tight text-neutral-800">
          Duration:
        </h4>
        <p className="leading-7 ">13 Days</p>
      </div>
      <div className="flex space-x-2 items-center">
        <h4 className="scroll-m-20 font-semibold tracking-tight text-neutral-800">
          Transfers:
        </h4>
        <p className="leading-7 ">
          Transportation will be provided in luxurious buses.
        </p>
      </div>
      <div className="flex space-x-2 items-center">
        <h4 className="scroll-m-20 font-semibold tracking-tight text-neutral-800">
          Hajj Camp:
        </h4>
        <p className="leading-7 ">Category-D</p>
      </div>
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
          <span className="text-bakhla-red font-semibold">
            FOUR BED SHARING
          </span>
          <span>₹1,29,000/-</span>
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">
            THREE BED SHARING
          </span>
          <span>₹1,46,500/-</span>
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">TWO BED SHARING</span>
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
          <span className="text-bakhla-red font-semibold">Departure</span>
          <span>DATE (BOM) : 10th June 2024</span>
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Arrival</span>
          <span>DATE (BOM): 23rd June 2024</span>
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
          <span>Hotel Snood Ajyad or a Similar Hotel.</span>
          <span className="text-sm text-neutral-600">
            Distance: 300 Mtrs from Haram.
          </span>
          <span className="text-sm text-neutral-600">
            Checkin date: 4thZil Hajj (11 June 2024)
          </span>
          <span className="text-sm text-neutral-600">
            Checkout date: 14thZil Hajj (21 June 2024)
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Madinah</span>
          <span>Ritz Al Madinah (Full Board) or Similar Hotel.</span>
          <span className="text-sm text-neutral-600">
            Distance: 200 Mtrs in Markaziya North Area.
          </span>
          <span className="text-sm text-neutral-600">
            Checkin date: 14thZil Hajj (21 June 2024)
          </span>
          <span className="text-sm text-neutral-600">
            Checkout date: 17thZil Hajj (24 June 2024)
          </span>
        </div>
      </div>
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
          Hajj Camp: Upgrade to Category-A, Available at ₹ 1,80,000/-
        </li>
        <li>Hand-written passports are not allowed.</li>
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
            Types of Hajj Camps
          </AccordionTrigger>
          <AccordionContent>
            <GridList />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-bakhla-red">
            Points to remember
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-di  sc">
              <li>GST & TCS will be applicable.</li>
              <li>
                Travel agency is not responsible for the loss of luggage, if
                any.
              </li>
              <li>
                Extensions of flight routes will be charged and must be
                confirmed at the time of booking.
              </li>
              <li>
                Original passports must be submitted to our travel agency for
                visa endorsement before the deadline dates provided by us.
              </li>
              <li>
                Hotels and flight schedules are subject to change without prior
                notice.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-bakhla-red">
            Packages Include
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc">
              <li>Local Ziyarat in Makkah and Madina.</li>
              <li>Hajj Visa Service, Ticket provided.</li>
              <li>
                Stay/Accommodation in Makkah & Madinah as the hotel mentioned or
                similar standard.
              </li>
              <li>Round-trip transportation will be provided.</li>
              <li>
                3 Times Buffet Indian food daily (breakfast, lunch & dinner) is
                served in a hotel restaurant cooked by our own Indian Chefs.
              </li>
              <li>Meals will be served in Mina & Arafat during Hajj.</li>
              <li>All services will start from Jeddah or Madinah airport.</li>
              <li>Zam Zam 5 Litres.</li>
              <li>Complimentary unlimited Laundry Service.</li>
              <li>
                Complimentary Hajj Kit includes: Luggage Bag, Hand Carry Bag,
                Passport Pouch, Musalla, Mat, Tasbeeh, Haj Guide
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-bakhla-red">
            Packages Exclude
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc">
              <li>Qurbani</li>
              <li>Tawaf -E-Ziyarat transportation</li>
              <li>Room Service</li>
              <li>Excess Baggage other than weight allowance</li>
              <li>Any personal expense</li>
              <li>GST & TCS</li>
              <li>Porter Service</li>
              <li>Individual Transfer</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-bakhla-red">
            Child Policy
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc">
              <li>
                ₹1,00,000 less than the adult fare for child 0-2 years (WITH
                BED).
              </li>
              <li>Same as Adult fare for child 2-12 years (WITH BED).</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-bakhla-red">
            Booking Requirements
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc">
              <li>8 Photos with a white background (passport size).</li>
              <li>6-month validity on a passport with 2 empty pages.</li>
              <li>Pan Card | Aadhar Card | 2 Passport Size Photos.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
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
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-bakhla-red">
            Terms & Conditions
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc">
              <li>
                All bookings are subject to license approved by MOMA and the
                quota allotted by MOMA.
              </li>
              <li>
                If any fluctuation in taxes/currency by the Indian or Saudi
                Government, passengers have to bear the difference.
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

function GridList() {
  const categories = [
    {
      name: "Category D-Moallims:",
      features: [
        "Located at 3 to 5 km from Jamarat in the new Mina area.",
        "Fireproof tents with Air Coolers are provided by the Moallim in this category.",
        "Mattresses and pillows are provided by the Moallims.",
        "Simple Food Menu (1 gravy with rice/roti) is provided three times daily.",
        "Bakhia Team tries to arrange additional food items for the Hajj Pilgrims.",
        "Seat by Seat Transport will be provided by Bakhia Tours & Travels PVT. Ltd. privately.",
      ],
    },
    {
      name: "Category -A Moallims:",
      features: [
        "Located at 600 meters to 1 km from Jamarat near Masjid Khaif in Mina.",
        "Air-Conditioned tents made with Gypsum board are provided by the Moallim in this category.",
        "Luxury Sofa Beds are provided by the Moallims.",
        "Luxury Buffet Food is provided three times daily.",
        "Seat By Seat Transport will be provided by Bakhia Tours & Travels Pvt. Ltd. privately.",
      ],
    },
  ];
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {categories.map((category, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            {category.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-red-500 mt-1 mr-2"></div>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
