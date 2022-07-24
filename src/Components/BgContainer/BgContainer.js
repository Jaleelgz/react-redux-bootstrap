import React from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";

function BgContainer() {
  const bgColor = useSelector((state) => state.BgColor.value);
  const textColor = useSelector((state) => state.TextColor.value);

  return (
    <Container
      className="rounded-3 d-flex justify-content-center align-items-center fs-1 fw-bold text-dark"
      style={{ backgroundColor: bgColor }}
    >
      <p style={{ color: textColor }}>{bgColor}</p>
    </Container>
  );
}

export default BgContainer;
