export interface HourEntry {
  day: string;
  opening: string;
  closing: string;
}

export const openingHours: HourEntry[] = [
  { day: "Monday", opening: "7:00 AM", closing: "7:00 PM" },
  { day: "Tuesday", opening: "7:00 AM", closing: "7:00 PM" },
  { day: "Wednesday", opening: "7:00 AM", closing: "7:00 PM" },
  { day: "Thursday", opening: "7:00 AM", closing: "8:00 PM" },
  { day: "Friday", opening: "7:00 AM", closing: "9:00 PM" },
  { day: "Saturday", opening: "8:00 AM", closing: "9:00 PM" },
  { day: "Sunday", opening: "8:00 AM", closing: "6:00 PM" }
];
