import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../const';
import './style.css';
import logo from '../../images/logo.jpg';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import CustomizedBadges from '../CustomizedCartBadge';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const user = useSelector((state) => state.signIn.user);
  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <Link to={ROUTES.MAIN}>
          <img className='logo' src={logo} alt='Logo' />
        </Link>
        <Link to={ROUTES.CATALOG}>Catalog</Link>
        <Link to={ROUTES.CHECKOUT}>Checkout</Link>
      </nav>
      <nav className='navbar-cart'>
        <Link to={ROUTES.CART}>
          <CustomizedBadges />
        </Link>
      </nav>
      <nav className='navbar-signin'>
        {user ? (
          <Link to={ROUTES.MAIN}>{`${user.name.first} ${user.name.last}`}</Link>
        ) : (
          <Link to={ROUTES.SIGNIN}>
            Sign in <AssignmentIndIcon />
          </Link>
        )}
      </nav>
    </div>
  );
};
