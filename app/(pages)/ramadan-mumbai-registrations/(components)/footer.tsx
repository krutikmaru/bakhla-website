import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-black py-12 px-24 text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between space-x-0 space-y-10 lg:space-y-0 lg:space-x-20 pb-5">
        <div className="w-full lg:w-[400px] flex flex-col items-center lg:items-start">
          <Image
            src="/logo-full-white.png"
            height={53}
            width={200}
            alt="Bakhla Tours Logo"
          />
          <p className="leading-7 [&:not(:first-child)]:mt-2 text-neutral-400 text-sm text-center md:text-left">
            We at Bakhla Tours & Travels Pvt. Ltd. are serving pilgrims from the
            last 3 decades (30 years) with the help of the founder of our
            company, Mr. Rashid Ahmed Bakhla who established this company in
            1989 .
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-10 lg:space-y-0 space-x-0 lg:space-x-10">
          {/* Phone */}
          <div className="w-full flex flex-col space-y-2 justify-start items-center lg:items-start  text-sm">
            <div className="flex justify-center items-center w-fit p-3 bg-bakhla-red rounded-md">
              <Phone />
            </div>
            <h5 className="scroll-m-20 font-medium tracking-tight">Call Us</h5>
            <Link
              href="tel:+91 9920820751"
              className=" hover:text-bakhla-red text-nowrap transition-colors duration-200 ease-out text-neutral-400"
            >
              +91 9920820751
            </Link>
          </div>
          {/* Mail */}
          <div className="w-full flex flex-col space-y-2 justify-start items-center lg:items-start  text-sm">
            <div className="flex justify-center items-center w-fit p-3 bg-bakhla-red rounded-md">
              <Mail />
            </div>
            <h5 className="scroll-m-20 font-medium tracking-tight">
              Write to us
            </h5>
            <Link
              href="mailto:sales@bakhlatours.com"
              className=" hover:text-bakhla-red transition-colors duration-200 ease-out text-neutral-400"
            >
              sales@bakhlatours.com
            </Link>
          </div>
          {/* Address */}
          <div className="w-full flex flex-col space-y-2 justify-start items-center lg:items-start  text-sm">
            <div className="flex justify-center items-center w-fit p-3 bg-bakhla-red rounded-md">
              <MapPin />
            </div>
            <h5 className="scroll-m-20 font-medium tracking-tight">Address</h5>
            <address className="text-neutral-400 text-center lg:text-left w-full lg:w-[300px]">
              Shop Number 20, Haroon Manzil, B Block, 147, Imamwada Road, Bhendi
              Bazaar, Mumbai, Maharashtra 400009
            </address>
          </div>
        </div>
      </div>
      <div className="w-full text-center md:text-left border-t-[1px] border-neutral-800 text-neutral-400 py-5">
        ©{new Date().getFullYear()} Bakhla Tours & Travels Pvt. Ltd. 2020. All
        Rights Reserved. <Link href={"#"}>Bakhlatours.com</Link> |{" "}
        <Link href="#">Disclaimer</Link> | <Link href="#">Privacy Policy</Link>
      </div>
    </div>
  );
}

export default Footer;
