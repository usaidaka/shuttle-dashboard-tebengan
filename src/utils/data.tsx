import { FaUser, FaRoute } from "react-icons/fa";
import { FaClipboardList, FaMoneyBills } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { PiCarProfileFill, PiSteeringWheelFill } from "react-icons/pi";
import { RiCoupon3Fill } from "react-icons/ri";
import { Menu, Recap } from "./definition";

export const Menus: Menu[] = [
  {
    title: "User List",
    icon: <FaUser />,
    to: "/",
  },
  {
    title: "Driver List",
    icon: <PiSteeringWheelFill />,
    to: "/driver-list",
  },
  {
    title: "Route List",
    icon: <FaRoute />,
    to: "/route-list",
  },
  {
    title: "Voucher Catalogue",
    icon: <RiCoupon3Fill />,
    to: "/voucher-catalogue",
  },
  {
    title: "Trip List",
    icon: <PiCarProfileFill />,
    to: "/trip-list",
  },
  {
    title: "Booking List",
    icon: <FaClipboardList />,
    to: "/booking-list",
  },
  {
    title: "All Transaction",
    icon: <FaMoneyBills />,
    to: "/all-transaction",
  },
  {
    title: "Ride List",
    icon: <IoDocumentText />,
    to: "/ride-list",
  },
];

export const Recaps: Recap[] = [
  {
    count: 456,
    title: "Total Users",
  },
  {
    count: 396,
    title: "Active Users",
  },
  {
    count: 123,
    title: "Recent Users",
  },
  {
    count: 60,
    title: "Inactive Users",
  },
  {
    count: 60,
    title: "Lead Users",
  },
];
