import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assests/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.contex";
import { CartContex } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContex);

    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className='nav-link' to='/shop'>
                    Shop
                </Link>
                {currentUser ? (
                    <span className="nav-link" onClick={signOutUser}>Sign Out</span>
                ) : (
                    <Link className='nav-link' to='/auth'>
                        Sign In
                    </Link>
                )}
                <CartIcon />
            </div>
            { isCartOpen 
                ? <CartDropdown />
                : null
            }
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Navigation;