import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./styles/global.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@fontsource-variable/montserrat";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Home from "./routes/home";
import ErrorPage from "./error-page";
import Root from "./routes/root";
import Products, { Product } from "./routes/products";
import Cart from "./routes/cart";

library.add(fas, fab);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <Products />,
        path: "/products",
      },
      {
        element: <Product />,
        path: "/products/:productId",
      },
      {
        element: <Cart />,
        path: "/cart",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
