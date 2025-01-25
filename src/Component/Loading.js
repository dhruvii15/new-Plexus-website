import React from "react";
import { Container } from "reactstrap";

// img
import logo from "../img/logo.svg"

 const Loading = () => {
    return (
        <Container
          fluid
          className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 vh-100 vw-100 bg-white z-50"
        >
          <img
            src={logo}
            alt="loading"
            height={200}
            width={200}
            className="img-fluid animation"
            style={{ maxHeight: '600px', objectFit: 'contain' }}
          />
        </Container>
      );
};

export default Loading;
