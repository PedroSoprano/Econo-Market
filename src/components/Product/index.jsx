import "./style.css";

import { FaHeart, FaTrashAlt } from "react-icons/fa";

import { useContext } from "react";
import ReserveButton from "../ReserveButton";
import { WishlistContext } from "../../Providers/wishlist";

function Product({ type, product }) {
  const { addToWishlist, deleteWishList } = useContext(WishlistContext);

  const formatedOriginalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.originalPrice);

  const formatedPromotionalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(product.promotionalPrice);

  const handleAddWishlist = () => {
    addToWishlist(product);
  };

  const handleDeleteWishlist = (id) => {
    deleteWishList(id);
  };

  return (
    <li className="productContainer">
      <div className="productImgContainer">
        <img className="productImg" src={product.image} alt={product.name} />
      </div>
      <div className="productInfo">
        <h3 className="productTitle">{product.name}</h3>
        <div className="productDueDate">{product.dueDate}</div>

        <div className="priceWishlist">
          <div className="productPrices">
            <div className="pastPrice">{formatedOriginalPrice}</div>
            <div className="currentprice">{formatedPromotionalPrice}</div>
          </div>

          <div className="wishlistBtn">
            {product
              ? type === "home" && <FaHeart onClick={handleAddWishlist} />
              : null}
            {product
              ? type === "wishlist" && (
                  <FaTrashAlt
                    onClick={() => handleDeleteWishlist(product.id)}
                  />
                )
              : null}
          </div>
        </div>

        {type === "reservedSeller" || type === "reservedConsumer" ? null : (
          <ReserveButton type={type} product={product} />
        )}
      </div>
    </li>
  );
}

export default Product;
