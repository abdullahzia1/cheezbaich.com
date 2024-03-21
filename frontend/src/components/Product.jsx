<<<<<<< HEAD
<<<<<<< HEAD
import { Card } from "react-bootstrap";
=======
import { Card, Container } from "react-bootstrap";
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
=======
import { Card } from "react-bootstrap";
>>>>>>> origin/frontendChange
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <>
      <div className="my-3  p-1" key={product._id}>
        <Link to={`/product/${product._id}`}>
          <Card.Img
            src={product.image}
            variant="top"
            className="mb-3"
            style={{
              background: "#F0EEED",
              borderRadius: "20px",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/frontendChange
              width: "280px",
              height: "220px",
              objectFit: "contain",
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
            }}
<<<<<<< HEAD
          />
        </Link>
        <Card.Body>
          <Link
            to={`/product/${product._id}`}
            style={{ textDecoration: "none", color: "#000000", margin: "0" }}
          >
            <Card.Title
              as="div"
              className="product-title"
              style={{ fontSize: "18px", fontWeight: "600" }}
            >
              <strong style={{}}>{product.name}</strong>
            </Card.Title>
          </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
=======
              maxWidth: "290px",
              MaxHeight: "290px",
              objectFit: "cover",
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
            }}
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
=======
>>>>>>> origin/frontendChange
          />
        </Link>
        <Card.Body>
          <Link
            to={`/product/${product._id}`}
            style={{ textDecoration: "none", color: "#000000", margin: "0" }}
          >
            <Card.Title
              as="div"
              className="product-title"
              style={{ fontSize: "18px", fontWeight: "600" }}
            >
              <strong style={{}}>{product.name}</strong>
            </Card.Title>
          </Link>

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/frontendChange
          <Card.Text as="div" style={{ fontSize: "16px" }}>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

<<<<<<< HEAD
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
=======
>>>>>>> origin/frontendChange
          <Card.Text
            as="h3"
            style={{
              textDecoration: "none",
              color: "#000000",
              margin: "0",
              fontSize: "24px",
              fontWeight: "800",
            }}
          >
<<<<<<< HEAD
<<<<<<< HEAD
            Rs.{product.price}
=======
            ${product.price}
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
=======
            Rs.{product.price}
>>>>>>> origin/frontendChange
          </Card.Text>
        </Card.Body>
      </div>
    </>
  );
};

export default Product;
