import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './context/shoppingCartContext';
import Auth from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import ProductsPage from './components/ProductsPage/ProductsPage';
import Admin from './components/Admin/Admin';
import AddProduct from './components/Admin/AddProduct';
import Users from './components/Admin/Users';

function App() {
	return (
		<ShoppingCartProvider>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='SingleProduct/:id' element={<SingleProduct />} />
				<Route path='Cart' element={<Cart />} />
				<Route path='Profile' element={<Profile />} />
				<Route path='Auth' element={<Auth />} />
				<Route path='Products/:category' element={<ProductsPage />} />
				<Route path='admin' element={<Admin />}>
					<Route path='addProduct' element={<AddProduct />} />
					<Route path='users' element={<Users />} />
				</Route>
			</Routes>
			<Footer />
		</ShoppingCartProvider>
	);
}

export default App;
