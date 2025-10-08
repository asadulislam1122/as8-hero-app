import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root2 from "../components/Root/Root2";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <p>Lodding...</p>,
    children: [
      {
        index: true,
        loader: () => fetch("/heroData.json"),
        Component: Home,
      },
      { path: "/blog", Component: Blog },
    ],
  },
  {
    path: "/about",
    Component: Root2,
    children: [{ path: "/about", Component: About }],
  },
]);
