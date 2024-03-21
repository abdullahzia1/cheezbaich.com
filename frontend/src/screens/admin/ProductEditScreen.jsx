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
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import { toast } from "react-toastify";
>>>>>>> Stashed changes
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
  useUploadProductImageMutation,
<<<<<<< Updated upstream
} from '../../slices/productsApiSlice';
=======
} from "../../slices/productsApiSlice";
<<<<<<< HEAD
import JoditEditor from "jodit-react";
=======
>>>>>>> origin/main
>>>>>>> Stashed changes

const ProductEditScreen = () => {
  const { id: productId } = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');

  const {
    data: product,
    isLoading,
    refetch,
    error,
  } = useGetProductDetailsQuery(productId);

  const [updateProduct, { isLoading: loadingUpdate }] =
    useUpdateProductMutation();

  const [uploadProductImage, { isLoading: loadingUpload }] =
    useUploadProductImageMutation();

  const navigate = useNavigate();

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
        countInStock,
      }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block
      toast.success('Product updated');
      refetch();
      navigate('/admin/productlist');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [product]);

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const res = await uploadProductImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
<<<<<<< Updated upstream
        <h1>Edit Product</h1>
=======
<<<<<<< HEAD
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
=======
        <h1>Edit Product</h1>
>>>>>>> origin/main
        {/* Loader for update process */}
>>>>>>> Stashed changes
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error.data.message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
<<<<<<< Updated upstream
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
=======
            {/* Form fields */}
<<<<<<< HEAD

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
=======
            {/* Name */}
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
>>>>>>> origin/main
>>>>>>> Stashed changes
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
<<<<<<< Updated upstream

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
=======
            {/* Price */}
            <Form.Group controlId="price">
<<<<<<< HEAD
              <Form.Label  style={{
                  textAlign: "start",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#000000",
                }}>Price</Form.Label>
=======
              <Form.Label>Price</Form.Label>
>>>>>>> origin/main
>>>>>>> Stashed changes
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>
<<<<<<< Updated upstream

            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
=======
            {/* Image */}
            <Form.Group controlId="image">
<<<<<<< HEAD
              <Form.Label  style={{
                  textAlign: "start",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#000000",
                }}>Image</Form.Label>
=======
              <Form.Label>Image</Form.Label>
>>>>>>> origin/main
>>>>>>> Stashed changes
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <Form.Control
                label='Choose File'
                onChange={uploadFileHandler}
                type='file'
              ></Form.Control>
              {loadingUpload && <Loader />}
            </Form.Group>
<<<<<<< Updated upstream

            <Form.Group controlId='brand'>
              <Form.Label>Brand</Form.Label>
=======
            {/* Brand */}
            <Form.Group controlId="brand">
<<<<<<< HEAD
              <Form.Label  style={{
                  textAlign: "start",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#000000",
                }}>Brand</Form.Label>
=======
              <Form.Label>Brand</Form.Label>
>>>>>>> origin/main
>>>>>>> Stashed changes
              <Form.Control
                type='text'
                placeholder='Enter brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>
<<<<<<< Updated upstream

            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
=======
            {/* Count In Stock */}
            <Form.Group controlId="countInStock">
<<<<<<< HEAD
              <Form.Label  style={{
                  textAlign: "start",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#000000",
                }}>Count In Stock</Form.Label>
=======
              <Form.Label>Count In Stock</Form.Label>
>>>>>>> origin/main
>>>>>>> Stashed changes
              <Form.Control
                type='number'
                placeholder='Enter countInStock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>
<<<<<<< Updated upstream

            <Form.Group controlId='category'>
              <Form.Label>Category</Form.Label>
=======
            {/* Category */}
            <Form.Group controlId="category">
<<<<<<< HEAD
              <Form.Label  style={{
                  textAlign: "start",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#000000",
                }}>Category</Form.Label>
=======
              <Form.Label>Category</Form.Label>
>>>>>>> origin/main
>>>>>>> Stashed changes
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
<<<<<<< Updated upstream
              ></Form.Control>
=======
              />
<<<<<<< HEAD
>>>>>>> Stashed changes
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
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
>>>>>>> Stashed changes
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
