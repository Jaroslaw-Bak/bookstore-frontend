import './Checkout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShoppingCartContext } from '../../context/shoppingCartContext';
import { useContext, useEffect, useState } from 'react';

const Checkout = () => {
	const { cartItems } = useContext(ShoppingCartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
		setTotal(0);
		const totalPrice = () => {
			cartItems.map((el) => {
				setTotal(
					(prevState) => prevState + parseInt(Number(el.price) * Number(el.qty))
				);
				return null;
			});
		};
		totalPrice();
	}, [cartItems]);

	return (
		<div className='maincontainer'>
			<div className='container mt-5'>
				<div className='col-md-8 order-md-1'>
					<form className='needs-validation' novalidate>
						<h4 className='mb-3'>Dane adresowe</h4>
						<div className='row'>
							<div className='col-md-6 mb-3'>
								<label for='firstName'>Imię</label>
								<input
									type='text'
									className='form-control'
									id='firstName'
									placeholder=''
									value=''
									required
								/>
								<div className='invalid-feedback'>Valid first name is required.</div>
							</div>
							<div className='col-md-6 mb-3'>
								<label for='lastName'>Nazwisko</label>
								<input
									type='text'
									className='form-control'
									id='lastName'
									placeholder=''
									value=''
									required
								/>
								<div className='invalid-feedback'>Valid last name is required.</div>
							</div>
						</div>
						<div className='mb-3'>
							<label for='email'>Email </label>
							<input type='email' className='form-control' id='email' placeholder='' />
							<div className='invalid-feedback'>
								Please enter a valid email address for shipping updates.
							</div>
						</div>
						<div className='mb-3'>
							<label for='address'>Adres</label>
							<input
								type='text'
								className='form-control'
								id='address'
								placeholder=''
								required
							/>
							<div className='invalid-feedback'>
								Please enter your shipping address.
							</div>
						</div>
						<div className='row'>
							<div className='col-md-3 mb-3'>
								<label for='country'>Kraj</label>
								<select className='custom-select d-block w-100' id='country' required>
									<option value=''>Wybierz...</option>
									<option>Polska</option>
								</select>
								<div className='invalid-feedback'>Please select a valid country.</div>
							</div>
							<div className='col-md-3 mb-3'>
								<label for='zip'>Kod pocztowy</label>
								<input
									type='text'
									className='form-control'
									id='zip'
									placeholder=''
									required
								/>
								<div className='invalid-feedback'>Zip code required.</div>
							</div>
						</div>
						<hr className='mb-4' />
						<h4 className='mb-3'>Płatność</h4>

						<div className='row'>
							<div className='col-md-6 mb-3'>
								<label for='cc-name'>Imię i nazwisko</label>
								<input
									type='text'
									className='form-control'
									id='cc-name'
									placeholder=''
									required
								/>
								<div className='invalid-feedback'>Name on card is required</div>
							</div>
							<div className='col-md-6 mb-3'>
								<label for='cc-number'>Numer karty</label>
								<input
									type='text'
									className='form-control'
									id='cc-number'
									placeholder=''
									required
								/>
								<div className='invalid-feedback'>Credit card number is required</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-md-3 mb-3'>
								<label for='cc-expiration'>Ważna do</label>
								<input
									type='text'
									className='form-control'
									id='cc-expiration'
									placeholder=''
									required
								/>
								<div className='invalid-feedback'>Expiration date required</div>
							</div>
							<div className='col-md-3 mb-3'>
								<label for='cc-expiration'>CVV</label>
								<input
									type='text'
									className='form-control'
									id='cc-cvv'
									placeholder=''
									required
								/>
								<div className='invalid-feedback'>Security code required</div>
							</div>
						</div>

						<hr className='mb-4' />
						<div className='col-md-6 mb-3'>
							<div>
								<h5>Łącznie: {total} (PLN)</h5>
								
							</div>
						</div>
						<button className='btn btn-primary btn-lg btn-block' type='button'>
							Kupuję
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
