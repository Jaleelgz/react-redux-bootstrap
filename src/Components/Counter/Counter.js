import React from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.Count.value);
  return (
    <Container className="bg-primary rounded-3 d-flex justify-content-center align-items-center fs-1 fw-bold text-white">
      {count}
    </Container>
  );
}

export default Counter;
