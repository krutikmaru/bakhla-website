"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dialog } from "./dialog";
import InquiryDialog from "./inquiry-dialog";

interface Card {
  id: number;
  content: string;
}

const cards: Card[] = [
  { id: 1, content: "1" },
  { id: 2, content: "2" },
  { id: 3, content: "3" },
  { id: 4, content: "4" },
  { id: 5, content: "5" },
  { id: 6, content: "6" },
];

export default function CardCarousel({ showPrices }: { showPrices: boolean }) {
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
              key={card.id}
              custom={direction}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                ...getCardStyle(index),
                x: dragOffset,
                transition: { duration: 0.5 },
              }}
              className="absolute group flex flex-col items-start justify-start w-[350px] sm:w-[380px] h-full shadow-lg bg-white border-[1px] border-neutral-100 overflow-hidden rounded-[8px] cursor-grab"
              style={{ originX: 0.5, originY: 0.5 }}
              drag="x"
              dragConstraints={{ left: -dragLimit, right: dragLimit }}
              dragElastic={0.2}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
            >
              <Card showPrices={showPrices} />
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

function Card({ showPrices }: { showPrices: boolean }) {
  const [open, setOpen] = useState<boolean>(false);
  const [submissionActive, setSubmissionActive] = useState<boolean>(false);
  useEffect(() => {
    if (!showPrices) {
      setSubmissionActive(true);
    }
  }, [showPrices]);
  return (
    <>
      <div className="w-full h-[200px] relative overflow-hidden">
        <Image
          src="/images/banners/landing.webp"
          alt="Image"
          fill
          className="absolute object-cover scale-110 group-hover:scale-100 transition-transform ease-in-out duration-200"
        />
      </div>
      <div className="pt-5 px-7 flex flex-col justify-start items-start">
        <h4 className="scroll-m-20 mb-4 text-xl font-semibold tracking-tight text-bakhla-red">
          Hajj 2024 GOLD PACKAGE NON-SHIFTING SHORT TOUR (TOUR NO HT-01)
        </h4>
        <div className="flex flex-col w-full justify-start items-start text-black text-sm space-y-1">
          <div className="w-full flex justify-between items-center ">
            <span className="font-semibold">Mouallim No.</span>
            <span className="text-neutral-600">Category-D</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="font-semibold">Makkah Hotel</span>
            <span className="text-neutral-600">Snood Ajyad</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="font-semibold">Madinah Hotel</span>
            <span className="text-neutral-600">Ritz Al Madinah</span>
          </div>
          <div className="w-full flex justify-between items-center">
            <span className="font-semibold">Flight Departure</span>
            <span className="text-neutral-600">BOM | Saudi Airlines</span>
          </div>
        </div>
        <div className="my-4 text-sm text-black font-semibold">
          {showPrices && (
            <>
              From <span className="text-bakhla-red">₹8,65,000</span> Per Person
            </>
          )}
        </div>
        <div className="text-sm text-neutral-600 font-semibold flex items-center">
          <Clock className="mr-2 w-4 h-4" />
          13 Days
        </div>
        <div className="py-3 mt-5 border-t-[1px] border-neutral-300 w-full flex justify-between items-center">
          <Link href="#" className="text-bakhla-red">
            Read More
          </Link>
          <Dialog
            open={open}
            onOpenChange={(isOpen) => {
              if (!isOpen) {
                setOpen(false);
                // On closing, it was giving a switch to dialog with previous submission made alert for a fraction of time.
                setTimeout(() => setSubmissionActive(false), 500);
              }
            }}
          >
            <Button
              onClick={() => setOpen(true)}
              className="bg-bakhla-red hover:bg-bakhla-red/90"
            >
              Book Now
            </Button>
            <InquiryDialog
              submissionActive={submissionActive}
              setSubmissionActive={setSubmissionActive}
              setOpen={setOpen}
            />
          </Dialog>
        </div>
      </div>
    </>
  );
}
