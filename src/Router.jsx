import { createBrowserRouter } from "react-router";
import App from "./App";
import HomePage from "./pages/Home/Home";
import ErrorPage from "./pages/Error/Error";
import AppsPage from "./pages/Apps/Apps";
import InstallationPage from "./pages/Installation/Installation";
import AppDetailsPage from "./pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
  {
    path: "",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "apps",
        Component: AppsPage,
      },
      {
        path: "installation",
        Component: InstallationPage,
      },
      {
        path: "apps/:appSlug",
        Component: AppDetailsPage,
      },
    ],
  },
]);
