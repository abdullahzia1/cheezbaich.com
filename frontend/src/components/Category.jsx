import React from "react";
import { Col, Row } from "react-bootstrap";
import Airpods from "../assets/images/airpods.png";
import mouse from "../assets/images/mouse.png";
import camera from "../assets/images/camera.png";
import playstation from "../assets/images/playstation.png";

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
        <h2 style={{ textAlign: 'center', fontSize: '40px', fontWeight: "700", color:"#000000" , margin: '25px 0px',}}>Category</h2>
        <Row className="d-flex gap-3" style={{  margin: "10px auto", width: '80%', }}>
          <Col
            lg={4}
            md={6}
            sm={12}
            style={{
            borderRadius: '30px',
              background: "#ffff",
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
            }}
          >
            <div className="row">
              <div className="col-1" >
                <h2 style={{ color: '#000000', marginTop: '20px' }}>EarBuds</h2>
              </div>
              <div  className="col-11" >
                <img src={Airpods} alt="" style={{ height: "200px", width: "100%", objectFit: 'contain' }} />
              </div>
            </div>
          </Col>
          <Col
            lg={7}
            md={6}
            sm={12}
            style={{ 
              borderRadius: '30px',
             background: "#ffff",
             boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
            }}
          >
            <div className="row">
              <div className="col-1" >
                <h2 style={{ color: '#000000', marginTop: '20px' }}>Accessories</h2>
              </div>
              <div className="col-11">
                <img src={mouse} alt="" style={{ height: "200px", width: "100%", objectFit: 'contain' }} />
              </div>
            </div>
          </Col>

          <Col
            lg={7}
            md={6}
            sm={12}
            style={{
            borderRadius: '30px',
              background: "#ffff",
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'

            }}
          >
            <div className="row">
              <div className="col-1" >
                <h2 style={{ color: '#000000', marginTop: '20px' }}>Gaming Console</h2>
              </div>
              <div  className="col-11" >
                <img src={playstation} alt="" style={{ height: "200px", width: "100%", objectFit: 'contain',}} />
              </div>
            </div>
          </Col>
          <Col
                      lg={4}
                      md={6}
                      sm={12}

            style={{ 
              borderRadius: '30px',
             background: "#ffff",
             boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
            }}
          >
            <div className="row">
              <div className="col-1">
                <h2 style={{ color: '#000000', marginTop: '20px' }}>Camera</h2>
              </div>
              <div className="col-11">
                <img src={camera} alt="" style={{ height: "200px", width: "100%", objectFit: 'contain' }} />
              </div>
            </div>
          </Col>
        </Row>


      </div>
    </>
  );
};

export default Category;
