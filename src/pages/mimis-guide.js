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
const MimisGuidePage = () => {
  return (
    <Layout>
    <Seo title="Mimi's Guide" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>Mimi's Guide</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" alt="Mimi's Guide" src="https://zno.s3.us-west-1.amazonaws.com/mimis_guide.png"></img>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            The sensuality of Louisiana's humid, jasmine-scented air permeates this love triangle about three people who are haunted by the memories of the Vietnam war. 
             </div>
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
          <p className="play-meta mt-3"><strong>World Premiere: </strong> Fremont Center Theatre, South Pasadena. 2000</p>
          <p className="play-meta mt-3"><strong>Press:</strong> <i>Baizley writes passionately about the lingering effects of Vietnam. The questioning voice of Robert--a refugee success story--presents a different facet of America, challenging Waterman’s protest heroics and ideals.  </i><strong> L.A. Times</strong> </p>
            <p className="play-meta mt-3"><a target="blank" href='https://www.dropbox.com/s/lqdt07jwyal0qhr/Mimi%27s%20Guide.pdf?dl=0'>Download</a></p>
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
export default MimisGuidePage