import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function NavBar() {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink exact
              activeStyle={{ fontWeight: "bold", color: "#db0000" }}
              style={{fontWeight: "bold", textDecoration: "none", color: "white" }}
              to="/"
            >
              Home
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <NavLink
                activeStyle={{ fontWeight: "bold", color: "#db0000" }}
                style={{ fontWeight: "bold",textDecoration: "none", color: "white" }}
                to="/movies"
              >
                Movies
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeStyle={{ fontWeight: "bold", color: "#db0000" }}
                style={{ fontWeight: "bold",textDecoration: "none", color: "white" }}
                to="/directors"
              >
                Directors
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                activeStyle={{ fontWeight: "bold", color: "#db0000" }}
                style={{fontWeight: "bold", textDecoration: "none", color: "white" }}
                to="/actors"
              >
                Actors
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
