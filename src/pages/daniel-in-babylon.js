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
const DanielInBabylonPage = () => {
  return (
    <Layout>
    <Seo title="Daniel In Babylon" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>Daniel In Babylon</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" alt="Daniel in Babylon" src="https://zno.s3.us-west-1.amazonaws.com/daniel_in_babylon.jpg"></img>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            The bible tale as a contemporary story for young audiences. In retreat from the demands of his parents, teachers and coaches, Daniel falls asleep with his earphones on and finds himself in a stadium-like Babylon with three kids (Shadrach, Meshach and Abednego) forced into training to defend a failing tyrant. Forming a funny, smart and deeply loyal team, they resist and outwit a succession of autocratic bullies taking over Babylon - until the Fiery Furnace in which the three survive only in spirit. Facing a solitary trial in the lions’ den, Daniel’s friends appear and give him the strength, spirit and wisdom to survive and even rise to a power that he comes close to misusing. But their  gifts stay with him and guide him back to the waking world. 

            </div>
            
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
          <p className="play-meta mt-3"><strong>Premiere: </strong>L.A. Stage Company, 1986</p>
            <p className="play-meta mt-3"><strong>International:</strong> Icon Theater, Taipei, Taiwan, 1990</p>
            <p className="play-meta mt-3"><strong>Press:</strong> <i>Daniel in Babylon is an hour of whirlwind children's theater made out of simple tools, fleshed out by nothing more than talent. Not only does it have action and a heartening grass roots moralism to it, it's full of theater ideas… real theater, for which no other entertainment form is an adequate substitute... designed to hook children on the live theater habit. </i><strong> Jack Viertel, L.A. Herald Examiner, 1986</strong> </p>
            <p className="play-meta mt-3"><strong>Publication:</strong> WEST COAST PLAYS 19/20, 1986</p>
            <p className="play-meta mt-3"><a target="_blank" href='https://www.dropbox.com/s/m2rdntvee2qffkq/DANIEL%20IN%20BABYLON.pdf?dl=0
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
export default DanielInBabylonPage