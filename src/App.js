import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortifolioPage from "./pages/PortifolioPage";

const AppLayout = () => {
  return (
    <>
      <NavBar title={"Ivã Stival"} />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/portifolio",
        element: <PortifolioPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
