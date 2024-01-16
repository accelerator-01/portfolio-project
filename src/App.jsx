import { RouterProvider, createBrowserRouter } from "react-router-dom";

import NavBar from "./ui/NavBar";
import Error from "./ui/Error";
import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    errorElement: <Error />,
    nav: <NavBar />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
