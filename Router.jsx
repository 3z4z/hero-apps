import { createBrowserRouter } from "react-router";
import App from "./src/App";
import HomePage from "./src/pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "",
    Component: App,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);
