"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dialog } from "./dialog";
import InquiryDialog from "./inquiry-dialog";
import ramadan_umrah_data from "@/app/(pages)/packages/ramadan-umrah/(utils)/data";
import RamadanUmrahCard from "@/app/(pages)/packages/ramadan-umrah/(components)/card";

const tourTypeDataMapping = {
  "ramadan-umrah": ramadan_umrah_data.filter((pkg) => pkg.show_on_homepage),
};

export default function CardCarousel({
  showPrices,
  tour,
}: {
  showPrices: boolean;
  tour: "ramadan-umrah" | "Umrah";
}) {
  const cards = tourTypeDataMapping[tour as keyof typeof tourTypeDataMapping];
  console.log("cards", cards);
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(cards.length / 2)
  );
  const [direction, setDirection] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const controls = useAnimation();

  const visibleCards = 5;
  const cardWidth = 400;
  const cardGap = 20;
  const totalWidth = cardWidth * visibleCards + cardGap * (visibleCards - 1);
  const dragLimit = cardWidth / 2;

  const moveLeft = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const moveRight = () => {
    if (currentIndex < cards.length - 1) {
      setDirection(1);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleDrag = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const newDragOffset = Math.max(
      Math.min(info.offset.x, dragLimit),
      -dragLimit
    );
    setDragOffset(newDragOffset);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = cardWidth / 4;
    if (dragOffset < -threshold && currentIndex < cards.length - 1) {
      moveRight();
    } else if (dragOffset > threshold && currentIndex > 0) {
      moveLeft();
    } else {
      controls.start({ x: 0 });
    }
    setDragOffset(0);
  };

  useEffect(() => {
    controls.start({ x: 0 });
  }, [currentIndex, controls]);

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    let translateX = diff * (cardWidth + cardGap);

    const scale = 1 - Math.min(Math.abs(diff), 2) * 0.1;
    const opacity = 1 - Math.min(Math.abs(diff), 2) * 0.3;

    return { translateX, scale, opacity };
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden mt-6">
      {/* Side strips */}
      <>
        <div className="absolute w-8 h-full left-0 bg-gradient-to-l from-transparent to-white z-10" />
        <div className="absolute w-8 h-full right-0 bg-gradient-to-r from-transparent to-white z-10" />
      </>
      <div className="flex justify-center items-center min-h-[500px]">
        <AnimatePresence initial={false} custom={direction}>
          {cards.map((card, index) => (
            <motion.div
              key={card.package_id}
              custom={direction}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                ...getCardStyle(index),
                x: dragOffset,
                transition: { duration: 0.5 },
              }}
              className="absolute group flex flex-col items-start justify-start w-[320px] sm:w-[380px] h-full shadow-lg bg-white border-[1px] border-neutral-100 overflow-hidden rounded-[8px] cursor-grab"
              style={{ originX: 0.5, originY: 0.5 }}
              drag="x"
              dragConstraints={{ left: -dragLimit, right: dragLimit }}
              dragElastic={0.2}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
            >
              {tour === "ramadan-umrah" && (
                <RamadanUmrahCard
                  key={index}
                  image={card.image}
                  title={card.title}
                  hotelMakkah={card.hotel_makkah}
                  hotelMadinah={card.hotel_madinah}
                  eid={card.eid}
                  price={card.price}
                  duration={card.duration}
                  cardId={card.package_id}
                  showPrices={showPrices}
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button
        onClick={moveLeft}
        className="absolute z-20 left-12 top-1/2 transform -translate-y-1/2 text-neutral-700 bg-white/50 backdrop-blur-lg rounded-full p-2"
        aria-label="Previous card"
        disabled={currentIndex === 0}
      >
        <ChevronLeft
          style={{ visibility: currentIndex === 0 ? "hidden" : "visible" }}
          className="w-6 h-6"
        />
      </button>
      <button
        onClick={moveRight}
        className="absolute z-20 right-12 top-1/2 transform -translate-y-1/2 text-neutral-700 bg-white/50 backdrop-blur-lg rounded-full p-2"
        aria-label="Next card"
        disabled={currentIndex === cards.length - 1}
      >
        <ChevronRight
          style={{
            visibility:
              currentIndex === cards.length - 1 ? "hidden" : "visible",
          }}
          className="w-6 h-6"
        />
      </button>
    </div>
  );
}
