"use client";

import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FixedWidgets() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isSmallScreen) {
    return <MobileWidgets />;
  }
  return (
    <>
      <Link
        href="https://api.whatsapp.com/send/?phone=%2B919920820751&text&app_absent=0"
        className="bg-green-500 rounded-tr-lg rounded-tl-lg fixed z-20 top-48 -right-[47px] -rotate-90  text-white p-2 flex items-center space-x-2 shadow-lg px-4"
      >
        {/* <MessageCircle className="w-5 h-5" /> */}
        <span className="origin-left  inline-block whitespace-nowrap ">
          WhatsApp us
        </span>
      </Link>
      <button className="bg-bakhla-red rounded-tr-lg rounded-tl-lg fixed z-20 top-[350px] -right-[52px] -rotate-90 text-white p-2 flex items-center space-x-2 shadow-lg px-4">
        {/* <Phone className="w-5 h-5" /> */}
        <span className="origin-left  inline-block whitespace-nowrap ">
          Get a call back
        </span>
      </button>
    </>
  );
}

function MobileWidgets() {
  return (
    <>
      <Link
        href="https://api.whatsapp.com/send/?phone=%2B919920820751&text&app_absent=0"
        className="bg-green-500 w-12 h-12 fixed z-20 bottom-[176px] right-0 text-white  flex items-center justify-center  space-x-2 shadow-lg rounded-tl-md rounded-bl-md"
      >
        <MessageCircle className="w-5 h-5" />
      </Link>
      <button className="bg-white w-12 h-12 fixed z-20 bottom-[112px] right-0 text-white  flex items-center justify-center  space-x-2 shadow-lg rounded-tl-md rounded-bl-md">
        <Image
          width={40}
          height={40}
          src={"/images/book-a-call.png"}
          alt="Book a call"
        />
      </button>

      <Link
        href="tel:+919920820751"
        className="bg-blue-500 w-12 h-12 fixed z-20 bottom-12 right-[0]  text-white  flex  items-center justify-center space-x-2 shadow-lg rounded-tl-md rounded-bl-md"
      >
        <Phone className="w-5 h-5" />
      </Link>
    </>
  );
}
