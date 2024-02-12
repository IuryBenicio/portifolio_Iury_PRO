import React from "react";
import ReactDOM from "react-dom/client";
import Rotas from "./routes";
import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { Provider } from "react-redux";
import { store } from "./store";

import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <RouterProvider router={Rotas} />
    </Provider>
  </React.StrictMode>
);
