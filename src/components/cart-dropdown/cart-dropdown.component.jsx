import { useContext } from 'react';
import { CartContex } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems, EmptyMessage }from './cart-dropdown.styles';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContex);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length 
                ? cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                 ))
                : <EmptyMessage>No products added</EmptyMessage>
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>
                Go to checkout
            </Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;