import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/app.css";
import ConfigRoute from "./routes/ConfigRoute";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ConfigRoute />
    </ChakraProvider>
  </React.StrictMode>
);
