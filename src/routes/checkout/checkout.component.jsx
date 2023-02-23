import { useContext } from 'react';

import { CartContex } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';


const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContex);
    
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem) => {
                    const { id } = cartItem;
                    return (
                        <CheckoutItem key={id} cartItem={cartItem}/>
                    )
                })
            }
            <span className='total'>Total: ${cartTotal}</span>
        </div>
  )
}

export default Checkout;
