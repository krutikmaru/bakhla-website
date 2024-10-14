export type HajjPackage = {
  image: string;
  title: string;
  year: string;
  hotel_makkah: string;
  mouallim_no: string;
  hotel_madinah: string;
  flight_departure: string;
  makkah_shifting?: string;
  price: string;
  price_in_number: number;
  prices: {
    quad: string;
    triple: string;
    double: string;
  };
  arrival: string;
  departure: string;
  duration: string;
  package_id: string;
  show_on_homepage: boolean;
  html_introduction: string;
  html_details: string;
  html_makkah_hotel_details?: string;
  html_madinah_hotel_details?: string;
  html_notes?: string;
};
