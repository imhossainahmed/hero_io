import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Installations from "../pages/Installations";
import Apps from "../pages/Apps";
import AppDetails from "../pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {  index: true, element: <Home />, loader: () => fetch('/apps.json') },
      {  path: "apps", element: <Apps />, loader: () => fetch('/apps.json') },
      {
        path: "apps/:id",
        element: <AppDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/apps.json");
          const apps = await res.json();
          const app = apps.find(a => a.id === parseInt(params.id));
          return app || null;
        }
      },
      { path: "installation", element: <Installations /> }
    ],
  },
]);