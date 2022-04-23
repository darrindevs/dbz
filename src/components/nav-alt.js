import * as React from "react"
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
//import { ListGroup } from 'react-bootstrap'



//import { NavDropdown } from 'react-bootstrap'
import NavMobile from "../components/nav-mobile"

const NavAlt = (
    <Navbar bg="" expand="lg" className="navbar-light mb-5">
    <Navbar.Brand href="/" className="ms-3 brando"><span>Doris</span><br></br><span>Baizley</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <div id="toggle-nav">
                <h6 className="nav-global-link link-about"><Link className="nav-home-link-sm" to="/about">About</Link></h6>
                <h6 className="nav-global-link link-plays"><Link className="nav-home-link-sm" to="/plays">Plays</Link></h6>
                <h6 className="nav-global-link link-community-projects"><Link className="nav-home-link-sm" to="/community-projects">Community Projects</Link></h6>
                <h6 className="nav-global-link link-story-editing"><Link className="nav-home-link-sm" to="/story-editing">Story Editing</Link></h6>
                <h6 className="nav-global-link link-contact"><Link className="nav-home-link-sm" to="/contact">Contact</Link></h6>
            </div>
        
      </Nav>
    </Navbar.Collapse>
   
</Navbar>
)

export default NavAlt
