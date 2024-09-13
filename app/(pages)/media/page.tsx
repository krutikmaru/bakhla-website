import Image from "next/image";
import React from "react";
import { videos } from "@/lib/data/videos";
import VideoCard from "@/components/ui/video-card";

function Page() {
  return (
    <div className="mt-[92px] ">
      <div className="w-full h-[500px] relative flex items-center justify-center">
        <Image
          src="/images/banners/media.webp"
          alt="Ramadan Banner"
          fill
          className="absolute left-0 object-left object-cover"
        />
        <h1 className="scroll-m-20 relative z-10 text-4xl font-extrabold lg:text-5xl text-bakhla-red uppercase">
          MEDIA
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 px-6 sm:px-10 md:px-20 py-10">
        {videos.map((video) => (
          <VideoCard key={video.url} video={video} />
        ))}
      </div>
    </div>
  );
}

export default Page;
