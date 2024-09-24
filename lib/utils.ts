import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(number: number) {
  if (!number) return undefined;
  let formattedNumber;
  const numberString = number.toString();
  const groups = numberString.split(/(?=(?:\d{3})+$)/);
  formattedNumber = "₹ " + groups.join(",");

  return formattedNumber;
}

export function capitalizeWords(str: string) {
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}
