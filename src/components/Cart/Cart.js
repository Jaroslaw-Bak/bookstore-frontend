import { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContext';

const Cart = () => {
	const { cartItems, addToCart, removeFromCart, deleteFromCart} = useContext(ShoppingCartContext);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		setTotal(0);
		const totalPrice = () => {
			cartItems.map((el) => {
				setTotal((prevState) => prevState + parseInt(Number(el.price) * Number(el.qty)));
				return null;
			});
		};
		totalPrice();
	}, [cartItems]);

	return (
		<section className='h-100'>
			<div className='container h-100 py-5'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col-10'>
						{cartItems.length > 0 ? (
							<>
								<div className='d-flex justify-content-between align-items-center mb-4'>
									<h3 className='fw-normal mb-0 text-black'>Koszyk</h3>
								</div>
								{cartItems.map((el) => (
									<div className='card rounded-3 mb-4'>
										<div className='card-body p-4'>
											<div className='row d-flex justify-content-between align-items-center'>
												<div className='col-md-2 col-lg-2 col-xl-2'>
													<img src={el.image} alt='product' style={{ width: '100%' }} />
												</div>
												<div className='col-md-3 col-lg-3 col-xl-3'>
													<p className='lead fw-normal mb-2'>{el.title}</p>
													<p className='lead fw-normal mb-2'>{el.author}</p>
												</div>

												<div className='col-md-3 col-lg-3 col-xl-2 d-flex'>
													<button onClick={() => removeFromCart(el)} className='btn px-2' >-</button>
													<input value={el.qty} className='form-control form-control-sm' />
													<button onClick={() => addToCart(el)} className='btn px-2'>
														+
													</button>
												</div>

												<div className='col-md-3 col-lg-2 col-xl-2 offset-lg-1'>
													<h5 className='mb-0'>${el.price}</h5>
												</div>
												<div className='col-md-1 col-lg-1 col-xl-1 '>
													<i
														onClick={() => deleteFromCart(el)}
														className='bi bi-trash text-danger'
														style={{ fontSize: 30 }}
													></i>
												</div>
											</div>
										</div>
									</div>
								))}
								<div className='card mb-4'>
									<div className='card-body p-4'>
										<div className='float-end me-5'>
											<p className='mb-0 me-2 d-flex align-items-center'>
												<span className='small text-muted me-2'>Wartość całkowita</span>{' '}
												<span className='lead fw-normal'>${total}</span>
											</p>
										</div>
									</div>
								</div>
								<div className='card'>
									<div className='card-body p-4'>
										<div className='float-end me-5'>
											<button type='button' className='btn btn-warning btn-block btn-lg'>
												Płatności
											</button>
										</div>
									</div>
								</div>
							</>
						) : (
							<div className='d-flex justify-content-between align-items-center mb-4'>
								<h3 className='fw-normal mb-0 text-black'>Koszyk jest pusty</h3>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cart;
