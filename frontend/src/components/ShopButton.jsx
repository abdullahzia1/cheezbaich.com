import React from "react";
import { Link } from "react-router-dom";

const ShopButton = () => {
  return (
    <>

    <Link to='/product' style={{ color: '#000000' }}>

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
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        >
        Shop Now
      </button>
        </Link>
    </>
  );
};

export default ShopButton;
