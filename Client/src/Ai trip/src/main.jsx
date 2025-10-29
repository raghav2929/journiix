import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from './App.jsx'
import CreateTrip from "./create-trip";
import Header from "./components/custom/Header";
import Viewtrip from "./view-trip/tripid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/create-trip",
    element: <CreateTrip/>
  },
  {
    path:"/view-trip/:tripId",
    element : <Viewtrip/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Header/>
    <RouterProvider router={router} />
  </React.StrictMode>
);