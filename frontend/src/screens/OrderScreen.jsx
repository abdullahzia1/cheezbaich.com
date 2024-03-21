<<<<<<< HEAD
<<<<<<< Updated upstream
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Message from '../components/Message';
import Loader from '../components/Loader';
=======
=======
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
<<<<<<< HEAD
<<<<<<< HEAD
=======
  Image,
>>>>>>> origin/main
=======
  Image,
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
  Card,
  Button,
  Container,
} from "react-bootstrap";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Message from "../components/Message";
import Loader from "../components/Loader";
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
import {
  useDeliverOrderMutation,
  useGetOrderDetailsQuery,
  useGetPaypalClientIdQuery,
  usePayOrderMutation,
} from "../slices/ordersApiSlice";

const OrderScreen = () => {
  const { id: orderId } = useParams();

  const {
    data: order,
    refetch,
    isLoading,
    error,
  } = useGetOrderDetailsQuery(orderId);

  const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();

  const [deliverOrder, { isLoading: loadingDeliver }] =
    useDeliverOrderMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  const {
    data: paypal,
    isLoading: loadingPayPal,
    error: errorPayPal,
  } = useGetPaypalClientIdQuery();

  useEffect(() => {
    if (!errorPayPal && !loadingPayPal && paypal.clientId) {
      const loadPaypalScript = async () => {
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": paypal.clientId,
            currency: "USD",
          },
        });
        paypalDispatch({ type: "setLoadingStatus", value: "pending" });
      };
      if (order && !order.isPaid) {
        if (!window.paypal) {
          loadPaypalScript();
        }
      }
    }
  }, [errorPayPal, loadingPayPal, order, paypal, paypalDispatch]);

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        await payOrder({ orderId, details });
        refetch();
        toast.success("Order is paid");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    });
  }

  function onError(err) {
    toast.error(err.message);
  }

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  const deliverHandler = async () => {
    await deliverOrder(orderId);
    refetch();
  };

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error.data.message}</Message>
  ) : (
    <>
<<<<<<< HEAD
<<<<<<< Updated upstream
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong> {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address:</strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                {order.shippingAddress.postalCode},{' '}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant='success'>
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Not Delivered</Message>
              )}
            </ListGroup.Item>
=======
=======
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
      <Container>
        <h1
          style={{
            textAlign: "start",
            fontSize: "40px",
            fontWeight: "700",
            color: "#000000",
            margin: "60px 0px",
          }}
        >
<<<<<<< HEAD
<<<<<<< HEAD
          Order: "{order && order._id.slice(0, 6)}"
=======
          Order: "{order._id}""
>>>>>>> origin/main
=======
          Order: "{order._id}""
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
        </h1>
        <Row>
          <Col className="my-3" lg={7} md={12} sm={12} xs={12}>
            <Card className="container">
              <ListGroup variant="flush">
<<<<<<< HEAD
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
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#000000",
                      }}
                    >
                      Name:{" "}
                    </strong>{" "}
                    {order.user.name}
                  </p>
                  <p>
                    <strong
                      style={{
                        textAlign: "start",
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#000000",
                      }}
                    >
                      Email:{" "}
                    </strong>{" "}
                    <a href={`mailto:${order.user.email}`}>
                      {order.user.email}
                    </a>
                  </p>
                  <p>
                    <strong
                      style={{
                        textAlign: "start",
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#000000",
                      }}
                    >
                      Address:
                    </strong>
                    {order.shippingAddress.address},{" "}
                    {order.shippingAddress.city}{" "}
                    {order.shippingAddress.postalCode},{" "}
                    {order.shippingAddress.country}
                  </p>
                  {order.isDelivered ? (
                    <Message variant="success">
                      Delivered on {order.deliveredAt}
                    </Message>
                  ) : (
                    <Message variant="danger">Not Delivered Yet</Message>
                  )}
                </ListGroup.Item>
>>>>>>> Stashed changes

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant='success'>Paid on {order.paidAt}</Message>
              ) : (
                <Message variant='danger'>Not Paid</Message>
              )}
            </ListGroup.Item>

<<<<<<< Updated upstream
            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
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
                          {item.qty} x ${item.price} = ${item.qty * item.price}
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
                  {order.orderItems.length === 0 ? (
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
                      {order.orderItems.map((item, index) => (
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
                                  {item.qty} x Rs. {item.price} = Rs. {(item.qty * (item.price * 100)) / 100}
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
                      Rs. {order.itemsPrice}
=======
                      ${order.itemsPrice}
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
                      Rs. {order.shippingPrice}
=======
                      ${order.shippingPrice}
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
                      Rs. {order.taxPrice}
=======
                      ${order.taxPrice}
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
                      Rs. {order.totalPrice}
=======
                      ${order.totalPrice}
>>>>>>> origin/main
                    </h3>
                  </div>
                </ListGroup.Item>
                {!order.isPaid && (
                  <>
                    {loadingPay && <Loader />}

                    {isPending ? (
                      <Loader />
                    ) : (
                      <div>
                        <div>
                          <PayPalButtons
                            createOrder={createOrder}
                            onApprove={onApprove}
                            onError={onError}
                          ></PayPalButtons>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {loadingDeliver && <Loader />}

                {userInfo &&
                  userInfo.isAdmin &&
                  order.isPaid &&
                  !order.isDelivered && (
                    <ListGroup.Item>
                      <Button
                        type="button"
                        className="btn btn-block"
                        onClick={deliverHandler}
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
                        Mark As Delivered
                      </Button>
>>>>>>> Stashed changes
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
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid && (
=======
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
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
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#000000",
                      }}
                    >
                      Name:{" "}
                    </strong>{" "}
                    {order.user.name}
                  </p>
                  <p>
                    <strong
                      style={{
                        textAlign: "start",
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#000000",
                      }}
                    >
                      Email:{" "}
                    </strong>{" "}
                    <a href={`mailto:${order.user.email}`}>
                      {order.user.email}
                    </a>
                  </p>
                  <p>
                    <strong
                      style={{
                        textAlign: "start",
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#000000",
                      }}
                    >
                      Address:
                    </strong>
                    {order.shippingAddress.address},{" "}
                    {order.shippingAddress.city}{" "}
                    {order.shippingAddress.postalCode},{" "}
                    {order.shippingAddress.country}
                  </p>
                  {order.isDelivered ? (
                    <Message variant="success">
                      Delivered on {order.deliveredAt}
                    </Message>
                  ) : (
                    <Message variant="danger">Not Delivered Yet</Message>
                  )}
                </ListGroup.Item>

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
                    Payment Method
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
                      Method:{" "}
                    </strong>
                    {order.paymentMethod}
                  </p>
                  {order.isPaid ? (
                    <Message variant="success">Paid on {order.paidAt}</Message>
                  ) : (
                    <Message variant="danger">Not Paid Yet</Message>
                  )}
                </ListGroup.Item>

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
                  {order.orderItems.length === 0 ? (
                    <Message>
                      <h1
                        style={{
                          textAlign: "start",
                          fontSize: "45px",
                          fontWeight: "600",
                          color: "#000000",
                          margin: "60px 0px",
                          textAlign: "center",
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
                      {order.orderItems.map((item, index) => (
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
                                  {item.qty} x ${item.price} = $
                                  {(item.qty * (item.price * 100)) / 100}
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
                      ${order.itemsPrice}
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
                      ${order.shippingPrice}
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
                      ${order.taxPrice}
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
                      ${order.totalPrice}
                    </h3>
                  </div>
                </ListGroup.Item>
                {!order.isPaid && (
                  <>
                    {loadingPay && <Loader />}

                    {isPending ? (
                      <Loader />
                    ) : (
                      <div>
                        <div>
                          <PayPalButtons
                            createOrder={createOrder}
                            onApprove={onApprove}
                            onError={onError}
                          ></PayPalButtons>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {loadingDeliver && <Loader />}

                {userInfo &&
                  userInfo.isAdmin &&
                  order.isPaid &&
                  !order.isDelivered && (
                    <ListGroup.Item>
                      <Button
                        type="button"
                        className="btn btn-block"
                        onClick={deliverHandler}
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
                        Mark As Delivered
                      </Button>
                    </ListGroup.Item>
                  )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderScreen;
