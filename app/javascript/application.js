// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from "react";
import { createRoot } from "react-dom";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import store from "./store.js";

document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");
  const app = (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );

  if (root) {
    createRoot(root).render(app);
  }
});