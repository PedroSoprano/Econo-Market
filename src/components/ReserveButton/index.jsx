import "./style.css";

import { useContext, useState } from "react";
import { ProductContext } from "../../Providers/products";
import { ReservedContext } from "../../Providers/reserved";

function ReserveButton({ product, type }) {
  const { addToReserved, removeFromReserved } = useContext(ProductContext);
  const { userReservedList } = useContext(ReservedContext);

  const [quantity, setQuantity] = useState(0);

  const checkReservedList = () => {
    const filterReservedProduct = userReservedList.filter(
      (reservedProduct) => reservedProduct.id === product.id
    );

    if (filterReservedProduct.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleAddProduct = () => {
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
      {type === "market-dashboard" && (
        <>
          <div className="editBtn">Editar</div>
        </>
      )}
      {type === "home" && (
        <>
          {checkReservedList() ? (
            <button className="btnAdd" onClick={() => addToReserved(product)}>
              Reservar
            </button>
          ) : (
            <button className="btnDisable" disabled>
              Já reservado
            </button>
          )}
        </>
      )}
      {type === "wishlist" && (
        <>
          {checkReservedList() ? (
            <button className="btnAdd" onClick={() => addToReserved(product)}>
              Reservar
            </button>
          ) : (
            <button className="btnDisable" disabled>
              Já reservado
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default ReserveButton;
