// import { path } from "framer-motion/client";
import {
  FacebookIcon,
  InstaIcon,
  LinkedinIcon,
  TwitterIcon,
} from "../../../assets/icons";

export const footer = [
  {
    label: "About Us",
    path: "/about-us",
  },
  {
    label: "Subsidiaries",
    drop: [
      {
        label: "IT Horizons",
        path: "https://ithorizonsgroup.com/",
      },
      {
        label: "Zojatech",
        path: "https://zojatech.com/",
      },
      {
        label: "Zojapay",
        path: "https://zojapay.com/",
      },
    ],
  },
  {
    label: "Media",
    path: "/media",
  },
  {
    label: "Career",
    path: "/career",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const socials = [
  {
    label: "facebook",
    icon: FacebookIcon,
    path: "#",
  },
  {
    label: "instagram",
    icon: InstaIcon,
    path: "#",
  },
  {
    label: "instagram",
    icon: LinkedinIcon,
    path: "#",
  },
  {
    label: "twitter",
    icon: TwitterIcon,
    path: "#",
  },
];
