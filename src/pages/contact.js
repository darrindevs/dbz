// Step 1: Import React
import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

import NavGlobal from "../components/nav-global"

// Step 2: Define your component
const ContactPage = () => {
  return (
    <Layout>
        <Seo title="Contact" />
      <main>
        <Row id="about">
          <Col md className='col-1 d-flex justify-content-end'>
            <NavGlobal />
          </Col>
          <Col md>
            <div className='contact-content'>
              <h3 className='mt-5 mb-3'>Contact Page</h3>
              <p>We will put a form here.  
              </p>
              
            </div>
          </Col>
          <Col md></Col>
        </Row>
      </main>
    </Layout>
    
  )
}

// Step 3: Export your component
export default ContactPage