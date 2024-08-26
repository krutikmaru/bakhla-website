export type Hotel = {
  name: string;
  value: string;
  description: string;
  location: string;
  address: string;
  media: Media[];
};

export type Media = {
  type: "image" | "video";
  src: string;
};

export type Package = {
  id: string;
  title: {
    date: string;
    duration: string;
    type: string;
  };
  category: string;
  summary: string;
  duration: string;
  hotelMakkah: string;
  hotelMadinah: string;
  foodMenu: string;
  Eid: string;
  startDate: string;
  endDate: string;
  startHijri: string;
  endHijri: string;
};

type Amenity = {
  title: string;
  icon: string;
  description: string;
  type: "inclusion" | "exclusion";
};
