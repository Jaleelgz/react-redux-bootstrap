import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import randomColor from "randomcolor";
import { change_bg_color } from "../../Redux/BgColor/BgColorSlice";
import { decrease_count, increase_count } from "../../Redux/Count/CountSlice";
import { change_text_color } from "../../Redux/TextColor/TextColorSlice";

function Nav() {
  const dispatch = useDispatch();
  const bgColor = useSelector((state) => state.BgColor.value);

  const changeBgColor = () => {
    dispatch(change_bg_color({ bgColor: randomColor() }));
  };

  const changeTextColor = () => {
    dispatch(change_text_color({ textColor: randomColor() }));
  };

  const increaseCount = () => {
    dispatch(increase_count({ count: 1 }));
  };

  const decreaseCount = () => {
    dispatch(decrease_count({ count: 1 }));
  };

  return (
    <Container className="mx-auto d-flex align-items-center">
      <Button
        className="mx-auto"
        onClick={changeBgColor}
        style={{ backgroundColor: bgColor }}
      >
        Change bg Color
      </Button>

      <Button className="mx-auto" onClick={changeTextColor}>
        Change text Color
      </Button>

      <Button className="mx-auto" onClick={increaseCount}>
        Increase count
      </Button>

      <Button className="mx-auto" onClick={decreaseCount}>
        Decrese count
      </Button>
    </Container>
  );
}

export default Nav;
