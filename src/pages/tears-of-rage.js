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
const TearsOfRagePage = () => {
  return (
    <Layout>
    <Seo title="Tears Of Rage" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>Tears Of Rage </h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" alt="Tears Of Rage" src="https://zno.s3.us-west-1.amazonaws.com/tears_of_rage.png"></img>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            <div className="play-description mt-3">
            Summer 1967 to Summer 1968. From a country club golf course to the gates of Travis Air Force Base. The struggle of five best friends just out of college whose lives will be changed by the choices they make as the Vietnam War and the Anti-war Movement escalate into conflict at home.
             </div>
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
          <p className="play-meta mt-3"><strong>World Premiere: </strong>A Contemporary Theater, Seattle, 1991</p>
          <p className="play-meta mt-3"><strong>Press:</strong> <i>Tears of Rage has the automatic, artless potency of a photo album. It is moving, troubling and powerful.</i><strong> Seattle Post Intelligencer
            </strong> </p>
            <p className="play-meta mt-3"><a target="_blank" href='https://www.dropbox.com/s/xyabm88pldyoua0/TEARS%20OF%20RAGE%20%282%29.pdf?dl=0'>link</a></p>
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
export default TearsOfRagePage