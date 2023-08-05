import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            BLOG
          </Link>

          <ul className='navbar-nav flex-row'>
            <li className='nav-item '>
              <NavLink to='/' className='nav-link' activeclassname='active' aria-current='page'>
                Home
              </NavLink>
            </li>
            <li className='nav-item mx-3'>
              <NavLink to='/blogs' className='nav-link' activeclassname='active' aria-current='page'>
                Blogs
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/admin' className='nav-link' activeclassname='active' aria-current='page'>
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
