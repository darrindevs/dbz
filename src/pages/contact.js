// Step 1: Import React
import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

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
              <h3 className='mt-5 mb-3 invisible'>PLAYWRIGHT BIO</h3>
              <p className='invisible'>Irony typewriter cliche, tofu lo-fi venmo hot chicken portland DIY fingerstache kitsch taxidermy pitchfork disrupt. Four dollar toast forage iPhone 90's pour-over. Bespoke pickled thundercats snackwave. Migas fingerstache raclette, four loko health goth gochujang beard bicycle rights freegan shabby chic. Normcore post-ironic umami cronut four loko authentic, celiac cornhole. Fanny pack williamsburg blog chia twee blue bottle poke. Butcher tattooed forage vape distillery, unicorn +1.
              </p>
             
             
            </div>
            <div id="moe-footer"></div>
          </Col>
          <Col md>
              <Dorie />
          </Col>
        </Row>
      </main>
    </Layout>
    
  )
}

// Step 3: Export your component
export default ContactPage