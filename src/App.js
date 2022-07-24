import Container from "react-bootstrap/Container";
import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Counter from "./Components/Counter/Counter";
import BgContainer from "./Components/BgContainer/BgContainer";
import { useSelector } from "react-redux";

function App() {
  const bgColor = useSelector((state) => state.BgColor.value);
  return (
    <Container className="p-3 mainContainer">
      <Header />

      <Container className="p-2 h-auto rounded-2 bg-dark mb-2">
        <Nav />
      </Container>

      <Container className="d-grid gap-3 bg-light h-75 rounded-3 p-3 mb-3">
        <Counter />
        <BgContainer />
      </Container>
    </Container>
  );
}

export default App;
