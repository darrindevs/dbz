import * as React from "react"
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

import FooterText from "./footer-text"

const Footer = () => (
    <div className="footer">
      <Row id="" className="">
      <Col id="" lg={{ span: 4, offset: 0 }} className=''></Col>
      <Col id="" lg={{ span: 5, offset: 0 }} className=''>
        
        <FooterText /></Col>
      <Col id="" lg={{ span: 3, offset: 0 }} className=''></Col>
      </Row>
    </div>
  );
  
  export default Footer;