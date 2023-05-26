import { useUniqueId } from "../hooks/useId";
import React from "react";
// import HomePage from "../pages/home";
const HomePage = React.lazy(() => import("../pages/home"));
// import PropertiesPage from "../pages/properties";
const PropertiesPage = React.lazy(() => import("../pages/properties"));

const item = [
  {
    id: useUniqueId,
    title: "Home",
    path: "/home",
    element: (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <HomePage />
      </React.Suspense>
    ),
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Properties",
    path: "/properties",
    element: (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <PropertiesPage />
      </React.Suspense>
    ),
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Sign In",
    path: "/signin",
    element: <h1>Sign In Page </h1>,
    private: false,
    hidden: true,
  },
];

export default item;
