import React, { createContext} from "react";
import { PRODUCTS } from "../products";
import useLocalStorageState from "../hooks/useLocalStorageState";

export const ShopContext = createContext<ShopContextT>({} as ShopContextT);

type ShopContextT = {
  cartItems: Record<number, number>,
  addToCart: (itemId: number) => void,
  removeFromCart: (itemId: number) => void,
  updateCartItemsCount: (count: string, itemId: number) => void,
  getTotalCartAmount: () => number,
  getTotalCartCount: () => number,
  applyCoupon: (couponCode: string) => boolean,
  couponCode: string,
}

type ShopContextProviderProps = {
  children: React.ReactNode;
};

const getDefaultCart = () => {
  let cart: Record<number, number> = {};
  for (let i = 0; i < PRODUCTS.length; i++) {
    cart[PRODUCTS[i].id] = 0;
  }
  console.log("DEFAULT CART", cart);
  return cart;
};

export const ShopContextProvider = ({children}: ShopContextProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorageState('cartItems', getDefaultCart());
  const [couponCode, setCouponCode] = useLocalStorageState('couponCode', '')

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        if(itemInfo) totalAmount += cartItems[item] * itemInfo.price ;
      }
    }
    
    return couponCode === 'TRAFIKI-10' ? (totalAmount * 0.9) : totalAmount;
  };

  const getTotalCartCount = () => {
    let totalCount = 0;

    for (const item in cartItems) {
      totalCount += cartItems[item]
    }
    return totalCount
  }

  const addToCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: 0}));
  };
  const updateCartItemsCount = (count: string, itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: Number(count) }));
  };

  const applyCoupon = (couponCode: string) => {
    setCouponCode(couponCode)
    return couponCode === 'TRAFIKI-10'
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemsCount,
    getTotalCartAmount,
    getTotalCartCount,
    applyCoupon,
    couponCode
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
