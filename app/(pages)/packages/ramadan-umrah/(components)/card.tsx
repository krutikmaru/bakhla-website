import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

interface RamadanUmrahCardProps {
  image: string;
  title: string;
  hotelMakkah: string;
  hotelMadinah: string;
  eid: string;
  price: string;
  duration: string;
  cardId: string;
}

export default function RamadanUmrahCard({
  image,
  title,
  hotelMakkah,
  hotelMadinah,
  eid,
  price,
  duration,
  cardId,
}: RamadanUmrahCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="absolute top-4 left-4 bg-white/80 text-bakhla-red font-semibold px-2 py-1 rounded text-sm">
            Ramadan Umrah
          </div>
          <div className="absolute top-4 right-4 bg-white/80 text-bakhla-red font-semibold px-2 py-1 rounded text-sm">
            {cardId}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <h2 className="text-lg font-semibold text-bakhla-red mb-2 min-h-16">
          {title}
        </h2>
        <div className="space-y-1 text-sm w-full ">
          <p className="w-full flex justify-between items-center">
            <span className="font-medium text-left">Makkah Hotel:</span>{" "}
            <span className="text-right">{hotelMakkah}</span>
          </p>
          <p className="w-full flex justify-between items-center">
            <span className="font-medium text-left">Madinah Hotel:</span>{" "}
            <span className="text-right">{hotelMadinah}</span>
          </p>
          {eid && (
            <p className="w-full flex justify-between items-center">
              <span className="font-medium text-left">Eid:</span>{" "}
              <span className="text-right">{eid}</span>
            </p>
          )}
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold">
            From {price} <span className="text-sm font-normal">per person</span>
          </p>
          <div className="flex items-center mt-1 text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {duration}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <div className="flex justify-between w-full items-center px-4">
          <Link href={`/packages/ramadan-umrah/${cardId}`} className="text-sm">
            Read More
          </Link>
          <Button className="w-1/2 ml-2 bg-bakhla-red hover:bg-bakhla-red/80">
            Book Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
