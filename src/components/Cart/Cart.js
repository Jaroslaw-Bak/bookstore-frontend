import { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext';
import Item from './Item/Item';

const Cart = () => {
	const { cartItems } = useContext(ShoppingCartContext);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		setTotal(0);
		const totalPrice = () => {
			cartItems.map((el) => {
				setTotal((prevState) => prevState + Number(el.price));
				return null
			});
		};
		totalPrice();
	}, [cartItems]);

	return (
		<section className='h-100'>
			<div className='container h-100 py-5'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col-10'>
						<div className='d-flex justify-content-between align-items-center mb-4'>
							<h3 className='fw-normal mb-0 text-black'>Shopping Cart</h3>
						</div>
						{cartItems && cartItems.map((el) => <Item {...el} key={el._id} />)}
						<div class='card mb-4'>
							<div class='card-body p-4'>
								<div class='float-end me-5'>
									<p class='mb-0 me-2 d-flex align-items-center'>
										<span class='small text-muted me-2'>Order total:</span>{' '}
										<span class='lead fw-normal'>${total}</span>
									</p>
								</div>
							</div>
						</div>
						<div class='card'>
							<div class='card-body p-4'>
								<div class='float-end me-5'>
									<button type='button' class='btn btn-warning btn-block btn-lg'>
										Proceed to Pay
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cart;
