import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root2 from "../components/Root/Root2";
import ErrorPage2 from "../Pages/ErrorPage/ErrorPage2";
import AppDtails from "../Pages/AppDtails/AppDtails";
import Root3 from "../components/Root/Root3";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: (
      <>
        <Navbar />
        <ErrorPage />
        <Footer />
      </>
    ),
    hydrateFallbackElement: <p>Loading....</p>,
    children: [
      {
        index: true,
        loader: () => fetch("/heroData.json"),
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },

  {
    path: "/about",
    Component: Root2,
    children: [{ path: "/about", Component: About }],
  },
  {
    path: "/appcard/:id",
    element: <Root3 />,
    errorElement: (
      <>
        <Navbar />
        <ErrorPage2 />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/appcard/:id",
        element: <AppDtails />,
      },
    ],
  },
]);
