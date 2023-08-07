import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { login, logout } from '../store/authSlice';

function Header() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            ByeongHwa's Blog
          </Link>
          <ul className='navbar-nav flex-row'>
            <li className='nav-item ms-3'>
              <button
                className='text-white btn btn-link text-decoration-none px-0 border-0 align-text-top'
                onClick={() => {
                  if (isLogin) dispatch(logout());
                  else {
                    dispatch(login());
                  }
                }}
              >
                {isLogin ? 'Logout' : 'Login'}
              </button>
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
