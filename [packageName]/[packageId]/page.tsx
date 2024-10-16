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
import mappings from "../package-api-mappings";
import axios from "axios";
import { formatCurrency } from "@/lib/utils";

async function Page({
  params,
}: {
  params: { packageName: string; packageId: string };
}) {
  const { packageName, packageId } = params;
  const single_data_api =
    mappings[packageName as keyof typeof mappings]["single"];
  const static_data_api =
    mappings[packageName as keyof typeof mappings]["static"];
  let data: any = await axios.post(`${single_data_api}`, {
    id: packageId,
  });
  let static_data: any = await axios.post(static_data_api);
  console.log(static_data.data);
  data = data.data[0];
  static_data = static_data.data[0];
  console.log(data);
  console.log(static_data);
  const price = formatCurrency(data[static_data["PRICE_FIELD_NAME"]]) || "NA";

  async function handleSubmitForm(formData: FormData) {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const body = {
      name,
      email_id: email,
      mobile_number: phone,
      tour: data.PACKAGE_ID,
    };
    try {
      const response = await axios.post(
        "https://krutik.devdusija.com/lead/new",
        body
      );

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="mt-20 flex justify-start items-start flex-wrap overflow-visible">
      <div className="w-full h-[500px]  relative">
        <Image
          src={`data:image/jpeg;base64,${data.Image}`}
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
              {data.Name}
            </h4>
            <p className="leading-7 [&:not(:first-child)]:mt-2">
              {static_data.PACKAGE_DESCRIPTION}
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
            <p className="leading-7 ">{data.DURATION}</p>
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
                <span>
                  {formatCurrency(data[static_data["PRICE_FIELD_NAMES"][0]])}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-bakhla-red font-semibold">Triple</span>
                <span>
                  {formatCurrency(data[static_data["PRICE_FIELD_NAMES"][1]])}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-bakhla-red font-semibold">Double</span>
                <span>
                  {formatCurrency(data[static_data["PRICE_FIELD_NAMES"][2]])}
                </span>
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
                <span>{data.START_DATE}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-bakhla-red font-semibold">End Date</span>
                <span>{data.END_DATE}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-bakhla-red font-semibold">
                  Start Hijri
                </span>
                <span>{data.START_HIJRI}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-bakhla-red font-semibold">End Hijri</span>
                <span>{data.END_HIJRI}</span>
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
                <span>{data.HOTEL_IN_MAKKAH}</span>
                <span className="text-sm text-neutral-600">
                  Distance: {data.DISTANCE_FROM_MADINA}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-bakhla-red font-semibold">Madinah</span>
                <span>{data.HOTEL_IN_MAKKAH}</span>
                <span className="text-sm text-neutral-600">
                  Distance: {data.DISTANCE_FROM_MADINA}
                </span>
              </div>
            </div>
          </div>
          {/* Meals */}
          <div className="mt-5 pb-3 border-b-2 border-neutral-200">
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-neutral-800">
              Meals
            </h4>
            <p className="leading-7 ">{data.MEAL}</p>
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
                    {static_data.PACKAGE_INCLUDE.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-bakhla-red">
                  Package excludes
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc">
                    {static_data.PACKAGE_EXCLUDE.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-bakhla-red">
                  Child Policy
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc">
                    {static_data.CHILD_POLICY.map((item: string) => (
                      <li key={item}>{item}</li>
                    ))}
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
          <form action={handleSubmitForm}>
            <Card className="w-full">
              <CardHeader>
                <CardTitle>{price}</CardTitle>
                <CardDescription>per person</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      required
                      name="name"
                      id="name"
                      placeholder="Your Name"
                    />
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
      </div>
    </div>
  );
}

export default Page;
