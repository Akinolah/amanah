import { RouteObject } from "react-router-dom";
import Index from "@/features/home/pages/HomePage";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Team from "@/pages/Team";
import BookAppointment from "@/pages/BookAppointment";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/book-appointment",
    element: <BookAppointment />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];