import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            BLOG
          </Link>

          <ul className='navbar-nav flex-row'>
            <li className='nav-item me-3'>
              <Link to='/' className='nav-link active' aria-current='page'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/post' className='nav-link active' aria-current='page'>
                Post
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
