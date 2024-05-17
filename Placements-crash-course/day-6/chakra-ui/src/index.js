import { createRoot } from "react-dom/client";

import App from "./App";
import { initState, reducer } from "./reducers/books/reducer";
import { ChakraProvider } from "@chakra-ui/react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

if (window.Cypress) {
  window.reducerInitialState = initState;
  window.reducer = reducer;
}
