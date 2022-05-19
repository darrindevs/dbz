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
const SistersOfPeacePage = () => {
  return (
    <Layout>
    <Seo title="Sisters of Peace" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>Sisters of Peace</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" alt="Sisters of Peace" src="https://zno.s3.us-west-1.amazonaws.com/sisters_of_peace.jpg"></img>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            <p>Four sisters from a Depression era farm enter the Sisters of St Joseph convent in the 1950's, find their own spiritual practices in the protest movements of the 1960's, and continue into the 21st century taking stands against US militarism, environmental destruction, and the anti-LGBTQ+ restrictions of their own church. A lively telling as the McDonald sisters' Irish humor and singing has always lightened their way.</p>
             </div>
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
          <p className="play-meta mt-3"><strong>World Premiere: </strong><span className='underline'>History Theater</span>, St. Paul, MN, 2019</p>
           
            <p className="play-meta mt-3"><strong>Press:</strong> <i>Do you find it hard to imagine how to engage, directly but civilly, with people who hold views you emphatically oppose? SISTERS OF PEACE. models that very thing… It's one of the ways that the play is immediately topical. Another is to track the way rage born of childhood trauma can be, with time and determination, transformed into righteous anger that fuels social activism. </i><strong> BROADWAY WORLD, March 27, 2019.</strong> </p>
           
            <p className="play-meta mt-3"><a target="blank" href='https://www.dropbox.com/s/c38qxm84gaqidft/SISTERS%20OF%20PEACE.pdf?dl=0'>link</a></p>
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
export default SistersOfPeacePage