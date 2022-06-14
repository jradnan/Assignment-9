import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
        <div>
            <nav className='menu'>
                <Link className='link' to='/'>HOME</Link>
                <Link className='link' to='/Reviews'>REVIEWS</Link>
                <Link className='link' to='/Dashboard'>DASHBOARD</Link>
                <Link className='link' to='/Blog'>BLOGS</Link>
                
            </nav>
        </div>
    );
};

export default Menu;