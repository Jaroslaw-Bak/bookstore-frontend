import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './context/shoppingCartContext';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import ProductsPage from './components/ProductsPage/ProductsPage';
import AdminPage from './components/AdminPage/AdminPage';

function App() {
	return (
		<ShoppingCartProvider>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/SingleProduct/:id' element={<SingleProduct />} />
				<Route path='/Cart' element={<Cart />} />
				<Route path='/Profile' element={<Profile />} />
				<Route path='/Auth' element={<Auth />} />
				<Route path='/Products/:category' element={<ProductsPage />} />
				<Route path='/admin' element={<AdminPage />} />
			</Routes>
			<Footer />
		</ShoppingCartProvider>
	);
}

export default App;
