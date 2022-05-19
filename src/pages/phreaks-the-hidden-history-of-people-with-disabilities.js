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
const PhreaksTheHiddenHistoryOfPeopleWithDisabilitiesPage = () => {
  return (
    <Layout>
    <Seo title="PH*REAKS: The Hidden History of People with Disabilities" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>PH*REAKS: The Hidden History of People with Disabilities</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" src="https://zno.s3.us-west-1.amazonaws.com/phreaks.png" alt="PH*REAKS: The Hidden History of People with Disabilities"></img>
                  <br></br>
                  <small className='caption'>clockwise from upper left: Bill Trzeciak, Richard Redlin, Barry Schwartz, Tamara Turner, Shari Weiser, John Pixley</small>
                 
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            A play written collectively by a group of writers and theater artists with disabilities led by Victoria Ann Lewis; a series of scenes dramatizing attitudes toward disability through the religious models of the middle ages to the medical models of the early 20th century and into the political movements of  today. Defying all the social models, the storytellers all play members of a freak show to exploit and profit from their disabilities. Based on the book <i>Freak Show: Presenting Human Oddities for Amusement and Profit</i> by Robert Bogdan.  
            </div>
            
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
            <p className="play-meta mt-3"><strong>Development:</strong> Taper New Works Festival.</p>
            <p className="play-meta mt-3"><strong>Publication:</strong> <i>Beyond Victims and Villains</i>, contemporary plays by playwrights with disabilities, TCG
            </p>
            <p className="play-meta mt-3"><a target="blank" href='https://www.amazon.com/Beyond-Victims-Villains-Contemporary-Playwrights/dp/1559362502
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
export default PhreaksTheHiddenHistoryOfPeopleWithDisabilitiesPage