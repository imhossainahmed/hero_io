import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Installations from "../pages/installations";
import Apps from "../pages/apps";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />
      },
      {
        path: "/installation",
        element: <Installations />
      }
    ],
  },
]);
