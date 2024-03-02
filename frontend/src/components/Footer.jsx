import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#F0F0F0", marginTop: "140px" }}>
      <Container>
        <Card
          style={{
            position: "relative",
            bottom: "70px",
            background: "#000000",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            borderRadius: "30px",
          }}
        >
          <Row>
            <Col lg={8} md={7} sm={12} xs={12}>
              {" "}
              <h1
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "600",
                  color: "#ffffff",
                  margin: "60px 0px",
                }}
              >
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h1>
            </Col>
            <Col
              lg={4}
              md={5}
              sm={12}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <form>
                  <div class="mt-2">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="✉ Enter your email address"
                      style={{ borderRadius: "20px", width: "250px" }}
                    />
                  </div>
                </form>
                <Button
                  type="submit"
                  style={{
                    width: "250px",
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#000000",
                    textAlign: "center",
                    border: "1px Solid black",
                    background: "#ffffff",
                    borderRadius: "200px",
                    margin: "10px 0px",
                    padding: "10px 25px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  }}
                >
                  Subscribe to Newsletter
                </Button>
              </div>
            </Col>
          </Row>
        </Card>

        <Row>
          <Col lg={6} md={6} sm={3} xs={6}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logo} alt="CheezBaich" style={{ width: "60px" }} />
              <h1
                style={{
                  fontSize: "30px",
                  fontWeight: "800",
                  color: "#000000",
                  margin: "10px 0px",
                }}
              >
                CHEEZ BAICH
              </h1>
            </Link>
          </Col>

          <Col lg={2} md={2} sm={3} xs={6}>
            <h5
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#000000",
                margin: "10px 0px",
              }}
            >
              Company
            </h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">About</li>
              <li class="nav-item mb-2">Features</li>
              <li class="nav-item mb-2">Works</li>
              <li class="nav-item mb-2">About</li>
            </ul>
          </Col>
          <Col lg={2} md={2} sm={3} xs={6}>
            <h5
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#000000",
                margin: "10px 0px",
              }}
            >
              Help
            </h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">Customer Support</li>
              <li class="nav-item mb-2">Delivery Details</li>
              <li class="nav-item mb-2">Terms & Conditions</li>
              <li class="nav-item mb-2">Privacy Policy</li>
            </ul>
          </Col>
          <Col lg={2} md={2} sm={3} xs={6}>
            <h5
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#000000",
                margin: "10px 0px",
              }}
            >
              FAQ
            </h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">Manage Deliveries</li>
              <li class="nav-item mb-2">Payments</li>
              <li class="nav-item mb-2">Orders</li>
              <li class="nav-item mb-2">Account</li>
            </ul>
          </Col>
        </Row>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 mt-4 border-top">
          <p>© {currentYear} Company, Inc. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
