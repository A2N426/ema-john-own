import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from "../provider/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(UserContext)
    console.log(user)
    const handleLogOut = ()=>{
        logOut()
    }
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
                {
                    user && <span className='text-white'>{user.email}<button onClick={handleLogOut} className="btn btn-xs">Sign Out</button>
                    </span>
                }
            </div>
        </div>
    );
};

export default Header;