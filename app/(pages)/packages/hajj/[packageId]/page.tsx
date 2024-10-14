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
import { HajjPackage } from "../(utils)/types";
import { mapHtmlToReact } from "@/lib/utils-tsx";
import { cookies } from "next/headers";
import ContactForm from "../(components)/contact-form";
import hajj_data from "../(utils)/data";

function Page({ params }: { params: { packageId: string } }) {
  const tour = hajj_data.find((p) => p.package_id === params.packageId);
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
          {tour.html_notes && <Notes tour={tour} />}
          <Accordions />
        </div>
        {!showPrices && <ContactForm showPrices={showPrices} />}
      </div>
    </div>
  );
}

export default Page;

function Introduction({ tour }: { tour: HajjPackage }) {
  return (
    <div>
      <h4 className="scroll-m-20  text-xl font-semibold tracking-tight text-bakhla-red">
        Hajj {tour.year} {tour.title} {tour.package_id}
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
  tour: HajjPackage;
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

function Dates({ tour }: { tour: HajjPackage }) {
  return (
    <div className="mt-5 pb-3 border-b-[1px] border-neutral-200">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-5">
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Departure</span>
          <span>{tour.departure}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Arrival</span>
          <span>{tour.arrival}</span>
        </div>
      </div>
    </div>
  );
}

function Hotels({ tour }: { tour: HajjPackage }) {
  return (
    <div className="mt-5 pb-3 border-b-2 border-neutral-200">
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
        Hotels
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-2 gap-5 md:gap-0">
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Makkah</span>
          <span>{tour.hotel_makkah}</span>
          {tour.html_makkah_hotel_details &&
            mapHtmlToReact(tour.html_makkah_hotel_details)}
        </div>
        <div className="flex flex-col">
          <span className="text-bakhla-red font-semibold">Madinah</span>
          <span>{tour.hotel_madinah}</span>
          {tour.html_makkah_hotel_details &&
            mapHtmlToReact(tour.html_makkah_hotel_details)}
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

function Notes({ tour }: { tour: HajjPackage }) {
  return (
    <div className="mt-5 pb-3 border-b-2 border-neutral-200">
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
        Note
      </h4>
      {tour.html_notes && mapHtmlToReact(tour.html_notes)}
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
