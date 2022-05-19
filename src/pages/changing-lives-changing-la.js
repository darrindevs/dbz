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
const ChangingLivesChangingLAPage = () => {
  return (
    <Layout>
    <Seo title="CHANGING LIVES, CHANGING L.A." />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>UNITE HERE Local 11 Oral History Project</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" src="https://zno.s3.us-west-1.amazonaws.com/changing-lives-changing-la.jpg" alt="A Christmas Carol"></img>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            {/* Story */}
            <p className="story-content mt-3 mb-1"><span className="story-title me-2"><strong>Changing Lives, Changing L.A.</strong></span>
            (co-edited with Rose Portillo, produced by Vivian Rothstein). Dramatization of four oral histories from UNITE HERE Local 11, hotel and restaurant workers union.
            Union members tell their experiences from first jobs to becoming union leaders, and the challenges and rewards of their commitment to the co-workers.
            </p>
            <a className="mb-3" href="https://vimeo.com/636905254" target="_blank">video</a>
            <p className='mb-1 mt-3'>Script available for free use.</p>
            <a className="mb-3" href="https://www.dropbox.com/s/dx3rh4waimzsgxl/Changing%20Lives%20%20Changing%20LA.pdf?dl=0" target="_blank">link</a>
            </div>
            
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
export default ChangingLivesChangingLAPage