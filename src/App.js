import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './context/shoppingCartContext';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Cart from './components/Cart/Cart';
import Profile from './components/Profile/Profile';
import ProductsPage from './components/ProductsPage/ProductsPage';
import Admin from './components/Admin/Admin';
import AddProduct from './components/Admin/AddProduct';
import Users from './components/Admin/Users';
import Checkout from './components/Checkout/Checkout';

function App() {
	return (
		<ShoppingCartProvider>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='SingleProduct/:id' element={<SingleProduct />} />
				<Route path='Cart' element={<Cart />} />
				<Route path='Profile' element={<Profile />} />
				<Route path='Login' element={<Login />} />
				<Route path='Products/:category' element={<ProductsPage />} />
				<Route path='admin' element={<Admin />}>
					<Route path='addProduct' element={<AddProduct />} />
					<Route path='users' element={<Users />} />
				</Route>
				<Route path='Checkout'  element={<Checkout/>} />
			</Routes>
		</ShoppingCartProvider>
	);
}

export default App;
