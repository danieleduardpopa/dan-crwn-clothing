import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import {ReactComponent as CrwnLogo} from '../../assests/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from '../../store/user/user.selector';

import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { 
    NavigationContainer, 
    LogoContainer, 
    NavLink, 
    NavLinks 
} from './navigation.styles';

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    
    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className="logo"/>
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    Shop
                </NavLink>
                {currentUser ? (
                    <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
                ) : (
                    <NavLink to='/auth'>
                        Sign In
                    </NavLink>
                )}
                <CartIcon />
            </NavLinks>
            { isCartOpen 
                ? <CartDropdown />
                : null
            }
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;