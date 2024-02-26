import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";
import banner3 from "../assets/images/banner3.png";
import banner4 from "../assets/images/banner4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../assets/styles/swiper.css";

import {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <>
      <div style={{ height: "84vh", backgroundColor: "#F2F0F1" }}>
        <Swiper
          style={{ width: "100%", height: "100%" }}
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={true}
          effect={"creative"}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          speed={1000}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>

            <div class="container text-center">
              <div class="row">

                <div class="col-lg-6 col-md-12 col-sm-12 my-auto animate-from-top">
                  <p
                    className="headingbanner"
                    style={{
                      fontSize: "70px",
                      fontWeight: "900",
                      color: "#000",
                      marginTop: "20px",
                      textAlign: "start",
                    }}
                  >
                    Console Collection
                  </p>
                  <p
                  className="secondbanner"
                    style={{
                      fontSize: "40px",
                      fontWeight: "300",
                      color: "#ffff",
                      textAlign: "center",
                      border: "1px Solid black",
                      background: "black",
                      display: "inline-block",
                      padding: "0px 10px",
                    }}
                  >
                    New Gadget Collection
                  </p>
                  <p
                  className="thirdbanner"
                    style={{
                      fontSize: "26px",
                      fontWeight: "300",
                      color: "#000",
                      textAlign: "start",
                    }}
                  >
                    An exciting place for the whole family! to shop.
                  </p>
                  <button
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
                    }}
                  >
                    Shop Now
                  </button>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12  animate-from-bottom">
                  <img src={banner1} alt="" style={{ objectFit: "fit", width: '70%', height: '100%' }} />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>

            <div class="container text-center">
              <div class="row">

                <div class="col-lg-6 col-md-12 col-sm-12 my-auto animate-from-top">
                  <p
                    className="headingbanner"
                    style={{
                      fontSize: "70px",
                      fontWeight: "900",
                      color: "#000",
                      marginTop: "20px",
                      textAlign: "start",
                    }}
                  >
                    Flash Sale
                  </p>
                  <p
                  className="secondbanner"
                    style={{
                      fontSize: "40px",
                      fontWeight: "300",
                      color: "#ffff",
                      textAlign: "center",
                      border: "1px Solid black",
                      background: "black",
                      display: "inline-block",
                      padding: "0px 10px",
                    }}
                  >
                    New Smart Phone collection
                    
                  </p>
                  <p
                  className="thirdbanner"
                    style={{
                      fontSize: "26px",
                      fontWeight: "300",
                      color: "#000",
                      textAlign: "start",
                    }}
                  >
                    An exciting place for the whole family! to shop.
                  </p>
                  <button
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
                    }}
                  >
                    Shop Now
                  </button>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12  animate-from-bottom">
                  <img src={banner2} alt="" style={{ objectFit: "fit", width: '70%', height: '100%' }} />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>

<div class="container text-center">
  <div class="row">

    <div class="col-lg-6 col-md-12 col-sm-12 my-auto animate-from-top">
      <p
        className="headingbanner"
        style={{
          fontSize: "70px",
          fontWeight: "900",
          color: "#000",
          marginTop: "20px",
          textAlign: "start",
        }}
      >
New collection
      </p>
      <p
      className="secondbanner"
        style={{
          fontSize: "40px",
          fontWeight: "300",
          color: "#ffff",
          textAlign: "center",
          border: "1px Solid black",
          background: "black",
          display: "inline-block",
          padding: "0px 10px",
        }}
      >
        New Accessories collection
        
      </p>
      <p
      className="thirdbanner"
        style={{
          fontSize: "26px",
          fontWeight: "300",
          color: "#000",
          textAlign: "start",
        }}
      >
        An exciting place for the whole family! to shop.
      </p>
      <button
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
        }}
      >
        Shop Now
      </button>
    </div>
    <div class="col-lg-6 col-md-12 col-sm-12  animate-from-bottom">
      <img src={banner3} alt="" style={{ objectFit: "fit", width: '70%', height: '100%' }} />
    </div>
  </div>
</div>
</SwiperSlide>

<SwiperSlide>

<div class="container text-center">
  <div class="row">

    <div class="col-lg-6 col-md-12 col-sm-12 my-auto animate-from-top">
      <p
        className="headingbanner"
        style={{
          fontSize: "70px",
          fontWeight: "900",
          color: "#000",
          marginTop: "20px",
          textAlign: "start",
        }}
      >
New collection
      </p>
      <p
      className="secondbanner"
        style={{
          fontSize: "40px",
          fontWeight: "300",
          color: "#ffff",
          textAlign: "center",
          border: "1px Solid black",
          background: "black",
          display: "inline-block",
          padding: "0px 10px",
        }}
      >
        New EarBuds Collection
        
      </p>
      <p
      className="thirdbanner"
        style={{
          fontSize: "26px",
          fontWeight: "300",
          color: "#000",
          textAlign: "start",
        }}
      >
        An exciting place for the whole family! to shop.
      </p>
      <button
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
        }}
      >
        Shop Now
      </button>
    </div>
    <div class="col-lg-6 col-md-12 col-sm-12  animate-from-bottom">
      <img src={banner4} alt="" style={{ objectFit: "fit", width: '70%', height: '100%' }} />
    </div>
  </div>
</div>
</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ProductCarousel;

{
  /* <>
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Carousel, Image } from "react-bootstrap";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../assets/styles/swiper.css";

import {
  Autoplay,
  EffectCreative,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import Rating from "./Rating";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <>
      <div style={{ height: "85vh", backgroundColor: "#F2F0F1" }}>
        
        <Swiper
          style={{ width: "100%", height: "100%" }}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          effect={"creative"}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {products.map((product) => (
            <>
              <div key={product._id}>
                <SwiperSlide style={{ background: "#F2F0F1" }}>
                  <div
                    class="card text-center"
                    style={{
                      width: "80%",
                      height: "80%",
                      margin: "0 auto",
                      borderRadius: "100px",
                      background: "#ffff",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      class="row "
                      style={{ width: "80%", height: "80%", margin: "0 auto" }}
                    >
                      <div className="col-lg-5 col-md-6 col-sm-12 text-center">
                        <img
                          src={product.image}
                          className="card-img mx-auto img-fluid"
                          alt={product.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "100px",
                            display: "block",
                            objectFit: "cover cover",
                          }}
                        />
                      </div>

                      <div
                        class="col-lg-7 col-md-6 col-sm-12"
                      >
                        <div class="card-body">
                          <h1 class="card-title text-start ">
                            <strong>{product.name}</strong>
                          </h1>
                          <h5 class="card-text text-start">
                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                            />
                          </h5>
                          <p class="card-text text-start" style={{ fontSize: '20px', fontWeight: '300'}}>
                            {product.description}
                          </p>
                          <h3 class="card-title text-start" style={{ fontSize: '30px', fontWeight: '700'}}>
                            <strong>${product.price}</strong>
                          </h3>
                          <button
                            type="button"
                            class="btn btn-outline-dark"
                            style={{
                              color: "black",
                              width: "40%",
                              height: '50px',
                              background: "#F2F0F1",
                              border: "1px solid gray",
                              marginTop: '30px'
                            }}
                          >
                            Shop Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductCarousel;
</> */
}
