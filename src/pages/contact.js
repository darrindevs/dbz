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
          <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
            <Moe />
          </Col>
          <Col lg={{ span: 5, offset: 0 }}>
            <div className='triptych-content'>
              <h2 className='triptych-title'>Contact</h2>
              {/* Form */}
              <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xdobwkok" method="post">
                <fieldset id="fs-frm-inputs">
                  <label for="full-name">Name</label>
                  <input type="text" name="name" id="full-name" placeholder="" required=""></input>
                  <label for="email-address">Email Address</label>
                  <input type="email" name="_replyto" id="email-address" placeholder="" required=""></input>
                  <label for="message">Message</label>
                  <textarea rows="5" name="message" id="message" placeholder="" required=""></textarea>
                  <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
                </fieldset>
  <input type="submit" value="Submit"></input>
</form>
              {/* Form */}
              <h3 className='mt-5 mb-3 invisible'>PLAYWRIGHT BIO</h3>
              <p className='invisible'>Irony typewriter cliche, tofu lo-fi venmo hot chicken portland DIY fingerstache kitsch taxidermy pitchfork disrupt. Four dollar toast forage iPhone 90's pour-over. Bespoke pickled thundercats snackwave. Migas fingerstache raclette, four loko health goth gochujang beard bicycle rights freegan shabby chic. Normcore post-ironic umami cronut four loko authentic, celiac cornhole. Fanny pack williamsburg blog chia twee blue bottle poke. Butcher tattooed forage vape distillery, unicorn +1. Irony typewriter cliche, tofu lo-fi venmo hot chicken portland DIY fingerstache kitsch taxidermy pitchfork disrupt. Four dollar toast forage iPhone 90's pour-over. Bespoke pickled thundercats snackwave. Migas fingerstache raclette, four loko health goth gochujang beard bicycle rights freegan shabby chic. Normcore post-ironic umami cronut four loko authentic, celiac cornhole. Fanny pack williamsburg blog chia twee blue bottle poke. Butcher tattooed forage vape distillery, unicorn +1. Irony typewriter cliche, tofu lo-fi venmo hot chicken portland DIY fingerstache kitsch taxidermy pitchfork disrupt. Four dollar toast forage iPhone 90's pour-over. Bespoke pickled thundercats snackwave. Migas fingerstache raclette, four loko health goth gochujang beard bicycle rights freegan shabby chic. Normcore post-ironic umami cronut four loko authentic, celiac cornhole. Fanny pack williamsburg blog chia twee blue bottle poke. Butcher tattooed forage vape distillery, unicorn +1.
              </p>
            </div>
            <div id="moe-footer"></div>
          </Col>
          <Col lg={{ span: 3, offset: 0 }}>
              <Dorie />
          </Col>
        </Row>
      </main>
    </Layout>
    
  )
}

// Step 3: Export your component
export default ContactPage