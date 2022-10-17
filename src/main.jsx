import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import StyleProvider from "./Styled/StyleProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyleProvider />
    <App />
  </React.StrictMode>
);
