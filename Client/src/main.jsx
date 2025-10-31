import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
