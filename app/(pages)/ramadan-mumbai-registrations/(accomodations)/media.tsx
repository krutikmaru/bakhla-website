"use client";
import React, { useState } from "react";
import { Media as MediaType } from "@/lib/types";
import { clsx } from "clsx";
import Image from "next/image";

type MediaProps = {
  media: MediaType[];
};

function Media({ media }: MediaProps) {
  const [current, setCurrent] = useState<MediaType>(media[0]);

  const getYoutubeId = (url: string) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    );
    return match ? match[1] : null;
  };

  return (
    <div className="mt-10 flex flex-col md:flex-row space-x-0 space-y-5 md:space-x-5 md:space-y-0 items-stretch">
      {/* Carousel */}
      <div className="flex flex-row md:flex-col space-y-0 space-x-4 md:space-y-2 md:space-x-0 overflow-x-scroll md:overflow-x-visible p-2">
        {media.map((m) => (
          <div
            key={m.src}
            onClick={() => setCurrent(m)}
            className={clsx(
              "min-w-[128px] max-w-[128px] h-32 rounded-md cursor-pointer relative overflow-hidden",
              m.src === current.src && "outline outline-4 outline-bakhla-red"
            )}
          >
            {m.type === "image" ? (
              <Image
                src={m.src}
                alt="Media"
                fill
                className="absolute object-cover"
              />
            ) : (
              <Image
                src={`https://img.youtube.com/vi/${getYoutubeId(m.src)}/0.jpg`}
                alt="YouTube Thumbnail"
                fill
                className="absolute object-cover"
              />
            )}
          </div>
        ))}
      </div>
      <div className="w-full h-[500px] md:h-auto rounded-md relative overflow-hidden">
        {current.type === "image" ? (
          <Image
            src={current.src}
            alt="Media"
            fill
            className="absolute object-cover"
          />
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${getYoutubeId(
              current.src
            )}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute object-cover"
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default Media;
