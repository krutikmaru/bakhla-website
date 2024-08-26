import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="h-[300px] sm:h-[500px] w-full relative">
      <Image
        src="/images/banners/ramadan-banner.webp"
        alt="Ramadan Banner"
        fill
        className="absolute left-0 object-left object-cover"
      />
    </div>
  );
}

export default Banner;
