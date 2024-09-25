import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React from "react";

function InquiryDialog() {
  return (
    <DialogContent>
      <DialogHeader>
        <Image
          src="/logo-full.png"
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
          <Label htmlFor="name" className="text-right text-xs text-neutral-500">
            Name
          </Label>
          <Input id="name" placeholder="Afreen Shaikh" />
        </div>
        <div>
          <Label
            htmlFor="email"
            className="text-right text-xs text-neutral-500"
          >
            Email
          </Label>
          <Input id="email" type="email" placeholder="afreen@gmail.com" />
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
  );
}

export default InquiryDialog;
