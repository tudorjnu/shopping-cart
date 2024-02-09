import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
