import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { AppProvider } from "./context/AppContext";
import './App.css'

export default function App() {
  return (
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
  );
}
