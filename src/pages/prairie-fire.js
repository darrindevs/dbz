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
const PrairieFirePage = () => {
  return (
    <Layout>
    <Seo title="Prairie Fire" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>Prairie Fire</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" alt="Prairie Fire" src="https://zno.s3.us-west-1.amazonaws.com/prairie_fire.jpg"></img>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            An America at the crossroads emerges as two cross-country road trips – 1999, a mother and son westbound on a college tour; 1974, a fugitive couple eastbound after a direct action goes wrong – converge in one woman’s mind, driving the hunted radical from her safe comfortable life to the uneasy realization that by living a lie to evade capture she’s betrayed herself and her beliefs, leading her son to discover the stranger he once called mom. </div>
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
          <p className="play-meta mt-3"><strong>Development: </strong>Mark Taper Forum Playwright’s Group</p>
            <p className="play-meta mt-3"><a target="blank" href='https://www.dropbox.com/s/04i95c6jdod1ejx/PRAIRIE%20FIRE.pdf?dl=0
            '>Download</a></p>
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
export default PrairieFirePage