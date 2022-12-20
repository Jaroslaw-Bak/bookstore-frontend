import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Auth from './components/Auth/Auth'
import Home from './components/Home/Home';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './context/shoppingCartContext';
import axios from './axios';
import ProductsPage from './components/ProductsPage/ProductsPage';

function App() {
	const [allData, setData] = useState(null);

	async function getData() {
		try {
			const response = await axios.get('/products');
			console.log(response.data.data.products);
			setData(response.data.data.products);
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(() => {
		getData();
	}, []);

	return (
		<ShoppingCartProvider>
			<Header />
			<Routes>
				<Route path='/' element={<Home allData={allData} />} />
				<Route
					path='/SingleProduct/:id'
					element={<SingleProduct allData={allData} />}
				/>
				<Route path='/Cart' element={<Cart />} />
				<Route path='/Profile' element={<Profile />} />
				<Route path='/Auth' element={<Auth />} />
				<Route path='/Products/:category' element={<ProductsPage />} />
			</Routes>
			<Footer />
		</ShoppingCartProvider>
	);
}

export default App;
