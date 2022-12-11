import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext({});

export function ShoppingCartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product) => {
		setCartItems([...cartItems, { ...product }]);
	};

	return (
		<ShoppingCartContext.Provider value={{ addToCart, cartItems }}>
			{children}
		</ShoppingCartContext.Provider>
	);
}
