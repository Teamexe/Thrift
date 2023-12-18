import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
function Header()
{
    const [{basket} , dispatch ]=useStateValue();
    return (
        <div className='header'>
            <Link to="/">
           
            <img 
            className="header_logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4HzJotxAk4bO7gSjwxr3mzuSNcci18UoCPw&usqp=CAU" />
            </Link>
            <div className="header_search">
                <input

                className="header_searchInput" type="text" />
                <SearchIcon
                className="header_searchIcon"/>
                
            </div>
            <div className="header_nav">
                <Link to='/login'>
                
                <div className='header_option'>
                    <span className='header_optionLineOne'>Sign In</span>

                </div>
                </Link>
                
                <div className='header_option'>
                    <span className='header_optionLineOne'>Your Order</span>

                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Books for Donation</span>

                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>About Us</span>
                </div>
                <Link to="/checkout">
             <div className="header_optionBasket"><ShoppingBasketIcon/>
             <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
             </div>
             </Link>
            </div>



        </div>
    );
}
export default Header