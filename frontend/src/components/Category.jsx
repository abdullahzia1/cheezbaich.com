import React from "react";
import { Col, Row } from "react-bootstrap";
import Airpods from "../assets/images/airpods.png";
import earbuds from "../assets/images/earbuds.png";
import accessories from "../assets/images/accessories.png";
import headphone from "../assets/images/headphone.png";
import laptop from "../assets/images/laptop.png";

const Category = () => {
  return (
    <>
      <div
        style={{
          background: "#F0F0F0",
          borderRadius: "25px",
          marginTop: "30px",
          padding: "25px 0px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "700",
            color: "#000000",
            margin: "25px 0px",
          }}
        >
          Category
        </h2>
        <Row
          className="gap-3"
          style={{ margin: "10px auto", width: "80%" }}
        >
          <Col
            lg={4}
            md={6}
            sm={12}
            style={{
              borderRadius: "30px",
              background: "#ffff",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            }}
          >
            <Row>
              <Col lg={4} md={12} sm={12}>
                <h2 style={{ color: "#000000", marginTop: "10px" }}>
                  TWS Earbuds
                </h2>
              </Col>
              <Col lg={8} md={12} sm={12}>
                <img
                  src={earbuds}
                  alt=""
                  style={{
                    height: "180px",
                    objectFit: "contain",
                  }}
                />
              </Col>
            </Row>
          </Col>


          <Col
            lg={7}
            md={6}
            sm={12}
            style={{
              borderRadius: "30px",
              background: "#ffff",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            }}
          >
            <Row>
              <Col lg={6} md={12} sm={12}>
                <h2 style={{ color: "#000000", marginTop: "10px" }}>
                Computer Accessories
                </h2>
              </Col>
              <Col Col lg={6} md={12} sm={12}>
                <img
                  src={accessories}
                  alt=""
                  style={{
                    height: "180px",
                    objectFit: "fill",
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row
          className="d-flex gap-3"
          style={{ margin: "10px auto", width: "80%" }}
        >
          <Col
            lg={7}
            md={6}
            sm={12}
            style={{
              borderRadius: "30px",
              background: "#ffff",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            }}
          >
            <Row>
              <Col lg={6} md={12} sm={12}>
                <h2 style={{ color: "#000000", marginTop: "20px" }}>
                  PC & Laptop
                </h2>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <img
                  src={laptop}
                  alt=""
                  style={{
                    height: "170px",
                    objectFit: "contain",
                  }}
                />
              </Col>
            </Row>
          </Col>
          <Col
            lg={4}
            md={6}
            sm={12}
            style={{
              borderRadius: "30px",
              background: "#ffff",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            }}
          >
            <Row>
              <Col lg={6} md={12} sm={12}>
                <h2 style={{ color: "#000000", marginTop: "20px" }}>HeadPhone</h2>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <img
                  src={headphone}
                  alt=""
                  style={{
                    height: "180px",
                    objectFit: "contain",
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Category;
