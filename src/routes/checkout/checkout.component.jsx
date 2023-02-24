import { useContext } from 'react';

import { CartContex } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './checkout.styles';


const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContex);
    
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map((cartItem) => {
                    const { id } = cartItem;
                    return (
                        <CheckoutItem key={id} cartItem={cartItem}/>
                    )
                })
            }
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
  )
}

export default Checkout;
