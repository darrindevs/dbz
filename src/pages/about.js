// Step 1: Import React
import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout>
        <Seo title="About" />
      <main>
        <Row id="about">
          <Col md></Col>
          <Col md>
            <div className='about-content'>
              <h3 className='mt-5 mb-3'>PLAYWRIGHT BIO</h3>
              <p>Born in Portland Maine, raised in Philadelphia, 
              she lives in Los Angeles where she teaches 
              at Loyola Marymount University. She is a founding 
              member of LA Theaterworks (originally Artists in Prison). 
              She was resident playwright at the Mark Taper Forum’s 
              company for young audiences and dramaturg for its 
              Other Voices Program for theater artists with disabilities.
              Her plays have been developed and produced 
              at the Mark Taper Forum, ACT Seattle, 
              the Alabama Shakespeare Festival, History Theater, 
              The Salt Lake Acting Company and    
              internationally at the Semafor Theater in Prague 
              and the Icon Theater in Taipei. Her most recent 
              work is community-based theater and documentary 
              story editing.      
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
export default AboutPage