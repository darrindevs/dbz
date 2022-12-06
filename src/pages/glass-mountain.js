// Step 1: Import React
import * as React from 'react'
import { Container } from 'react-bootstrap'

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import NavGlobal from '../components/nav-global'

//import NavGlobal from "../components/nav-global"

// Step 2: Define your component
const GlassMountainPage = () => {
  return (
    <Layout>
    <Seo title="Glass Mountain" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>Glass Mountain</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" alt="Glass Mountain" src="https://zno.s3.us-west-1.amazonaws.com/glass_mountain.jpg"></img>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            The L.A. version of a Grimm's Tale set in a glass house high over the city. Enchanted by fame in the world of music, a celebrated composer’s daughter is frozen between her reclusive father’s demands and his mistress’s anger. When a young composer appears uninvited to study with his idol, a power struggle between the four of them offers a way out, and becomes                                                     a new piece of music. A quartet accompanied by distant traffic and coyotes.
            </div>
            
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
          <p className="play-meta mt-3"><strong>Development: </strong>Ojai Playwrights’ Festival, Ojai CA.</p>
            <p className="play-meta mt-3"><a target="blank" href='https://www.dropbox.com/s/6y1p6zqihwgtci2/GLASS%20MOUNTAIN%204.pdf?dl=0
            '>link</a></p>
          </div>
          
        </div>
        
      </Col>
      <Col lg={{ span: 2, offset: 0 }}>
          
      </Col>
    </Row>
  </main>
</Layout>

  )
}

// Step 3: Export your component
export default GlassMountainPage