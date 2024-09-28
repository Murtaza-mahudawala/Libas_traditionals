import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/Frontend_Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    // Initialize the cart based on the product ids
    for (let index = 0; index < all_product.length; index++) {
        cart[all_product[index].id] = 0;  // Use product ids from all_product
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);  // Debugging
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = all_product.find((product) => product.id === Number(item));
                if (iteminfo) {
                    totalAmount += iteminfo.new_price * cartItems[item];
                } else {
                    console.log(`Product with id ${item} not found`);  // Debugging if product is not found
                }
            }
        }
        return totalAmount;  // Return total outside the loop
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {
        getTotalCartItems,
        getTotalCartAmount,
        all_product,
        cartItems,
        addToCart,
        removeFromCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
