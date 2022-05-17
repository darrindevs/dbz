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
const MayPage = () => {
  return (
    <Layout>
    <Seo title="May" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>May</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" alt="May" src="https://zno.s3.us-west-1.amazonaws.com/may.png"></img>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            On an island in the eastern Aegean, Mimi, an aging peace activist  recently divorced from a Vietnamese-American poet, comes to bring home her estranged daughter May working on an archeological dig site. As their conflict escalates and a storm damages the site, they discover an ancient link between women and warfare that will move them forward with a new understanding of each other and the importance of their lives in the world.
             </div>
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
          <p className="play-meta mt-3"><strong><i>In development</i></strong></p>
            <p className="play-meta mt-3"><a target="blank" href='https://www.dropbox.com/s/ikkuedx1rn0vmt4/MAY.pdf?dl=0'>Download</a></p>
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
export default MayPage