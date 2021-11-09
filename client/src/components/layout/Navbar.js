import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
    return (
        <div className = 'navbar bg-primary'>
            <h1>
                <i className={icon}/> {title} 
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
            
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: "WebbiSkools ", 
    icon: "fas fa-book-open"
}
export default Navbar;