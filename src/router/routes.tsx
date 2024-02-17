import { Navigate, useRoutes } from "react-router-dom";
// layouts
//
import HomePage from "../pages/Home";
import Events from "../pages/Events";
import Places from "../pages/PlaceDetails";
import GridListingsWithLeftSidebar from "../pages/Search";
import ShowListingsWithMap from "../pages/PlaceDetailsWithMap";
import FourZeroFour from "../pages/404/404";

// ----------------------------------------------------------------------
export const authRoutes = {
  admin: ["super_admin"],
  store_owner: ["store_owner"],
  staff_member: ["staff_member"],
};
export default function Router() {
  const isAuthenticated = () => {
    const authToken = localStorage.getItem("accessToken");
    return !!authToken;
  };

  const routes = useRoutes([
    {
      path: "/",
      element: !isAuthenticated() ? <HomePage /> : <Navigate to="/" />,
    },
    {
      path: "events",
      element: <Events />,
    },
    {
      path: "place-details",
      element: <Places />,
    },
    { path: "listing-details", element: <Places /> },
    {
      path: "search",
      element: <GridListingsWithLeftSidebar />,
    },
    {
      path: "show-with-map",
      element: <ShowListingsWithMap />,
    },
    // {
    //   path: "dashboard",
    //   element: isAuthenticated() ? (
    //     <DashboardLayout />
    //   ) : (
    //     <Navigate to="/Login" />
    //   ),
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: "app", element: <DashboardAppPage /> },
    //     { path: "user", element: <UserPage /> },
    //     { path: "product", element: <ProductsPage /> },
    //     { path: "merchant", element: <Merchant /> },
    //     { path: "order", element: <Order /> },
    //     { path: "question", element: <Question /> },
    //     { path: "review", element: <Review /> },
    //     { path: "staff", element: <Staff /> },
    //     { path: "subscription", element: <Subscription /> },
    //     { path: "withdraw", element: <Withdraw /> },
    //   ],
    // },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: "404", element: <Page404 /> },
    //     { path: "*", element: <Navigate to="/404" /> },
    //   ],
    // },
    {
      path: "*",
      element: <FourZeroFour />,
    },
  ]);

  return routes;
}
