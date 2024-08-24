import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Phone } from "lucide-react";
function Navigation() {
  return (
    <nav className="flex justify-between items-center px-12 py-6 border-b-[1px] border-neutral-200">
      <Image src="/logo.png" height={53} width={150} alt="Bakhla Tours Logo" />
      <Button className="bg-bakhla-red hover:bg-bakhla-red/90">
        <Phone className="w-4 h-4 mr-2" />
        Contact Us
      </Button>
    </nav>
  );
}

export default Navigation;
