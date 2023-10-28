import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../logo.svg";

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light" expand="lg" className='steaky-top shadow'>
        <Container>
          <Navbar.Brand href="/"><img src={logo} alt="logo" className='d-block w-100' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
              <Nav.Link as={Link} to="/tv-shows">TV Shows</Nav.Link>
              <Nav.Link as={Link} to="/celebs">Celebs</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar