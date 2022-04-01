import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import NavHome from "../components/nav-home"

import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
      <Row id="home">
        <Col className="d-flex justify-content-center" lg={{ span: 7, offset: 0 }}>
          <NavHome />
        </Col>
        <Col className="d-flex justify-content-start" lg={{ span: 5, offset: 0 }}>
        </Col>
        
      
      </Row>
  </Layout>
)

export default IndexPage
