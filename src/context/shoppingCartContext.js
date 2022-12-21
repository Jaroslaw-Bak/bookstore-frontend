import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext({});

export function ShoppingCartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product) => {
		setCartItems([...cartItems, { ...product }]);
	};

	const removeItemFromCart = (product) => {
		console.log(product)
		setCartItems(cartItems.filter(el => el._id === !product._id))
	}

	return (
		<ShoppingCartContext.Provider value={{ addToCart, cartItems, removeItemFromCart }}>
			{children}
		</ShoppingCartContext.Provider>
	);
}
