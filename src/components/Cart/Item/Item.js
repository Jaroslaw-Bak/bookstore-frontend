import { useContext } from 'react';
import { ShoppingCartContext } from '../../../context/shoppingCartContext';

const Item = ({ image, title, author, price }) => {
	const { removeItemFromCart } = useContext(ShoppingCartContext);

	return (
		<div className='card rounded-3 mb-4'>
			<div className='card-body p-4'>
				<div className='row d-flex justify-content-between align-items-center'>
					<div className='col-md-2 col-lg-2 col-xl-2'>
						<img src={image} alt='product' style={{ width: '100%' }} />
					</div>
					<div className='col-md-3 col-lg-3 col-xl-3'>
						<p className='lead fw-normal mb-2'>{title}</p>
						<p className='lead fw-normal mb-2'>{author}</p>
					</div>

					<div className='col-md-3 col-lg-3 col-xl-2 d-flex'></div>
					<div className='col-md-3 col-lg-2 col-xl-2 offset-lg-1'>
						<h5 className='mb-0'>${price}</h5>
					</div>
					<div className='col-md-1 col-lg-1 col-xl-1 '>
						<i className='bi bi-trash text-danger' style={{ fontSize: 30 }}></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
