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
  name: string;
  displayTitle: string;
  image: string;
  id: string;
  priceFormatted: string;
  title: {
    date: string;
    duration: string;
    type: string;
  };
  category: string;
  mouallim: string;
  departure: string;
  summary: string;
  duration: string;
  hotelMakkah: string;
  hotelMadinah: string;
  foodMenu: string;
  eid: string;
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

export type Video = {
  thumbnail: string;
  title: string;
  url: string;
};

export type Blog = {
  title: string;
  description: string;
  image: string;
  url: string;
  author: string;
  date: string;
};
