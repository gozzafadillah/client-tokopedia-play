import React from "react";
import ReactDOM from "react-dom/client";
import ConfigRoute from "./routes/ConfigRoute";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <ConfigRoute />
  </ChakraProvider>
);
