import "./style.css";

import { useContext, useState } from "react";
import { ProductContext } from "../../Providers/products";
import { ReservedContext } from "../../Providers/reserved";

function ReserveButton({ product, type }) {
  const { addToReserved, removeFromReserved } = useContext(ProductContext);
  const { userReservedList } = useContext(ReservedContext);

  const [quantity, setQuantity] = useState(0);

  const handleAddProduct = () => {
    console.log(userReservedList);

    const filterReservedProduct = userReservedList.filter(
      (reservedProduct) => reservedProduct.id === product.id
    );

    if (filterReservedProduct.length === 0) {
      addToReserved(product);
    }
    setQuantity(quantity + 1);
  };

  const handleRemoveProduct = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else if (quantity === 0) {
      setQuantity(quantity);
    } else {
      setQuantity(quantity - 1);
      removeFromReserved(product.id);
    }
  };
  return (
    <div className="reserveBtn">
      {type === "home" && (
        <>
          <button className="removeBtn" onClick={handleRemoveProduct}>
            -
          </button>
          <div>{quantity > 0 ? quantity : "reservar"}</div>
          <button className="addBtn" onClick={handleAddProduct}>
            +
          </button>
        </>
      )}
      {type === "wishlist" && (
        <>
          <button className="removeBtn" onClick={handleRemoveProduct}>
            -
          </button>
          <div>{quantity > 0 ? quantity : "reservar"}</div>
          <button className="addBtn" onClick={handleAddProduct}>
            +
          </button>
        </>
      )}
    </div>
  );
}

export default ReserveButton;
