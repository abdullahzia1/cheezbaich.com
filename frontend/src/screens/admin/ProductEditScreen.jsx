<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
=======
<<<<<<< HEAD
import { useState, useEffect, useRef } from "react";
=======
import { useState, useEffect } from "react";
>>>>>>> origin/main
=======
import { useState, useEffect } from "react";
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
=======
import { useState, useEffect, useRef } from "react";
>>>>>>> origin/frontendChange
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import { toast } from "react-toastify";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
=======
>>>>>>> origin/frontendChange
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
  useUploadProductImageMutation,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream
} from '../../slices/productsApiSlice';
=======
} from "../../slices/productsApiSlice";
<<<<<<< HEAD
import JoditEditor from "jodit-react";
=======
>>>>>>> origin/main
>>>>>>> Stashed changes
=======
} from "../../slices/productsApiSlice";
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
=======
} from "../../slices/productsApiSlice";
import JoditEditor from "jodit-react";
>>>>>>> origin/frontendChange

const ProductEditScreen = () => {
  // Get productId from route parameters
  const { id: productId } = useParams();

  // States for managing product details
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [miniDescription, setMiniDescription] = useState(""); // Renamed minidescription to miniDescription for consistency

  // Fetch product details using productId
  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  // Mutation hooks for updating product and uploading product image
  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateProductMutation();
  const [uploadProductImage, { isLoading: loadingUpload }] =
    useUploadProductImageMutation();

  // Navigation hook for redirecting after updating product
  const navigate = useNavigate();

  // Submit handler for updating product
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateProduct({
        productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        miniDescription,
        countInStock,
      }).unwrap(); // Unwrap the Promise to catch any rejection in the catch block
      toast.success("Product updated");
      refetch();
      navigate("/admin/productlist");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  // Effect hook to update state with product details once fetched
  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
      setMiniDescription(product.miniDescription); // Corrected the state setter function name
    }
  }, [product]);

  // Handler for uploading product image
  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
      const res = await uploadProductImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  const editor = useRef(null);

  return (
    <>
      {/* Navigation link */}
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go back
      </Link>
      {/* Product edit form */}
      <FormContainer>
<<<<<<< HEAD
<<<<<<< Updated upstream
        <h1>Edit Product</h1>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/frontendChange
        <h1
          style={{
            textAlign: "center",
            fontSize: "45px",
            fontWeight: "700",
            color: "#000000",
            margin: "60px 0px",
          }}
        >
          Edit Product
        </h1>
<<<<<<< HEAD
=======
        <h1>Edit Product</h1>
>>>>>>> origin/main
        {/* Loader for update process */}
>>>>>>> Stashed changes
=======
        {/* Loader for update process */}
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
=======
        {/* Loader for update process */}
>>>>>>> origin/frontendChange
        {loadingUpdate && <Loader />}
        {/* Loader for fetching product details */}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error.data.message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream
            <Form.Group controlId='name'>
=======
            {/* Form fields */}
            {/* Name */}
            <Form.Group controlId="name">
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
              <Form.Label>Name</Form.Label>
=======
            {/* Form fields */}
<<<<<<< HEAD
=======
            {/* Form fields */}
>>>>>>> origin/frontendChange

            {/* Name */}
            <Form.Group controlId="name">
              <Form.Label
                style={{
                  textAlign: "start",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#000000",
                }}
              >
                Name
              </Form.Label>
<<<<<<< HEAD
=======
            {/* Name */}
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
>>>>>>> origin/main
>>>>>>> Stashed changes
=======
>>>>>>> origin/frontendChange
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream

            <Form.Group controlId='price'>
=======
            {/* Price */}
            <Form.Group controlId="price">
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
              <Form.Label>Price</Form.Label>
=======
            {/* Price */}
            <Form.Group controlId="price">
<<<<<<< HEAD
=======
            {/* Price */}
            <Form.Group controlId="price">
>>>>>>> origin/frontendChange
              <Form.Label  style={{
                  textAlign: "start",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#000000",
                }}>Price</Form.Label>
<<<<<<< HEAD
=======
              <Form.Label>Price</Form.Label>
>>>>>>> origin/main
>>>>>>> Stashed changes
=======
>>>>>>> origin/frontendChange
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream

            <Form.Group controlId='image'>
=======
            {/* Image */}
            <Form.Group controlId="image">
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
              <Form.Label>Image</Form.Label>
=======
            {/* Image */}
            <Form.Group controlId="image">
<<<<<<< HEAD
=======
            {/* Image */}
            <Form.Group controlId="image">
>>>>>>> origin/frontendChange
              <Form.Label  style={{
                  textAlign: "start",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#000000",
                }}>Image</Form.Label>
<<<<<<< HEAD
=======
              <Form.Label>Image</Form.Label>
>>>>>>> origin/main
>>>>>>> Stashed changes
=======
>>>>>>> origin/frontendChange
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <Form.Control
                label="Choose File"
                onChange={uploadFileHandler}
                type="file"
              />
              {loadingUpload && <Loader />}
            </Form.Group>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream

            <Form.Group controlId='brand'>
=======
            {/* Brand */}
            <Form.Group controlId="brand">
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
              <Form.Label>Brand</Form.Label>
=======
            {/* Brand */}
            <Form.Group controlId="brand">
<<<<<<< HEAD
=======
            {/* Brand */}
            <Form.Group controlId="brand">
>>>>>>> origin/frontendChange
              <Form.Label  style={{
                  textAlign: "start",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#000000",
                }}>Brand</Form.Label>
<<<<<<< HEAD
=======
              <Form.Label>Brand</Form.Label>
>>>>>>> origin/main
>>>>>>> Stashed changes
=======
>>>>>>> origin/frontendChange
              <Form.Control
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </Form.Group>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream

            <Form.Group controlId='countInStock'>
=======
            {/* Count In Stock */}
            <Form.Group controlId="countInStock">
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
              <Form.Label>Count In Stock</Form.Label>
=======
            {/* Count In Stock */}
            <Form.Group controlId="countInStock">
<<<<<<< HEAD
=======
            {/* Count In Stock */}
            <Form.Group controlId="countInStock">
>>>>>>> origin/frontendChange
              <Form.Label  style={{
                  textAlign: "start",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#000000",
                }}>Count In Stock</Form.Label>
<<<<<<< HEAD
=======
              <Form.Label>Count In Stock</Form.Label>
>>>>>>> origin/main
>>>>>>> Stashed changes
=======
>>>>>>> origin/frontendChange
              <Form.Control
                type="number"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              />
            </Form.Group>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream

            <Form.Group controlId='category'>
=======
            {/* Category */}
            <Form.Group controlId="category">
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
              <Form.Label>Category</Form.Label>
=======
            {/* Category */}
            <Form.Group controlId="category">
<<<<<<< HEAD
=======
            {/* Category */}
            <Form.Group controlId="category">
>>>>>>> origin/frontendChange
              <Form.Label  style={{
                  textAlign: "start",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#000000",
                }}>Category</Form.Label>
<<<<<<< HEAD
=======
              <Form.Label>Category</Form.Label>
>>>>>>> origin/main
>>>>>>> Stashed changes
=======
>>>>>>> origin/frontendChange
              <Form.Control
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< Updated upstream
              ></Form.Control>
=======
              />
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
              />
            </Form.Group>
            {/* Mini Description */}
            <Form.Group controlId="miniDescription">
              <Form.Label>Mini Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Mini description here"
                value={miniDescription}
                onChange={(e) => setMiniDescription(e.target.value)}
              />
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
            </Form.Group>

            {/* Description */}
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Full description here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            {/* Update button */}
            <Button
<<<<<<< HEAD
<<<<<<< Updated upstream
              type='submit'
              variant='primary'
              style={{ marginTop: '1rem' }}
=======
              type="submit"s
=======
            </Form.Group>
            {/* Mini Description */}
            <Form.Group controlId="miniDescription">
              <Form.Label>Mini Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Mini description here"
                value={miniDescription}
                onChange={(e) => setMiniDescription(e.target.value)}
              />
            </Form.Group>

            {/* Description */}
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Full description here"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            {/* Update button */}
            <Button
              type="submit"
>>>>>>> origin/main
=======
              type="submit"
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
=======
              />
            </Form.Group>
            {/* Mini Description */}
            <Form.Group controlId="miniDescription">
              <Form.Label  style={{
                  textAlign: "start",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#000000",
                }}>Mini Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Mini description here"
                value={miniDescription}
                onChange={(e) => setMiniDescription(e.target.value)}
              />
            </Form.Group>

            {/* Description */}
            <Form.Group controlId="description">
              <Form.Label  style={{
                  textAlign: "start",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#000000",
                }}>Description</Form.Label>

              <JoditEditor
                ref={editor}
                tabIndex={1}
                value={description}
                // onChange={(e) => setDescription(e.target.value)}
                onChange={(newContent) => setDescription(newContent)}
                placeHolder="HELLO"
              />
            </Form.Group>

            {/* Update button */}
            <Button
              type="submit"s
>>>>>>> origin/frontendChange
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
              }}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> c7d68b6767f38a3b030be91d66da0dae0c3fa7b3
=======
>>>>>>> origin/frontendChange
            >
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
