import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'
const Header = () => {
    return (
        <div className=''>
            {/* daisy start */}
            <div className="navbar bg-base-300 header">
                <div className='header-meal'>
                    <h1>meal <span>planner</span></h1>
                </div>
                <div className='header-ankers'>
                   <Link to='/'>Home</Link>
                   <Link to='/category'>Category</Link>
                   <Link to='/random'>Random</Link>

                </div>
 
</div>

            {/* daisy end */}
            
        </div>
    );
};

export default Header;