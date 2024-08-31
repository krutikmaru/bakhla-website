import Link from "next/link";
import InfiniteCarousel from "./(components)/carousel";

export default function Home() {
  return (
    <div className="w-screen overflow-hidden">
      <div className="w-screen h-screen bg-landing bg-cover bg-bottom flex flex-col justify-end items-center overflow-hidden pb-20">
        <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-5xl text-bakhla-red uppercase">
          Better Pilgrimage
        </h1>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Explore Our Packages - Hajj | Umrah | Ramadan Umrah
        </h4>
      </div>
      {/* Tour Sliders */}
      <div className="py-6 flex flex-col justify-center items-center">
        <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0 text-bakhla-red">
          Hajj Packages
        </h2>
        <InfiniteCarousel />
        <Link href={"#"} className="text-bakhla-red underline mt-5">
          View All
        </Link>
      </div>
      <div className="py-6 mt-10 flex flex-col justify-center items-center">
        <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0 text-bakhla-red">
          Umrah & Ziyarat Packages
        </h2>
        <InfiniteCarousel />
        <Link href={"#"} className="text-bakhla-red underline mt-5">
          View All
        </Link>
      </div>
      <div className="py-6 mt-10 flex flex-col justify-center items-center">
        <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0 text-bakhla-red">
          Ramadan Umrah Packages
        </h2>
        <InfiniteCarousel />
        <Link href={"#"} className="text-bakhla-red underline mt-5">
          View All
        </Link>
      </div>
    </div>
  );
}
