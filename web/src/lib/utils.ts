import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchWeatherData() {
  const response = await fetch("http://api.weatherapi.com/v1/current.json");
  const data = await response.json();
  return data;
}
