import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./user/context/StoreContext.jsx";
// Service Worker Registration
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) =>
        console.log("SW registered: ", registration.scope),
      )
      .catch((err) => console.log("SW registration failed: ", err));
  });
}

// Render App with Router and Context
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>,
);
