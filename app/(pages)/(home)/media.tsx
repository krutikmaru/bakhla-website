import { Triangle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Video = {
  thumbnail: string;
  title: string;
  url: string;
};

const videos: Video[] = [
  {
    thumbnail:
      "https://bakhlatours.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-31-at-17.44.04_cf71ab36-285x190.webp",
    title:
      "Bakhla Tours & Travels Pvt. Ltd. | Hajj 2024 | Restaurant Highlights",
    url: "https://youtu.be/xCVIDgl-1m4",
  },
  {
    thumbnail:
      "https://bakhlatours.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-31-at-17.44.04_f17bed47-285x190.webp",
    title:
      "Bakhla Tours & Travels Pvt. Ltd., Hajj tours, Umrah tours Client Testimonial",
    url: "https://youtube.com/shorts/qJZg_16FSYg",
  },
  {
    thumbnail:
      "https://bakhlatours.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-31-at-17.44.04_7eae175f-285x190.webp",
    title: "Bakhla Tours & Travels Pvt. Ltd. | Mumbai | Madina Masjid Al Haram",
    url: "https://youtu.be/Vn_kFX8vvu0",
  },
];

function Media() {
  return (
    <div className="py-10 px-10 sm:px-20 flex flex-col justify-center items-center">
      <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0 ">
        Media
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {videos.map((video) => (
          <VideoCard key={video.url} video={video} />
        ))}
      </div>
      <Link href={"#"} className="text-bakhla-red underline ">
        View All
      </Link>
    </div>
  );
}

function VideoCard({ video }: { video: Video }) {
  return (
    <Link
      href={video.url}
      className="h-[220px] w-full rounded-md overflow-hidden relative cursor-pointer group border-2 border-neutral-200"
    >
      <Image
        src={video.thumbnail}
        alt={"Thumbnail"}
        fill
        className="absolute object-cover scale-110 group-hover:scale-100 transition-transform ease-in-out duration-300"
      />
      <div className="absolute w-full h-full flex flex-col justify-center items-center px-5 pb-5  bg-gradient-to-b from-transparent to-black backdrop-blur-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity ease-in-out duration-300">
        <div className="bg-black/20 backdrop-blur-lg  rounded-md p-3">
          <Triangle className="w-5 h-5 rotate-90 text-white" />
        </div>
        <p className="text-center text-neutral-200 font-medium absolute px-5 -bottom-5 opacity-0 group-hover:bottom-5 group-hover:opacity-100 transition-all ease-in-out duration-300 ">
          {video.title}
        </p>
      </div>
    </Link>
  );
}

export default Media;
