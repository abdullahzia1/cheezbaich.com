import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";

const AllProductsScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Container>
            <h1
              style={{
                textAlign: "center",
                fontSize: "45px",
                fontWeight: "600",
                color: "#000000",
                margin: "60px 0px",
              }}
            >
              All Prducts
            </h1>
            <Row>
              {data.products.map((product) => (
<<<<<<< HEAD
<<<<<<< HEAD
                // console.log(product),
=======
                console.log(product),
>>>>>>> origin/main
=======
                console.log(product),
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
                <Col
                  className="newArrivalResponsive"
                  key={product._id}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                >
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default AllProductsScreen;
