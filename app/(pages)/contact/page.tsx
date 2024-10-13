import { Mail, MapPin, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
import { Checkbox } from "@/components/ui/checkbox";

function page() {
  return (
    <div className="mt-[92px] ">
      <div className="w-full h-screen relative flex items-center justify-center">
        <Image
          src="/images/banners/contact.webp"
          alt="Ramadan Banner"
          fill
          className="absolute left-0 object-center object-cover"
        />
      </div>
      <div className="w-full bg-[#121921] px-6 sm:px-10 md:px-20 py-10 max-w-[1900px] mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 mt-5">
          <div className="w-full h-52 flex flex-col justify-start items-center">
            <MapPin className=" w-12 h-12 text-white mb-3" />
            <h3 className="text-bakhla-red text-xl font-semibold text-center">
              Address
            </h3>
            <p className="text-center text-neutral-400">
              Shop Number 20, Haroon Manzil, B Block, 147, Imamwada Road, Bhendi
              Bazaar, Mumbai, Maharashtra 400009.
            </p>
          </div>
          <div className="w-full h-52 flex flex-col justify-start items-center">
            <Mail className=" w-12 h-12 text-white mb-3" />
            <h3 className="text-bakhla-red text-xl font-semibold text-center">
              Email Address
            </h3>
            <Link
              href="mailto:mouazam@bakhlatours.com"
              className="text-center text-neutral-400"
            >
              mouazam@bakhlatours.com
            </Link>
          </div>
          <div className="w-full h-52 flex flex-col justify-start items-center">
            <Smartphone className=" w-12 h-12 text-white mb-3" />
            <h3 className="text-bakhla-red text-xl font-semibold text-center">
              Contact Info
            </h3>
            <Link
              href={"+91 9920820751"}
              className="text-center text-neutral-400"
            >
              +91 9920820751
            </Link>
          </div>
        </div>
      </div>
      <div className=" my-5 flex justify-center items-center px-6 sm:px-10 md:px-20 py-10 max-w-[1900px] mx-auto">
        <form>
          <Card className="w-full md:w-[350px] bg-[#121921] border-[#1e2833]">
            <CardHeader>
              <CardTitle className="text-white">Contact Us</CardTitle>
              <CardDescription className="text-neutral-400">
                Our team will get in touch with you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="text-neutral-400">
                    Name *
                  </Label>
                  <Input
                    required
                    id="name"
                    placeholder="Your Name"
                    className="bg-[#1e2833] border-none text-white"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="phone" className="text-neutral-400">
                    Phone *
                  </Label>
                  <Input
                    required
                    id="phone"
                    type="number"
                    placeholder="Your Number"
                    className="bg-[#1e2833] border-none text-white"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email" className="text-neutral-400">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-[#1e2833] border-none text-white"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="tour-name " className="text-neutral-400">
                    Tour Name
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="tour-name"
                      className="bg-[#1e2833] border-none text-white"
                    >
                      <SelectValue
                        placeholder="Select"
                        className="text-neutral-400"
                      />
                    </SelectTrigger>
                    <SelectContent
                      position="popper"
                      className="text-white bg-[#1e2833] border-[#2b3846]"
                    >
                      <SelectItem value="hajj">Hajj</SelectItem>
                      <SelectItem value="umrah">Umrah</SelectItem>
                      <SelectItem value="ziyarat">Ziyarat</SelectItem>
                      <SelectItem value="ramadan">Ramadan</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2 py-2">
                  <Checkbox required id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-neutral-400"
                  >
                    Accept privacy policy.
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                type="submit"
                className="bg-bakhla-red hover:bg-bakhla-red/90 w-full"
              >
                Send Inquiry
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}

export default page;
