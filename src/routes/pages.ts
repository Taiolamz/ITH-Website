import { AboutUs, AllGallery, Career, Contact, Home, Media } from "../pages";

export const pages_route_group = [
  {
    element: Home,
    path: "/home",
  },
  {
    element: Contact,
    path: "/contact",
  },
  {
    element: Media,
    path: "/media",
  },
  {
    element: AllGallery,
    path: "/media/all-gallery",
  },
  {
    element: AboutUs,
    path: "/about-us",
  },
  {
    element: Career,
    path: "/career",
  },
];
