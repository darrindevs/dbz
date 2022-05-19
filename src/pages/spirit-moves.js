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
const SpiritMovesPage = () => {
  return (
    <Layout>
    <Seo title="Spirit Moves" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>Spirit Moves</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 spirit-img" src="https://zno.s3.us-west-1.amazonaws.com/spirit-moves.png" alt="A Christmas Carol"></img>
                  <br>
                  </br>
                  <small className="caption">Rebecca Rodriguez, C.S.J.  portrayed by Rose Portillo</small>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            {/* Story */}
            <p className="story-content mt-3 mb-1">
            Ten Sisters of St. Joseph interviewed by ten women playwrights and portrayed by ten actresses. A collective theater piece of dramatized narratives from women in a social justice centered religious community.  54 minutes.   
            </p>
            <a className="mb-3" href="https://vimeo.com/639281796/46f95a1dcd" target="_blank">video</a>
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
export default SpiritMovesPage