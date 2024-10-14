export type RamadanUmrahPackage = {
  image: string;
  title: string;
  year: string;
  hotel_makkah: string;
  hotel_madinah: string;
  eid: string;
  price: string;
  prices: {
    quad: string;
    triple: string;
    double: string;
  };
  start_date: string;
  end_date: string;
  start_hijri: string;
  end_hijri: string;
  price_in_number: number;
  duration: string;
  package_id: string;
  show_on_homepage: boolean;
  html_introduction: string;
};
