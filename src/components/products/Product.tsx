import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import './product.css'

export type ProductT = {
  id: number,
  productName: string,
  price: number,
  productImage: string,
  category: string
}

export const Product = (props: any) => {
  const { id, productName, price, productImage, category } = props;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="product-info">
        <small className="product-category">{category}</small>
        <p className="product-name">{productName}</p>
        <p className="product-price">₦{price}</p>
      </div>
      <div className="add-to-cart-wrapper">
        <button className="add-to-cart" onClick={() => addToCart(id)}>
            <ion-icon name="bag-outline"></ion-icon> Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};
