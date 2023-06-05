import { useUniqueId } from "../hooks/useId";
import React from "react";
import RegisterPage from "../pages/register";
import SignIn from "../components/signin";
// import SignIn from "../components/signin";
// import HomePage from "../pages/home";
const HomePage = React.lazy(() => import("../pages/home"));
// import PropertiesPage from "../pages/properties";
const PropertiesPage = React.lazy(() => import("../pages/properties"));
const HouseToolsPage = React.lazy(() => import("../pages/houseTools"));
const FavouritePage = React.lazy(() => import("../pages/favourite"));
const MyProfilePage = React.lazy(() => import("../pages/myprofile"));
const NewHousePage = React.lazy(() => import("../pages/newHouse"));

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
    title: "House Tools",
    path: "/properties/:id",
    element: (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <HouseToolsPage />
      </React.Suspense>
    ),
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Register",
    path: "/register",
    element: (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <RegisterPage />
      </React.Suspense>
    ),
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Favourite Page",
    path: "/favourites",
    element: (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <FavouritePage />
      </React.Suspense>
    ),
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "MY Profile",
    path: "/myprofile",
    element: (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <MyProfilePage />
      </React.Suspense>
    ),
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "New House Page",
    path: "/myprofile/newhouse",
    element: (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <NewHousePage />
      </React.Suspense>
    ),
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "New House Page",
    path: "/myprofile/edithouse/:id",
    element: (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <NewHousePage />
      </React.Suspense>
    ),
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Sign In",
    path: "/signin",
    element: <SignIn />,
    private: false,
    hidden: true,
  },
];

export default item;
