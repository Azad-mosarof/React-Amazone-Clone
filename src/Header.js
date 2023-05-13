import React from "react";
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import cart from './cart.png'
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

export default function Header(){

    const [{basket, user}, dispatch] = useStateValue()

    const handleAuth = () => {
        if (user) {
            auth.signOut()
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header--logo box--effect" src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817"></img>
            </Link>
            
            <div className="header--search">
                <div className="header--searchSelect">
                    <select className="header--select">
                        <option>All</option>
                        <option>Books</option>
                        <option>Electronics</option>
                        <option>Home</option>
                    </select>
                </div>

                <input className="header--searchInput" type="text" placeholder="Search Amazone.in"></input>
                <SearchIcon className="header--searchIcon"/>
            </div>
            <div className="header--nav">
                <Link to={!user && '/login'}>
                    <div className="header--option box--effect" onClick={handleAuth}>
                        <span className="header--optionLineOne">Hello {user ? user.email.split('@')[0] : 'Guest'}</span>
                        <span className="header--optionLineTwo">{user ? 'Sign Out':'Sign In'}</span>
                    </div>
                </Link>

                <div className="header--option box--effect">
                    <span className="header--optionLineOne">Returns</span>
                    <span className="header--optionLineTwo">& Orders</span>
                </div>

                <div className="header--option box--effect">
                    <span className="header--optionLineOne">Your</span>
                    <span className="header--optionLineTwo">Prime</span>
                </div>

                <Link to='/checkout'>
                    <div className="header--optionBasket box--effect">
                        <img src={cart} alt="cart" className="header--cartImage"/>
                        <span className="header--optionLineTwo header--basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}
