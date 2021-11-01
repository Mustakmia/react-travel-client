import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import './Header'

const Header = () => {
  const { user, logOut } = useAuth()

  return (
    <div className="mb-5">
      <Navbar expand="lg" style={{ backgroundColor: 'lightblue' }}>
        <img style={{ height: '50px', width: '50px' }} src="https://image.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg" alt="" />
        <Container>

          <Navbar.Brand href="/">
            World Tour
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-dark fw-bold"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              {
                user?.email && <Nav.Link as={Link} to="/order">
                  My Order
                </Nav.Link>
              }
              {
                user?.email && <Nav.Link as={Link} to="/createNewEvent">
                  Create New Event
                </Nav.Link>
              }
              {
                (user?.email) && <Nav.Link as={Link} to="/management">
                  Managment
                </Nav.Link>
              }
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <div>
            </div>

            {
              (user?.email) ? <Link to="/login">
                <button onClick={logOut}>Log out</button>
              </Link> : <Link to="/login">
                <button>Login</button>
              </Link>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
