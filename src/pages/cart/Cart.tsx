import  { useContext, useState } from "react";
import { ShopContext } from "../../context/shopContext";
import { CartItem } from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../products";


 
export const Cart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemsCount,
    getTotalCartAmount,
    applyCoupon,
  } = useContext(ShopContext);
  
  const [couponCode, setCouponCode] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)


  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const handleCouponCode = () => {
    if (!applyCoupon(couponCode)) {
      alert('Invalid or expired coupon code!')
      setCouponCode('')
      setCouponApplied(false)
    }else {
      setCouponApplied(true)
    }
  }

  return (
    <div className="cart">
      <div>{totalAmount > 0 && <h1>Your Cart Items</h1>}</div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <CartItem
                data={product}
                id={product.id}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cartItems={cartItems}
                updateCartItemsCount={updateCartItemsCount}
              />
            );
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <div className="flex">
           <p>Subtotal: ₦{totalAmount}</p> | 
           <div className="coupon-section">
            {
              couponApplied ? (
                <div className="flex">
                  <p>Coupon {couponCode} applied</p> <small style={{cursor: 'pointer'}} onClick={() => {
                    setCouponCode('')
                    setCouponApplied(false)
                  }}>x Remove</small>
                </div>
               
              ) : (
                <>
                <input value={couponCode} onChange={(e) => setCouponCode(e.target.value)} /><button onClick={handleCouponCode}>Apply coupon</button>
                </>
              )
            }
          
           </div>
          </div>
          <div>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};
