"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(cards.length / 2)
  );
  const [direction, setDirection] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const controls = useAnimation();

  const visibleCards = 5;
  const cardWidth = 200;
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
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden py-24">
      <div className="flex justify-center items-center h-[300px]">
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
              className="absolute flex items-center justify-center w-[200px] h-[250px] bg-primary text-primary-foreground rounded-lg shadow-lg cursor-grab"
              style={{ originX: 0.5, originY: 0.5 }}
              drag="x"
              dragConstraints={{ left: -dragLimit, right: dragLimit }}
              dragElastic={0.2}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
            >
              <span className="text-4xl font-bold">{card.content}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <button
        onClick={moveLeft}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2 focus:outline-none"
        aria-label="Previous card"
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={moveRight}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-2 focus:outline-none"
        aria-label="Next card"
        disabled={currentIndex === cards.length - 1}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
