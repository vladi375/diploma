import React, { useCallback, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button as CardButton,
} from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../../actions/CatalogActions';
import { getProduct } from '../../actions/ProductActions';

import './style.css';

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  useEffect(() => {
    dispatch(getProduct(props));
  }, [dispatch, props]);

  const onAddToCart = useCallback(
    (id) => {
      dispatch(addToCart(id));
      handleClick({ vertical: 'bottom', horizontal: 'left' });
    },
    [dispatch]
  );

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

  return (
    <div className='page'>
      <div className='page-product'>
        <Container className='d-flex justify-content-center align-items-center my-auto'>
          <Row>
            <Col xs={12}>
              <Row>
                <Col>
                  <Card
                    border='light'
                    className='d-flex justify-content-center align-items-center text-center'
                  >
                    <Card.Img
                      variant='top'
                      src={product?.image}
                      className='product-img'
                    />
                    <Card.Body>
                      <Card.Title className='h4 my-5'>
                        {product?.name}
                      </Card.Title>
                      <Card.Text className='mb-5'>
                        {product?.description}
                      </Card.Text>
                      <Card.Text className='h4 font-weight-bold mb-5'>
                        {product?.price} BYN
                      </Card.Text>
                      <div className={classes.root}>
                        <CardButton
                          variant='dark'
                          onClick={() => onAddToCart(product?.id)}
                        >
                          Add To Cart
                        </CardButton>
                        <Snackbar
                          anchorOrigin={{ vertical, horizontal }}
                          open={open}
                          autoHideDuration={3000}
                          onClose={handleClose}
                          key={vertical + horizontal}
                        >
                          <Alert onClose={handleClose} severity='success'>
                            Added To Cart!
                          </Alert>
                        </Snackbar>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export { ProductPage };
