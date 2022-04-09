// Step 1: Import React
import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

//import NavGlobal from "../components/nav-global"
import Moe from "../components/moe"
import Dorie from "../components/dorie"
import ContactForm from "../components/contact-form"


// Step 2: Define your component
const ContactPage = () => {
  return (
    <Layout>
        <Seo title="Contact" />
      <main>
        <Row id="triptych">
          <Col id="" md className='col-1'>
            <Moe />
          </Col>
          <Col md>
            <div className='triptych-content'>
              <h2 className='triptych-title'>Contact</h2>
              <ContactForm />
            </div>
            <div id="moe-footer"></div>
          </Col>
          <Col md className='col-3'>
              <Dorie />
          </Col>
        </Row>
      </main>
    </Layout>
    
  )
}

// Step 3: Export your component
export default ContactPage