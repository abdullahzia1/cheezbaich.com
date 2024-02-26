import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Rating from "./Rating";

const ReviewHomepage = () => {
  return (
    <>
      <Swiper
        style={{
          width: "100%",
          height: "100%",
        }}
        slidesPerView={3}
        spaceBetween={20}
        navigation={true} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
        modules={[Navigation, Autoplay, Pagination]}
      >
        {/* Your slides go here */}

        <SwiperSlide style={{ backgroundColor: "#ffffff" }}>
          <div
            className="card"
            style={{
              width: "500px",
              padding: "15px 5px",
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
              borderRadius: "30px",
            }}
          >
            <Rating value={3} text={`2 reviews`} />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                Sarah M.
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: "13px",
                  fontWeight: "300",
                  color: "#0000009c",
                }}
              >
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Additional slides go here */}
        <SwiperSlide style={{ backgroundColor: "#ffffff" }}>
          <div
            className="card"
            style={{
              width: "500px",
              padding: "15px 5px",
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
              borderRadius: "30px",
            }}
          >
            <Rating value={3} text={`2 reviews`} />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                Sarah M.
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: "13px",
                  fontWeight: "300",
                  color: "#0000009c",
                }}
              >
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundColor: "#ffffff" }}>
          <div
            className="card"
            style={{
              width: "500px",
              padding: "15px 5px",
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
              borderRadius: "30px",
            }}
          >
            <Rating value={3} text={`2 reviews`} />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                Sarah M.
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: "13px",
                  fontWeight: "300",
                  color: "#0000009c",
                }}
              >
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundColor: "#ffffff" }}>
          <div
            className="card"
            style={{
              width: "500px",
              padding: "15px 5px",
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
              borderRadius: "30px",
            }}
          >
            <Rating value={3} text={`2 reviews`} />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                Sarah M.
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: "13px",
                  fontWeight: "300",
                  color: "#0000009c",
                }}
              >
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundColor: "#ffffff" }}>
          <div
            className="card"
            style={{
              width: "500px",
              padding: "15px 5px",
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
              borderRadius: "30px",
            }}
          >
            <Rating value={3} text={`2 reviews`} />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                Sarah M.
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: "13px",
                  fontWeight: "300",
                  color: "#0000009c",
                }}
              >
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundColor: "#ffffff" }}>
          <div
            className="card"
            style={{
              width: "500px",
              padding: "15px 5px",
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
              borderRadius: "30px",
            }}
          >
            <Rating value={3} text={`2 reviews`} />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                Sarah M.
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: "13px",
                  fontWeight: "300",
                  color: "#0000009c",
                }}
              >
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundColor: "#ffffff" }}>
          <div
            className="card"
            style={{
              width: "500px",
              padding: "15px 5px",
              boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px",
              borderRadius: "30px",
            }}
          >
            <Rating value={3} text={`2 reviews`} />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ fontSize: "20px", fontWeight: "600" }}
              >
                Sarah M.
              </h5>
              <p
                className="card-text"
                style={{
                  fontSize: "13px",
                  fontWeight: "300",
                  color: "#0000009c",
                }}
              >
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ReviewHomepage;
