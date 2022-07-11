import "./reset.css";
import Ways from "./Routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductProvider } from "./Providers/products";
import { ReservedProvider } from "./Providers/reserved";
import { WishlistProvider } from "./Providers/wishlist";
import { AddProductProvider } from "./Providers/addProduct";

function App() {
  return (
    <>
      <ProductProvider>
        <ReservedProvider>
          <WishlistProvider>
            <AddProductProvider>
              <Ways />
            </AddProductProvider>
            <ToastContainer />
          </WishlistProvider>
        </ReservedProvider>
      </ProductProvider>
    </>
  );
}

export default App;
