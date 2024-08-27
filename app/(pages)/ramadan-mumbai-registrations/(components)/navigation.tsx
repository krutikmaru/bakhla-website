"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Phone } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import InquiryDialog from "./inquiry-dialog";
function Navigation() {
  return (
    <nav className="flex fixed top-0 z-10 w-full bg-white justify-between items-center px-12 py-6 border-b-[1px] border-neutral-200">
      <Image
        src="/logo-full.png"
        height={53}
        width={120}
        alt="Bakhla Tours Logo"
      />
      <Dialog>
        <DialogTrigger suppressHydrationWarning>
          <Button className="bg-bakhla-red hover:bg-bakhla-red/90">
            <Phone className="w-4 h-4 mr-0 sm:mr-2" />
            <span className="hidden sm:flex">Contact Us</span>
          </Button>
        </DialogTrigger>
        <InquiryDialog />
      </Dialog>
    </nav>
  );
}

export default Navigation;
