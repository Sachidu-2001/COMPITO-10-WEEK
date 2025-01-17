import { Navbar, Nav, Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function WeathBar() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container className="d-flex">
        <Navbar.Brand href="#" className="d-flex text-white">
          <Icon.BrightnessHighFill  />
          <h1>The WeatherApp</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="ms-5">
          <Nav className="me-auto">
            <Nav.Link href="#" className="text-white">Previsioni</Nav.Link>
            <Nav.Link href="#" className="text-white">Regione</Nav.Link>
            <Nav.Link href="#" className="text-white">Notizie</Nav.Link>
            <Nav.Link href="#" className="text-white">Info</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WeathBar;
