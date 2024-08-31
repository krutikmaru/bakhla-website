"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function InfiniteCarousel() {
  const items = ["1", "2", "3", "4", "5", "6"];
  // Manually set to 3, fix this and make dynamic using .length/2
  const [currentIndex, setCurrentIndex] = useState(3);
  const totalItems = items.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const getItemStyles = (index: number) => {
    const offset = (index - currentIndex + totalItems) % totalItems;
    if (offset === 0) {
      return { scale: 1, opacity: 1 };
    } else if (offset === 1 || offset === -1) {
      return { scale: 0.9, opacity: 0.7 };
    } else {
      return { scale: 0.8, opacity: 0.5 };
    }
  };

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden">
      <button
        className="absolute left-10 z-10 p-2 text-neutral-700 bg-white/50 backdrop-blur-lg rounded-full"
        onClick={handlePrev}
      >
        <ChevronLeft size={24} />
      </button>

      <div className="flex items-start  justify-center w-full min-h-[600px] pt-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="absolute h-fit "
            initial={false}
            animate={{
              scale: getItemStyles(index).scale,
              opacity: getItemStyles(index).opacity,
              x: `${(index - currentIndex) * 100}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="group w-[350px] sm:w-[380px] min-h-[500px]  shadow-lg bg-white border-[1px] border-neutral-100 overflow-hidden rounded-[8px] flex flex-col items-start justify-start">
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
                    <span className="text-neutral-600">
                      BOM | Saudi Airlines
                    </span>
                  </div>
                </div>
                <div className="my-4 text-sm text-black font-semibold">
                  From <span className="text-bakhla-red">₹8,65,000</span> Per
                  Person
                </div>
                <div className="text-sm text-neutral-600 font-semibold flex items-center">
                  <Clock className="mr-2 w-4 h-4" />
                  13 Days
                </div>
                <div className="py-3 mt-5 border-t-[1px] border-neutral-300 w-full flex justify-between items-center">
                  <Link href="#" className="text-bakhla-red">
                    Read More
                  </Link>
                  <Button className="bg-bakhla-red hover:bg-bakhla-red/90">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        className="absolute right-10 z-10 p-2 text-neutral-700 bg-white/50 backdrop-blur-lg rounded-full"
        onClick={handleNext}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default InfiniteCarousel;

// import React, { useEffect, useState } from "react";
// import { motion, useMotionValue } from "framer-motion";

// const imgs = [
//   "/imgs/nature/1.jpg",
//   "/imgs/nature/2.jpg",
//   "/imgs/nature/3.jpg",
//   "/imgs/nature/4.jpg",
//   "/imgs/nature/5.jpg",
//   "/imgs/nature/6.jpg",
//   "/imgs/nature/7.jpg",
// ];

// const ONE_SECOND = 1000;
// const AUTO_DELAY = ONE_SECOND * 10;
// const DRAG_BUFFER = 50;

// const SPRING_OPTIONS = {
//   type: "spring",
//   mass: 3,
//   stiffness: 400,
//   damping: 50,
// };

// const SwipeCarousel = () => {
//   const [imgIndex, setImgIndex] = useState(0);

//   const dragX = useMotionValue(0);

//   useEffect(() => {
//     const intervalRef = setInterval(() => {
//       const x = dragX.get();

//       if (x === 0) {
//         setImgIndex((pv) => {
//           if (pv === imgs.length - 1) {
//             return 0;
//           }
//           return pv + 1;
//         });
//       }
//     }, AUTO_DELAY);

//     return () => clearInterval(intervalRef);
//   }, []);

//   const onDragEnd = () => {
//     const x = dragX.get();

//     if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
//       setImgIndex((pv) => pv + 1);
//     } else if (x >= DRAG_BUFFER && imgIndex > 0) {
//       setImgIndex((pv) => pv - 1);
//     }
//   };

//   return (
//     <div className="relative overflow-hidden bg-neutral-950 py-8">
//       <motion.div
//         drag="x"
//         dragConstraints={{
//           left: 0,
//           right: 0,
//         }}
//         style={{
//           x: dragX,
//         }}
//         animate={{
//           translateX: `-${imgIndex * 100}%`,
//         }}
//         transition={SPRING_OPTIONS}
//         onDragEnd={onDragEnd}
//         className="flex cursor-grab items-center active:cursor-grabbing"
//       >
//         <Images imgIndex={imgIndex} />
//       </motion.div>

//       <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
//       <GradientEdges />
//     </div>
//   );
// };

// const Images = ({ imgIndex }: { imgIndex: number }) => {
//   return (
//     <>
//       {imgs.map((imgSrc, idx) => {
//         return (
//           <motion.div
//             key={idx}
//             style={{
//               backgroundImage: `url(${imgSrc})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//             animate={{
//               scale: imgIndex === idx ? 0.95 : 0.85,
//             }}
//             transition={SPRING_OPTIONS}
//             className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover"
//           />
//         );
//       })}
//     </>
//   );
// };

// const Dots = ({
//   imgIndex,
//   setImgIndex,
// }: {
//   imgIndex: number;
//   setImgIndex: (num: number) => void;
// }) => {
//   return (
//     <div className="mt-4 flex w-full justify-center gap-2">
//       {imgs.map((_, idx) => {
//         return (
//           <button
//             key={idx}
//             onClick={() => setImgIndex(idx)}
//             className={`h-3 w-3 rounded-full transition-colors ${
//               idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
//             }`}
//           />
//         );
//       })}
//     </div>
//   );
// };

// const GradientEdges = () => {
//   return (
//     <>
//       <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
//       <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
//     </>
//   );
// };

// export default SwipeCarousel;
