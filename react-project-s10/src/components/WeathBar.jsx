import { Navbar, Nav, Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function WeathBar() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand href="#" className="d-flex text-white">
          <Icon.BrightnessHighFill  />
          <h1>The WeatherApp</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Regione</Nav.Link>
            <Nav.Link href="#">Info</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WeathBar;
