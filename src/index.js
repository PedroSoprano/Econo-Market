import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { WishlistProvider } from "./Providers/wishlist";
import { ProductProvider } from "./Providers/products";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <WishlistProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WishlistProvider>
    </ProductProvider>
  </React.StrictMode>
);
