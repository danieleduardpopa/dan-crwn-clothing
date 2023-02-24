import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import { CartContex } from '../../contexts/cart.context';
import { CartIconContainer, ItemCount } from'./cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContex);
    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }
    
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;