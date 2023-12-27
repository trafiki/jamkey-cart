import { ProductT } from "../../components/products/Product";
import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { thousandsSeparators } from "../../utils/helpers";

type cartItemT = {
  id: number;
  data: ProductT;
}

export const CartItem = ({data, id,}: cartItemT) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemsCount,
    reduceProductCount
  } = useContext(ShopContext);

  const itemCount = cartItems[id];
  const { productImage, productName, price } = data;

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>₦{thousandsSeparators(price)}</p>
        <div className="flex" style={{justifyContent: 'unset', alignItems: 'flex-end'}}>
          <div className="countHandler">
            <button onClick={() => reduceProductCount(id)}>-</button>
            <input
              type="text"
              value={itemCount}
              onChange={(e) => updateCartItemsCount(e.target.value, id)}
            />
            <button onClick={() => addToCart(id)}>+</button>
          </div>
          <small style={{fontSize: '.9rem', color: '#403d3d', cursor: 'pointer'}} onClick={() => removeFromCart(id)}>x Remove</small>
        </div>
      </div>
    </div>
  );
};

