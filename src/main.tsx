import { Provider } from "react-redux";

import { store } from "./store/store";
import App from "./App.tsx";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
