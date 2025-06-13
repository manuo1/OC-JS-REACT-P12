import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/main.scss";
/**
 * Entry point of the React application.
 * Renders the <App /> component inside a React StrictMode wrapper
 * into the DOM element with id "root".
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
