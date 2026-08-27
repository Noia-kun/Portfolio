import dtr1 from "../assets/screenshots/dtr-1.webp";
import mis1 from "../assets/screenshots/mis-1.webp";
import mis2 from "../assets/screenshots/mis-2.webp";
import mis3 from "../assets/screenshots/mis-3.webp";
import mis4 from "../assets/screenshots/mis-4.webp";
import mis5 from "../assets/screenshots/mis-5.webp";
import mis6 from "../assets/screenshots/mis-6.webp";
import mis7 from "../assets/screenshots/mis-7.webp";
import mis8 from "../assets/screenshots/mis-8.webp";
import mis9 from "../assets/screenshots/mis-9.webp";
import mis10 from "../assets/screenshots/mis-10.webp";
import weather1 from "../assets/screenshots/weather-1.webp";

export interface ScreenshotItem {
  id: string;
  image: string;
  alt: string;
  title: string;
}

export const screenshots: ScreenshotItem[] = [
  {
    id: "dtr-1",
    image: dtr1,
    alt: "DTR Attendance System interface",
    title: "DTR Attendance System",
  },
  {
    id: "mis-1",
    image: mis1,
    alt: "MIS Office Inventory System — system access panel",
    title: "MIS Office Inventory System",
  },
  {
    id: "mis-2",
    image: mis2,
    alt: "MIS Office Inventory System — login page",
    title: "MIS Office Inventory System",
  },
  {
    id: "mis-3",
    image: mis3,
    alt: "MIS Office Inventory System — IT dashboard",
    title: "MIS Office Inventory System",
  },
  {
    id: "mis-4",
    image: mis4,
    alt: "MIS Office Inventory System — IT inventory",
    title: "MIS Office Inventory System",
  },
  {
    id: "mis-5",
    image: mis5,
    alt: "MIS Office Inventory System — IT room scheduler",
    title: "MIS Office Inventory System",
  },
  {
    id: "mis-6",
    image: mis6,
    alt: "MIS Office Inventory System — IT backlogs",
    title: "MIS Office Inventory System",
  },
  {
    id: "mis-7",
    image: mis7,
    alt: "MIS Office Inventory System — public room reservations",
    title: "MIS Office Inventory System",
  },
  {
    id: "mis-8",
    image: mis8,
    alt: "MIS Office Inventory System — Admin dashboard",
    title: "MIS Office Inventory System",
  },
  {
    id: "mis-9",
    image: mis9,
    alt: "MIS Office Inventory System — Admin leave requests",
    title: "MIS Office Inventory System",
  },
  {
    id: "mis-10",
    image: mis10,
    alt: "MIS Office Inventory System — Admin inventory",
    title: "MIS Office Inventory System",
  },
  {
    id: "weather-1",
    image: weather1,
    alt: "Weather App forecast dashboard",
    title: "Weather App",
  },
];