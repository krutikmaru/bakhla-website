import VideoCard from "@/components/ui/video-card";
import { videos } from "@/lib/data/videos";
import Link from "next/link";
import React from "react";

function Media() {
  return (
    <div className="py-10 px-10 sm:px-20 flex flex-col justify-center items-center max-w-[1900px] mx-auto">
      <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0 mb-2">
        Media
      </h2>
      <Link href={"/media"} className="text-bakhla-red underline ">
        View All
      </Link>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {videos.map((video) => (
          <VideoCard key={video.url} video={video} />
        ))}
      </div>
    </div>
  );
}

export default Media;
