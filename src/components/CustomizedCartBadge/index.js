import React, { useEffect, useState } from 'react';

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { grey } from '@material-ui/core/colors';

import './style.css';
import { useSelector } from 'react-redux';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.text.primary}`,
    padding: '0 4px',
  },
}))(Badge);

export default function CustomizedBadges() {
  const cart = useSelector((state) => state.catalog.cart);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <IconButton aria-label='cart'>
      <StyledBadge badgeContent={cartCount} color='secondary'>
        <ShoppingCartIcon style={{ color: grey[50] }} />
      </StyledBadge>
    </IconButton>
  );
}
