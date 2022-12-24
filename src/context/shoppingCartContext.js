import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext({});

export function ShoppingCartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product) => {
		const exist = cartItems.find((x) => x._id === product._id);
		exist
			? setCartItems(
					cartItems.map((x) =>
						x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
					)
			  )
			: setCartItems([...cartItems, { ...product, qty: 1 }]);
	};

	const removeFromCart = (product) => {
		const exist = cartItems.find((x) => x._id === product._id);
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x._id !== product._id));
		} else {
			setCartItems(
				cartItems.map((x) =>
					x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
				)
			);
		}
	};

	const deleteFromCart = (product) => {
		setCartItems(cartItems.filter((x) => x._id !== product._id));
	};

	return (
		<ShoppingCartContext.Provider
			value={{ addToCart, cartItems, removeFromCart, deleteFromCart }}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}
