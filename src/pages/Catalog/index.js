import React, { useEffect, useState, useCallback } from 'react';

import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button as CardButton,
} from 'react-bootstrap';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalog, addToCart } from '../../actions/CatalogActions';
import PaginationBasic from '../../components/Pagination';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const catalog = useSelector((state) => state.catalog.catalog);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = catalog.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getCatalog());
  }, [dispatch]);

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
      <Container className='page-catalog'>
        <Row>
          <Col xs={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item variant='dark'>Smartphones</ListGroup.Item>
              <ListGroup.Item disabled>Tablets</ListGroup.Item>
              <ListGroup.Item disabled>Accessories</ListGroup.Item>
              <ListGroup.Item disabled>Other</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={9}>
            <Row>
              {currentProducts.map((item) => {
                return (
                  <Col
                    sm={12}
                    md={6}
                    lg={4}
                    xl={4}
                    className='d-flex justify-content-between align-items-center px-3 mb-5'
                    key={item.id}
                  >
                    <Card className='h-100'>
                      <Link to={`/catalog/${item.id}`}>
                        <Card.Img
                          variant='top'
                          src={item.image}
                          className='catalog-img'
                        />
                      </Link>
                      <Card.Body className='d-flex flex-column justify-content-between'>
                        <Link to={`/catalog/${item.id}`}>
                          <Card.Title className='h6'>{item.name}</Card.Title>
                        </Link>
                        <Card.Text className='d-flex justify-content-between align-items-center'>
                          <span>Price:</span>
                          <span>{item.price} BYN</span>
                        </Card.Text>
                        <div className={classes.root}>
                          <CardButton
                            className='justify-content-end'
                            variant='dark'
                            onClick={() => onAddToCart(item.id)}
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
                );
              })}
            </Row>
            <PaginationBasic
              productsPerPage={productsPerPage}
              totalProducts={catalog.length}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { CatalogPage };

// scrollHeight - общая высота страницы с учетом скролла
// scrollTop - текущее положение скролла от верха страницы
//window.innerHeight - видимая область страницы (высота браузера)
