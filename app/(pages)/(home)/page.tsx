import Link from "next/link";
import Media from "./media";
import Blogs from "./blogs";
import CardCarousel from "@/components/ui/card-carousel";
import LogoTicker from "./(components)/logo-ticker";
import { cookies } from "next/headers";
import TimelyDialog from "@/components/ui/timely-dialog";
import About from "./(components)/about";
import Contact from "./(components)/contact";

export default function Home() {
  const showPrices = cookies().has("show_prices");
  const hasActiveInquiry = showPrices;
  return (
    <>
      {!hasActiveInquiry && <TimelyDialog />}

      <div className="overflow-x-hidden">
        <div className="h-screen bg-landing bg-cover bg-bottom flex flex-col justify-end items-center overflow-hidden text-center pb-20 px-6 md:px-0 space-y-3 md:space-y-0">
          <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-5xl text-bakhla-red uppercase">
            Better Pilgrimage
          </h1>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Explore Our Packages - Hajj | Umrah | Ramadan Umrah
          </h4>
        </div>
        {/* Tour Sliders */}
        <div className="py-6 flex flex-col justify-center items-center max-w-[1990px] mx-auto">
          <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0 text-bakhla-red">
            Hajj Packages
          </h2>
          <CardCarousel showPrices={showPrices} tour="ramadan-umrah" />

          <Link href={"#"} className="text-bakhla-red underline mt-5">
            View All
          </Link>
        </div>
        <div className="py-6 mt-10 flex flex-col justify-center items-center max-w-[1990px] mx-auto">
          <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0 text-bakhla-red">
            Umrah & Ziyarat Packages
          </h2>
          <CardCarousel showPrices={showPrices} tour="ramadan-umrah" />
          <Link href={"#"} className="text-bakhla-red underline mt-5">
            View All
          </Link>
        </div>
        <div className="py-6 mt-10 flex flex-col justify-center items-center max-w-[1990px] mx-auto">
          <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0 text-bakhla-red">
            Ramadan Umrah Packages
          </h2>
          <CardCarousel showPrices={showPrices} tour="ramadan-umrah" />
          <Link
            href={"/packages/ramadan-umrah"}
            className="text-bakhla-red underline mt-5"
          >
            View All
          </Link>
        </div>
        <Media />
        <Blogs />
        <About />
        <Contact />
        <LogoTicker />
      </div>
    </>
  );
}
