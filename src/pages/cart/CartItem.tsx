import { ProductT } from "../../components/products/Product";

type cartItemT = {
  id: number;
  data: ProductT;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  cartItems: Record<number, number>;
  updateCartItemsCount: (count: string, itemId: number) => void;
}

export const CartItem = ({
  data,
  id,
  addToCart,
  removeFromCart,
  cartItems,
  updateCartItemsCount,
}: cartItemT) => {
  const itemCount = cartItems[id];
  const { productImage, productName, price } = data;

  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>₦{price}</p>
        <div className="flex" style={{justifyContent: 'unset', alignItems: 'flex-end'}}>
          <div className="countHandler">
            <button onClick={() => removeFromCart(id)}>-</button>
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

