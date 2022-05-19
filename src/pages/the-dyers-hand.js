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
const TheDyersHandPage = () => {
  return (
    <Layout>
    <Seo title="The Dyer's Hand or The Merchant of Mexico" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>The Dyer's Hand or The Merchant of Mexico</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" alt="The Dyer's Hand or The Merchant of Mexico" src="https://zno.s3.us-west-1.amazonaws.com/the_dyers_hand.jpg"></img>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            Veracruz, 1600. Trouble in a Mexican merchant’s family delays his ship carrying a  cargo of precious red dye to Venice where an Italian merchant, in debt to his moneylender, is waiting. A mysterious English dyer has plans to pirate the cargo along with the merchant’s romantic daughter, to ruin his business and reveal his Jewish identity to the Spanish Court of the Inquisition recently arrived in Mexico. What begins as family comedy turns on the conflicts of a global trade war, a vicious caste system, and murderous ethnic and religious cleansing into the tragic consequences of present times. 

             </div>
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
          <p className="play-meta mt-3"><strong>Development: </strong><span className='underline'>River Stage</span>, Sacramento, CA, Loyola Marymount University, L.A. CA</p>
            <p className="play-meta mt-3"><a target="_blank" href='https://www.dropbox.com/s/55x6xd0h16nmwgh/The%20Dyer%27s%20Hand.pdf?dl=0'>link</a></p>
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
export default TheDyersHandPage