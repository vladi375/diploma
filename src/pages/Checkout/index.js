import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Card,
  Button as CardButton,
} from 'react-bootstrap';

import { placeOrder } from '../../actions/CatalogActions';
import './style.css';

const Checkout = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.catalog.cart);
  const order = useSelector((state) => state.catalog.order);
  const result = order.flat().join(' ');
  const totalQuantity = useSelector((state) => state.catalog.totalQuantity);
  const totalPrice = useSelector((state) => state.catalog.totalPrice);

  const onPlaceOrder = useCallback(() => {
    dispatch(placeOrder());
  }, [dispatch]);

  return (
    <div className='page'>
      <div className='page-checkout'>
        <h2>Checkout</h2>
        <Container className='d-flex'>
          <Row>
            <Col xs={12}>
              <Row>
                <Col className='d-flex flex-column' style={{ width: '65rem' }}>
                  {cart.length !== 0 ? (
                    cart.map((item) => {
                      return (
                        <Card border='light' key={item.id}>
                          <Card.Body className='d-flex flex-column'>
                            <Card.Title className='d-flex flex-row justify-content-between h5 my-3'>
                              <span>Name:</span>
                              <span>{item.name}</span>
                            </Card.Title>
                            <Card.Title className='d-flex flex-row justify-content-between h5 mb-3'>
                              <span>Quantity:</span>
                              <span>{item.quantity}</span>
                            </Card.Title>
                            <Card.Title className='d-flex flex-row justify-content-between h5 mb-3'>
                              <span>Price:</span>
                              <span> {item.price} BYN</span>
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      );
                    })
                  ) : (
                    <Card
                      body
                      className='d-flex justify-content-between align-items-center'
                    >
                      CHECKOUT IS EMPTY
                    </Card>
                  )}
                  {cart.length !== 0 ? (
                    <Card border='dark'>
                      <Card.Body>
                        <Card.Title className='d-flex flex-row justify-content-between'>
                          <span>Total Quantity:</span>
                          <span>{totalQuantity}</span>
                        </Card.Title>
                        <Card.Title className='d-flex flex-row justify-content-between'>
                          <span>Total Price:</span>
                          <span>{totalPrice} BYN</span>
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  ) : (
                    ''
                  )}
                  {cart.length !== 0 ? (
                    <div className='order-btn'>
                      <CardButton
                        className='mx-auto my-5'
                        variant='dark'
                        onClick={() => {
                          onPlaceOrder();
                        }}
                      >
                        Place An Order
                      </CardButton>
                    </div>
                  ) : (
                    ''
                  )}
                  {order.length !== 0 ? (
                    <div>
                      <Card.Title className='d-flex justify-content-center'>
                        Thank you for placing the order!
                      </Card.Title>
                      <Card.Text className='d-flex justify-content-center'>
                        {result}
                      </Card.Text>
                    </div>
                  ) : (
                    ''
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export { Checkout };
