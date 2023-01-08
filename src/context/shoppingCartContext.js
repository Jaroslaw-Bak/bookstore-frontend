import { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext({});

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')

export function ShoppingCartProvider({ children }) {
	const [cartItems, setCartItems] = useState(cartFromLocalStorage);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cartItems));
	},[cartItems]);

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

	const clearCart = () => {
		setCartItems([])
	}

	return (
		<ShoppingCartContext.Provider
			value={{ addToCart, cartItems, removeFromCart, deleteFromCart, clearCart }}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
}

