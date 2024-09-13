import { Video } from "@/lib/types";
import { Triangle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function VideoCard({ video }: { video: Video }) {
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
