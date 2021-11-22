import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";

const Navegador = () => {
  return (
    <Navbar collapseOnSelect expand="lg fixed-top active" bg="navbar-dark-hover-color" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MyTinerary</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Cities">Cities</Nav.Link>

            <NavDropdown title="User" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="25"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>
          <box-icon type="solid" name="map-pin"></box-icon>
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
            <Nav.Link eventKey={2} href="https://goo.gl/maps/Tj2REovgseatLcmu9">
              Location
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAYtJREFUSEu1lY1NwzAQhV8ngA2ACYAJYANggsIGMAFsAEwATABsABMUJqAjlAlAX3UXXVzbsVLFUiQ3cu/93DtnponXbOL6agXYl3Qv6cgIfUm6kbQcItgCQPGFpN2k2ErS8RBIC8CbpLMC03dJ5zUVLQAw3SkUwaKDKQF+M9b18FoUPEuaF1i+SLrcVgFNJjWpTbAnVdUktSiAICB3QQnM+b11TE8lfQQL/mwfiaVnBntA3m/NW/axWA6AdyTtQdKj7TuQ1CI8fTVLOPRtOXcrUgCsY04OrSLnLqxn61cRALY/FrtPU5B6nFNAHYih4MQUMBuo6gH4xNaiVwJwSzZqRAWw3bPJLKXDG05jcwvLcKGb8AjgVwLySgBeOCYrAjlAN+ERwCcWmTRqzKpaFCcWhlctg2Qs+O+TJBT2JjwXU4r7tcAeVlwVRHadDEsa0SQ93EX+IaI4IJzfiKm/I67X9pSu6dQ+ChNTHidRBIhAfExghAVkPC5mhTC4yl7hmoIxzS3+p/U2HQ36D2WFVRmpPYu5AAAAAElFTkSuQmCC" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegador;
