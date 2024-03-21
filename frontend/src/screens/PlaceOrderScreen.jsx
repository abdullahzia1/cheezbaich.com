<<<<<<< Updated upstream
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
import Loader from '../components/Loader';
import { useCreateOrderMutation } from '../slices/ordersApiSlice';
import { clearCartItems } from '../slices/cartSlice';
=======
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Row,
  Col,
  ListGroup,
<<<<<<< HEAD
=======
  Image,
>>>>>>> origin/main
  Card,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
<<<<<<< HEAD
=======
import CheckoutSteps from "../components/CheckoutSteps";
>>>>>>> origin/main
import Loader from "../components/Loader";
import { useCreateOrderMutation } from "../slices/ordersApiSlice";
import { clearCartItems } from "../slices/cartSlice";
>>>>>>> Stashed changes

const PlaceOrderScreen = () => {
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart);

  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  useEffect(() => {
    if (!cart.shippingAddress.address) {
      navigate('/shipping');
    } else if (!cart.paymentMethod) {
      navigate('/payment');
    }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  const dispatch = useDispatch();
  const placeOrderHandler = async () => {
    try {
      const res = await createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      }).unwrap();
      dispatch(clearCartItems());
      navigate(`/order/${res._id}`);
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
<<<<<<< Updated upstream
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                {cart.shippingAddress.postalCode},{' '}
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>
=======
<<<<<<< HEAD
      {/* <CheckoutSteps step1 step2 step3 step4 /> */}
=======
      <CheckoutSteps step1 step2 step3 step4 />
>>>>>>> origin/main
      <Container>
        <Row>
          <Col className="my-3" lg={7} md={12} sm={12} xs={12}>
            <Card className="container">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2
                    style={{
                      textAlign: "start",
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "#000000",
                      margin: "20px 0px",
                    }}
                  >
                    Shipping
                  </h2>
                  <p>
                    <strong
                      style={{
                        textAlign: "start",
                        fontSize: "20px",
                        fontWeight: "500",
                        color: "#000000",
                      }}
                    >
                      Address:
                    </strong>
                    {cart.shippingAddress.address}, {cart.shippingAddress.city}{" "}
                    {cart.shippingAddress.postalCode},{" "}
                    {cart.shippingAddress.country}
                  </p>
                </ListGroup.Item>
>>>>>>> Stashed changes

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

<<<<<<< Updated upstream
            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = $
                          {(item.qty * (item.price * 100)) / 100}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && (
                  <Message variant='danger'>{error.data.message}</Message>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
                {isLoading && <Loader />}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
=======
                <ListGroup.Item>
                  <h2
                    style={{
                      textAlign: "start",
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "#000000",
                      margin: "20px 0px",
                    }}
                  >
                    Order Items
                  </h2>
                  {cart.cartItems.length === 0 ? (
                    <Message>
                      <h1
                        style={{
                          textAlign: "start",
                          fontSize: "45px",
                          fontWeight: "600",
                          color: "#000000",
                          margin: "60px 0px",
<<<<<<< HEAD
=======
                          textAlign: "center",
>>>>>>> origin/main
                        }}
                      >
                        Your cart is empty
                      </h1>
                      <Link
                        to="/"
                        style={{
                          textDecoration: "none",
                          fontSize: "35px",
                          fontWeight: "600",
                          color: "#000000",
                          margin: "60px 0px",
                          textAlign: "center",
                        }}
                      >
                        <Button
                          style={{
                            fontSize: "18px",
                            fontWeight: "300",
                            color: "#ffff",
                            textAlign: "center",
                            border: "1px Solid black",
                            background: "black",
                            borderRadius: "200px",
                            padding: "10px 25px",
                            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                            width: "70%",
                            margin: "60px auto",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          Go Home Page
                        </Button>
                      </Link>
                    </Message>
                  ) : (
                    <ListGroup variant="flush">
                      {cart.cartItems.map((item, index) => (
                        <ListGroup.Item key={index}>
                          <Row style={{ minHeight: "180px", padding: "0px" }}>
                            <Col lg={4} md={6} sm={6} xs={7}>
                              <Link to={`/product/${item._id}`}>
                                <Card.Img
                                  src={item.image}
                                  alt={item.name}
                                  variant="top"
                                  style={{
                                    background: "#F0EEED",
                                    borderRadius: "15px",
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    margin: "auto",
                                    boxShadow:
                                      "rgba(0, 0, 0, 0.09) 0px 3px 12px",
                                  }}
                                />
                              </Link>
                            </Col>
                            <Col lg={8} md={6} sm={6} xs={4}>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent: "space-around",
                                  alignItems: "start",
                                  height: "100%",
                                }}
                              >
                                <Link
                                  to={`/product/${item.product}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <h3
                                    style={{
                                      fontSize: "20px",
                                      fontWeight: "600",
                                      color: "#000000",
                                    }}
                                  >
                                    {item.name}
                                  </h3>
                                </Link>
                                <h3
                                  style={{
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    color: "rgb(0 0 0 / 60%)",
                                  }}
                                >
<<<<<<< HEAD
                                  {item.qty} x Rs. {item.price} = 
                                  Rs. {(item.qty * (item.price * 100)) / 100}
=======
                                  {item.qty} x ${item.price} = $
                                  {(item.qty * (item.price * 100)) / 100}
>>>>>>> origin/main
                                </h3>
                              </div>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          <Col className="my-3" lg={5} md={12} sm={12} xs={12}>
            <Card className="container">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h1
                    style={{
                      textAlign: "start",
                      fontSize: "30px",
                      fontWeight: "700",
                      color: "#000000",
                      margin: "20px 0px",
                    }}
                  >
                    Order Summary
                  </h1>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignContent: "center",
                      margin: "10px 0px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "rgb(0 0 0 / 60%)",
                      }}
                    >
                      Items
                    </h3>
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#000000",
                      }}
                    >
<<<<<<< HEAD
                      Rs. {cart.itemsPrice}
=======
                      ${cart.itemsPrice}
>>>>>>> origin/main
                    </h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignContent: "center",
                      margin: "10px 0px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "rgb(0 0 0 / 60%)",
                      }}
                    >
                      Shipping
                    </h3>
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#000000",
                      }}
                    >
<<<<<<< HEAD
                      Rs. {cart.shippingPrice}
=======
                      ${cart.shippingPrice}
>>>>>>> origin/main
                    </h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignContent: "center",
                      margin: "10px 0px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "rgb(0 0 0 / 60%)",
                      }}
                    >
                      Tax
                    </h3>
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#000000",
                      }}
                    >
<<<<<<< HEAD
                      Rs. {cart.taxPrice}
=======
                      ${cart.taxPrice}
>>>>>>> origin/main
                    </h3>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignContent: "center",
                      margin: "10px 0px",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#000000",
                      }}
                    >
                      Total:
                    </h3>
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#000000",
                      }}
                    >
<<<<<<< HEAD
                      Rs. {cart.totalPrice}
=======
                      ${cart.totalPrice}
>>>>>>> origin/main
                    </h3>

                    {error && (
                      <Message variant="danger">{error.data.message}</Message>
                    )}
                  </div>
                  <Button
                    type="button"
                    className="btn-block"
                    disabled={cart.cartItems === 0}
                    onClick={placeOrderHandler}
                    style={{
                      fontSize: "20px",
                      fontWeight: "300",
                      color: "#ffff",
                      textAlign: "center",
                      border: "1px Solid black",
                      background: "black",
                      borderRadius: "200px",
                      margin: "20px 0px",
                      padding: "10px 25px",
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      width: "100%",
                    }}
                  >
                    Place Order
                  </Button>
                  {isLoading && <Loader />}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
>>>>>>> Stashed changes
    </>
  );
};

export default PlaceOrderScreen;
