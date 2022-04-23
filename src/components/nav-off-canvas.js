import * as React from "react"
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { useState } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Offcanvas } from 'react-bootstrap'


import NavMobile from "../components/nav-mobile"


const NavOffCanvas = (
    <Navbar bg="" expand="lg" className="navbar-light">
    <Navbar.Brand href="/" className="ms-3 brando"><span>Doris</span><br></br><span>Baizley</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Container id="toggle-dropdown">
            <div >
                this nav off canvas
            </div>
        </Container>
        
      </Nav>
    </Navbar.Collapse>
   
</Navbar>
)

export default NavOffCanvas
