import { useContext } from 'react';
import { CartContex } from '../../contexts/cart.context';
import { 
    CheckoutItemContainer, 
    ImageContainer, 
    Quantity, 
    BaseSpan, 
    RemoveButton,
    Arrow,
    Value
} from './checkout-item.styles';


const CheckoutItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem; 
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContex);
    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    
    return (
        <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <BaseSpan> {name} </BaseSpan>
        <Quantity>
            <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={addItemHandler}>&#10095;</Arrow>
        </Quantity>
        <BaseSpan> {price}</BaseSpan>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;
