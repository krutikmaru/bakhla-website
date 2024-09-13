import Ticker from "@/components/ui/ticker";
import Image from "next/image";
import React from "react";

const logos = [
  { src: "/images/logos/1.webp", alt: "Vision 2030" },
  { src: "/images/logos/2.webp", alt: "Maqam" },
  { src: "/images/logos/3.webp", alt: "IATA" },
  { src: "/images/logos/4.webp", alt: "AIHUTOA" },
  {
    src: "/images/logos/5.webp",
    alt: "Ministry of Minority Affairs",
  },
  { src: "/images/logos/6.webp", alt: "Umrah Logo" },
  { src: "/images/logos/7.webp", alt: "Ministry Logo" },
];

function LogoTicker() {
  return (
    <div>
      <Ticker
        className="bg-white py-4 border-t border-b border-gray-200"
        duration={40}
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-10">
            <Image src={logo.src} alt={logo.alt} width={120} height={60} />
          </div>
        ))}
      </Ticker>
    </div>
  );
}

export default LogoTicker;
