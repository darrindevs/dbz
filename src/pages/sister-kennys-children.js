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
const SisterKennysChildrenPage = () => {
  return (
    <Layout>
    <Seo title="Sister Kenny's Children" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>Sister Kenny's Children</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" alt="Sister Kenny's Children" src="https://zno.s3.us-west-1.amazonaws.com/sister_kennys_children.jpg"></img><br></br>
                  <small className='credit'>Claudia Wilkins as Sister Kenny
</small>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            1954. A big brash Australian nurse and her polio patients tell the story of Elisabeth Kenny’s lifelong battle to find acceptance by the medical establishment for the treatments she practiced to restore and relieve the muscles and lives of her patients. Real survivors’ stories punctuate the action with accounts of their experiences with disability during and long after the pandemic. </div>
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
          <p className="play-meta mt-3"><strong>Premiere: </strong><span className='underline'>History Theater</span>, St. Paul, MN, 2010</p>
           
            <p className="play-meta mt-3"><strong>Press:</strong> <i>Wilkens and Baizley cast an unflinching eye at Kenny’s personal recesses and the toll such a solitary journey must have taken -- the self-doubt and constant humiliation by the establishment… The piece helps us understand Kenny's flesh and blood far better than simple documentation.  </i><strong> Minneapolis Star-Tribune,  Jan 25, 2010</strong> </p>
           
            <p className="play-meta mt-3"><a target="blank" href='https://www.dropbox.com/s/xwg1h0gjfjz1lf3/Sister%20Kenny%27s%20Children.pdf?dl=0

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
export default SisterKennysChildrenPage