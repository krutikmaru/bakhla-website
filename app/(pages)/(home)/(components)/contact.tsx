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

function Contact() {
  return (
    <div className="py-10 px-6 sm:px-10 bg-contact h-screen bg-cover bg-no-repeat bg-center bg-fixed md:px-14 lg:px-20 flex flex-col justify-center items-center md:items-end">
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
  );
}

export default Contact;
