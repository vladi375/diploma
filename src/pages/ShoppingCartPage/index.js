import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import './style.css';
import { removeFromCart } from '../../actions/CatalogActions';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.catalog.cart);
  const totalPrice = useSelector((state) => state.catalog.totalPrice);
  const totalQuantity = useSelector((state) => state.catalog.totalQuantity);
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [totalQuantity, setTotalQuantity] = useState(0);
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  // useEffect(() => {
  //   let price = 0;
  //   let quantity = 0;

  //   cart.forEach((item) => {
  //     quantity += item.quantity;
  //     price += item.quantity * item.price;
  //   });

  //   setTotalPrice(price);
  //   setTotalQuantity(quantity);
  // }, [cart, totalPrice, totalQuantity, setTotalPrice, setTotalQuantity]);

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant='filled' {...props} />;
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const classes = useStyles();

  const handleClick = (newState) => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const onRemoveFromCart = useCallback(
    (id, amount, value) => {
      dispatch(removeFromCart(id, amount, value));
      handleClick({ vertical: 'bottom', horizontal: 'left' });
    },
    [dispatch]
  );

  const history = useHistory();

  const redirectToCheckout = () => {
    history.push('/checkout');
  };

  return (
    <div className='page'>
      <Container>
        <Row>
          <Col xs={3}>
            {cart.length !== 0 ? (
              <Card>
                <Card.Body>
                  <Card.Title>Total Price:</Card.Title>
                  <Card.Text>{totalPrice} BYN</Card.Text>
                  <Card.Title>Total Quantity:</Card.Title>
                  <Card.Text>{totalQuantity}</Card.Text>
                  <Button variant='dark' onClick={redirectToCheckout}>
                    Proceed To Checkout
                  </Button>
                </Card.Body>
              </Card>
            ) : (
              ''
            )}
          </Col>
          <Col xs={9}>
            <Row>
              {cart.length !== 0 ? (
                cart.map((item) => {
                  return (
                    <Col
                      key={item.id}
                      sm={12}
                      md={6}
                      lg={4}
                      xl={4}
                      className='px-3 d-flex justify-content-between align-items-center px-3 mb-5'
                    >
                      <Card className='h-100'>
                        <Card.Img
                          variant='top'
                          src={item.image}
                          className='product-cart-img'
                        />
                        <Card.Body className='d-flex flex-column justify-content-between'>
                          <Card.Title className='h6'>{item.name}</Card.Title>
                          <Card.Text className='d-flex justify-content-between align-items-center'>
                            <span>Price:</span>
                            <span>{item.price} BYN</span>
                          </Card.Text>
                          <div className={classes.root}>
                            <Button
                              className='justify-content-end'
                              variant='dark'
                              onClick={() =>
                                onRemoveFromCart(
                                  item.id,
                                  item.quantity,
                                  item.price
                                )
                              }
                            >
                              Remove From Cart
                            </Button>
                            <Snackbar
                              anchorOrigin={{ vertical, horizontal }}
                              open={open}
                              autoHideDuration={4000}
                              onClose={handleClose}
                              key={vertical + horizontal}
                            >
                              <Alert onClose={handleClose} severity='error'>
                                Removed From Cart!
                              </Alert>
                            </Snackbar>
                          </div>
                        </Card.Body>
                        <Card.Footer>{`Quantity: ${item.quantity}`}</Card.Footer>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <Card
                  body
                  className='d-flex justify-content-between align-items-center'
                >
                  CART IS EMPTY
                </Card>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { ShoppingCartPage };
