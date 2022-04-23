import * as React from "react"
import { Navbar } from 'react-bootstrap'
// import { Container } from 'react-bootstrap'
import NavMobile from "../components/nav-mobile"

const NavLight = (
    <Navbar bg="" expand="lg" className="navbar-light">
      <Navbar.Brand href="/" className="ms-3 brando"><span>Doris</span><br></br><span>Baizley</span></Navbar.Brand>
      <Navbar.Toggle className="me-3"/>
      <Navbar.Collapse className="justify-content-end me-3">
        <Navbar.Text className="ms-3">
        </Navbar.Text>
        
      </Navbar.Collapse>
  </Navbar>
)

export default NavLight
