import "./navbar.css"
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

    return (
        <>
            <div className="nav-item-container">
                <div className="menu-icon">
                    <MenuIcon onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}></MenuIcon>
                </div>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to='/'>Home</Link>
                    </li>
                    {/* TODO: implement route to about-me section on home page */}
                    {/* <li className="nav-list-item">
                        <Link to='/#about-me'>About Me</Link>
                    </li> */}
                    <li className="nav-list-item">
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to='/contact'>Contact Me</Link>
                    </li>
                </ul>
            </div>
            <div className={expandNavbar ? "mobile-nav-item-container" : 'deactive-mobile'}>
                <ul className="mobile-nav-list">
                    <li className="mobile-nav-list-item">
                        <Link to='/'>Home</Link>
                    </li>
                    {/* TODO: implement route to about-me section on home page */}
                    {/* <li className="nav-list-item">
                        <Link to='/#about-me'>About Me</Link>
                    </li> */}
                    <li className="mobile-nav-list-item">
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                    <li className="mobile-nav-list-item">
                        <Link to='/contact'>Contact Me</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;