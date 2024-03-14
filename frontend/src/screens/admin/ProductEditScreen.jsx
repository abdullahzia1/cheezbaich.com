import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import FormContainer from "../../components/FormContainer";
import { toast } from "react-toastify";
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
  useUploadProductImageMutation,
} from "../../slices/productsApiSlice";
import JoditEditor from "jodit-react";

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

  return (
    <>
      {/* Navigation link */}
      <Link to="/admin/productlist" className="btn btn-light my-3">
        Go back
      </Link>
      {/* Product edit form */}
      <FormContainer>
        <h1>Edit Product</h1>
        {/* Loader for update process */}
        {loadingUpdate && <Loader />}
        {/* Loader for fetching product details */}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error.data.message}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            {/* Form fields */}
            {/* Name */}
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            {/* Price */}
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            {/* Image */}
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
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
            {/* Brand */}
            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </Form.Group>
            {/* Count In Stock */}
            <Form.Group controlId="countInStock">
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              />
            </Form.Group>
            {/* Category */}
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {/* Mini Description */}
            <Form.Group controlId="miniDescription">
              <Form.Label>Mini Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Mini description"
                value={miniDescription}
                onChange={(e) => setMiniDescription(e.target.value)}
              />
            </Form.Group>

            {/* Description */}
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            {/* Update button */}
            <Button
              type="submit"
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
