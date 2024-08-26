import { Amenity } from "../types";

const amenities: Amenity[] = [
  {
    title: "Umrah Visa",
    icon: "/images/icons/visa.png",
    description:
      "Bakhla Tours & Travels Pvt. Ltd. will process the Umrah Visa application and processing, saving you time and hassle. Just provide us with a few requirements and you are good to go.",
    type: "inclusion",
  },
  {
    title: "Umrah Kit",
    icon: "/images/icons/kit.png",
    description:
      "An Umrah kit will be provided that contains essential items for the journey, such as Different essential bags, 3-point Travel Adapter, and more.",
    type: "inclusion",
  },
  {
    title: "Stay",
    icon: "/images/icons/transportation.png",
    description:
      "Stay in hotels close to the Haram in Makkah and Madina, as per your booked package. 7 nights stay in each city, provides enough time to perform your prayers & rituals or to explore the city.",
    type: "inclusion",
  },
  {
    title: "Zam Zam 5 Liters",
    icon: "/images/icons/zam-zam.png",
    description:
      "Receive a 5-litre bottle of Zam-Zam water as a return gift from us. Drink from it or bring it back home with you.",
    type: "inclusion",
  },
  {
    title: "Sehri & Iftar",
    icon: "/images/icons/buffet.png",
    description: "Sehri & Iftar, Buffet Indian Food.",
    type: "inclusion",
  },
  {
    title: "Ziyarat of Makkah & Madinah",
    icon: "/images/icons/ziyarat-makkah.png",
    description:
      "Visit the local historical and religious places in Makkah and Madina, assisted by a knowledgeable guide to accompany you and explain the significance of each site.",
    type: "inclusion",
  },
  {
    title: "Laundry",
    icon: "/images/icons/laundry.png",
    description:
      "Don't worry about washing clothes during your holy journey. Laundry services will be provided, free of charge.",
    type: "inclusion",
  },
  {
    title: "Ticket",
    icon: "/images/icons/ticket.png",
    description:
      "Round-trip flights from one of our preferred partners. Travel with reputable airlines that offer quality services and comfort.",
    type: "exclusion",
  },
  {
    title: "Room Service",
    icon: "/images/icons/room-service.png",
    description:
      "Room service is the service of delivering food, drinks, or other items to your hotel room, which is not included in the Umrah package and has to be paid directly to the hotel on a per-use basis.",
    type: "exclusion",
  },
  {
    title: "Porter Service",
    icon: "/images/icons/porter-service.png",
    description:
      "Porter Service for pilgrims at the Airport is not included in the Package and has to be paid to the Airport staff directly.",
    type: "exclusion",
  },
  {
    title: "GST & TCS",
    icon: "/images/icons/tax.png",
    description:
      "5% GST & 5% TCS are applicable taxes not included in your Umrah Package Price, levied by the Indian Government and can be claimed from the Govt at the time of Filing IT return.",
    type: "exclusion",
  },
  {
    title: "Individual Transfer",
    icon: "/images/icons/car.png",
    description:
      "All private transportation services arranged for individual use are not included in the package. They may be more comfortable than group transfers but are costly.",
    type: "exclusion",
  },
  {
    title: "Excess Baggage",
    icon: "/images/icons/baggage.png",
    description:
      "Luggage over the weight limit is charged extra by the Airlines and has to be paid directly at the counter.",
    type: "exclusion",
  },
];

export default amenities;
