import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import InjectTailwind from "./InjectTailwind";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InjectTailwind>
      <App />
    </InjectTailwind>
  </React.StrictMode>
);
