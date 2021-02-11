import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button'
import "../Navbar/Navbar.styles.css";

const MyNavbar = () => {
  return (
    <>
      <Navbar id="bar"  expand="lg">
        <Navbar.Brand id="Brand1" href="#home">Save Data</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
            <Button className="formBtn" >Logout</Button>
        
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MyNavbar;
