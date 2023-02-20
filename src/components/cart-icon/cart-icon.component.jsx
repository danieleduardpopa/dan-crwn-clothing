import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import { CartContex } from '../../contexts/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContex);
    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }
    
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;