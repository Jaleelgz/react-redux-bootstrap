import React from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";

function Header() {
  const textColor = useSelector((state) => state.TextColor.value);

  return (
    <Container className="bg-light rounded-3 p-3 mb-3 border border-info">
      <center>
        <h2 style={{ color: textColor }} className="header mx-auto">
          Redux and Bootsrtap
        </h2>
      </center>
    </Container>
  );
}

export default Header;
