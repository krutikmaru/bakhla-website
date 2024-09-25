import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";

export default function Footer() {
  return (
    <footer className="bg-[#121921] text-white py-12">
      <div className="container mx-auto px-6 sm:px-10 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Image
              src="/logo-full-white.png"
              alt="Bakhla Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
              About Bakhla Tours & Travels Pvt. Ltd.
            </h4>

            <p className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400">
              We have been serving pilgrims for over 35 years, providing
              exceptional service since 1989, thanks to the vision of our
              founder, Mr. Rashid Ahmed Bakhla.{" "}
              <Link
                href="#"
                className="text-red-500 hover:text-bakhla-red transition-all duration-300 ease-in-out"
              >
                Learn more about our journey and offerings.
              </Link>
            </p>

            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight my-4">
              Follow us
            </h4>
            <div className="flex space-x-3">
              <Link
                href="https://api.whatsapp.com/send/?phone=%2B919920820751&text&app_absent=0"
                className="bg-neutral-700 rounded-full p-2"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.facebook.com/bakhlatours/"
                className="bg-neutral-700 rounded-full p-2"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/bakhla.tours/"
                className="bg-neutral-700 rounded-full p-2"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://twitter.com/BakhlaTravels"
                className="bg-neutral-700 rounded-full p-2"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.youtube.com/@bakhlatours"
                className="bg-neutral-700 rounded-full p-2"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/bakhlatours/"
                className="bg-neutral-700 rounded-full p-2"
              >
                <Linkedin size={20} />
              </Link>
              {/* <Link href="#" className="bg-red-600 p-2 rounded-full"><Pinterest size={20} /></Link> */}
            </div>
          </div>

          {/* Packages Section */}
          <div>
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight my-4">
              Packages
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/packages/hajj"
                  className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
                >
                  Hajj
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/ramadan"
                  className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
                >
                  Ramadan Umrah
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/umrah"
                  className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
                >
                  Umrah
                </Link>
              </li>
              <li>
                <Link
                  href="/packages/ziyarat"
                  className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
                >
                  Ziyarat
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight my-4">
              Useful links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
                >
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
                >
                  Our Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
                >
                  Testimonial
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
                >
                  Site Map
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight my-4">
              Get In Touch With Us
            </h4>

            <Link
              href="tel:+919920820751"
              className="mb-2 flex leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
            >
              +91 9920820751
            </Link>
            <Link
              href="mailto:sales@bakhlatours.com"
              className="mb-4 flex leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
            >
              sales@bakhlatours.com
            </Link>
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight my-4">
              Bakhla Tours & Travels Pvt. Ltd.
            </h4>

            <p className="text-sm mb-4 flex leading-7 [&:not(:first-child)]:my-2 text-neutral-400">
              would love your feedback.
              <br />
              Post a review to our profile.
              <br />
              <Link
                href="#"
                className="text-red-500 hover:text-bakhla-red transition-all duration-300 ease-in-out"
              >
                Click Here
              </Link>
            </p>
            <h4 className="scroll-m-20 text-lg font-semibold tracking-tight my-4">
              Newsletter
            </h4>
            <form className="flex">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="number"
                  placeholder="Number"
                  className="bg-[#1d2835] border-[#243141] ring-[#243141] outline-[#243141]"
                  min={0}
                />
                <Button
                  type="submit"
                  className="bg-bakhla-red hover:bg-bakhla-red/90"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
        <Link
          href="#"
          className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out mr-4"
        >
          Disclaimer
        </Link>
        <Link
          href="#"
          className="leading-7 [&:not(:first-child)]:my-2 text-neutral-400 hover:text-bakhla-red transition-all duration-300 ease-in-out"
        >
          Privacy Policy
        </Link>
        <p className="mt-2 leading-7 [&:not(:first-child)]:my-2 text-neutral-400">
          &copy;2024 Copyright Bakhla Tours & Travels Pvt. Ltd. 2020. All Right
          Reserved.
        </p>
      </div>
    </footer>
  );
}
