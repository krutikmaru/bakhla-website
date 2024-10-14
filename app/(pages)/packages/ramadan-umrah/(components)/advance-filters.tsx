import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// import { Slider } from "@/components/ui/slider"

interface AdvancedFiltersProps {
  data: any[];
  onFilterChange: (filteredData: any[]) => void;
}

export default function AdvancedFilters({
  data,
  onFilterChange,
}: AdvancedFiltersProps) {
  const [cardId, setCardId] = useState("");
  const [makkahHotels, setMakkahHotels] = useState<string[]>([]);
  const [madinahHotels, setMadinahHotels] = useState<string[]>([]);
  const [duration, setDuration] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500000]);

  const uniqueMakkahHotels = Array.from(
    new Set(data.map((item) => item.hotelMakkah))
  );
  const uniqueMadinahHotels = Array.from(
    new Set(data.map((item) => item.hotelMadinah))
  );

  useEffect(() => {
    const filteredData = data.filter((item) => {
      const cardIdMatch = cardId
        ? item.cardId.toLowerCase().includes(cardId.toLowerCase())
        : true;
      const makkahHotelMatch =
        makkahHotels.length === 0 || makkahHotels.includes(item.hotelMakkah);
      const madinahHotelMatch =
        madinahHotels.length === 0 || madinahHotels.includes(item.hotelMadinah);
      const durationMatch = duration
        ? item.duration.toLowerCase().includes(duration.toLowerCase())
        : true;
      const priceMatch =
        item.price_in_number >= priceRange[0] &&
        item.price_in_number <= priceRange[1];

      return (
        cardIdMatch &&
        makkahHotelMatch &&
        madinahHotelMatch &&
        durationMatch &&
        priceMatch
      );
    });

    onFilterChange(filteredData);
  }, [
    cardId,
    makkahHotels,
    madinahHotels,
    duration,
    priceRange,
    data,
    onFilterChange,
  ]);

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="cardId">Card ID</Label>
        <Input
          id="cardId"
          value={cardId}
          onChange={(e) => setCardId(e.target.value)}
          placeholder="Search by Card ID"
        />
      </div>

      <div>
        <Label>Makkah Hotels</Label>
        <div className="grid grid-cols-2 gap-2">
          {uniqueMakkahHotels.map((hotel) => (
            <div key={hotel} className="flex items-center space-x-2">
              <Checkbox
                id={`makkah-${hotel}`}
                checked={makkahHotels.includes(hotel)}
                onCheckedChange={(checked) => {
                  setMakkahHotels(
                    checked
                      ? [...makkahHotels, hotel]
                      : makkahHotels.filter((h) => h !== hotel)
                  );
                }}
              />
              <Label htmlFor={`makkah-${hotel}`}>{hotel}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label>Madinah Hotels</Label>
        <div className="grid grid-cols-2 gap-2">
          {uniqueMadinahHotels.map((hotel) => (
            <div key={hotel} className="flex items-center space-x-2">
              <Checkbox
                id={`madinah-${hotel}`}
                checked={madinahHotels.includes(hotel)}
                onCheckedChange={(checked) => {
                  setMadinahHotels(
                    checked
                      ? [...madinahHotels, hotel]
                      : madinahHotels.filter((h) => h !== hotel)
                  );
                }}
              />
              <Label htmlFor={`madinah-${hotel}`}>{hotel}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="duration">Duration</Label>
        <Input
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Search by duration"
        />
      </div>

      {/* <div>
        <Label>Price Range</Label>
        <Slider
          min={0}
          max={500000}
          step={1000}
          value={priceRange}
          onValueChange={setPriceRange}
        />
        <div className="flex justify-between mt-2">
          <span>₹{priceRange[0].toLocaleString()}</span>
          <span>₹{priceRange[1].toLocaleString()}</span>
        </div>
      </div> */}
    </div>
  );
}
