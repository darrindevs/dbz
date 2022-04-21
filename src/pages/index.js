import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//import Layout from "../components/layout"
import LayoutHome from "../components/layout-home"
import Seo from "../components/seo"
import NavHome from "../components/nav-home"

import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const IndexPage = () => (
  
  <LayoutHome>
    <Seo title="Home" />
      <Row id="home">
        <Col className="d-flex justify-content-center" lg={{ span: 7, offset: 0 }}>
          <NavHome />
        </Col>
       
      </Row>
     
  </LayoutHome>
)

export default IndexPage
