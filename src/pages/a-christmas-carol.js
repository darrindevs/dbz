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
const AChristmasCarolPage = () => {
  return (
    <Layout>
    <Seo title="A Christmas Carol" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>A Christmas Carol</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" src="https://zno.s3.us-west-1.amazonaws.com/a_christmas_carol.jpg" alt="A Christmas Carol"></img>
                </Col>
                <Col>
                  <img className=" play-img rainey" src="https://zno.s3.us-west-1.amazonaws.com/a_christmas_carol_2.png" alt="A Christmas Carol"></img>
                  <p className="play-meta mt-1 mb-3 rainey"><small>David Rainey, Todd Waite. <br></br>Photo by Lynn Lane.</small></p>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            Thanks to their miserly stage manager, a down-on-its-luck theater company has to produce their annual Dickens play without a Scrooge (quit), a Tiny Tim (fired) or a chain for Marley’s Ghost (lost). How they find a way to make the show go on transforms them all as they invent their way through Christmas Past, Christmas Present and Christmas Future.  A fast, fresh, moving, and family-friendly 60 minute classic.  
            </div>
            
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
            <p className="play-meta mt-5"><strong>World premiere:</strong> Mark Taper, 1977.</p>
            <p className="play-meta mt-3"><strong>Productions include:</strong> The Cleveland Playhouse, National Theater of the Deaf, The Semafor Theater,  Prague.</p>
            <p className="play-meta mt-3"><strong>Most Recent:</strong> The Alley Theater, Houston TX., 2021.</p>
            <p className="play-meta mt-3"><strong>Press:</strong> <i>…the choice of the Alley Theater to do this script was a good one for where theatre is today. We are all coming back to our lives, picking up the pieces of where we left off before a pandemic separated us into isolation. Now the hearts that will remain are the hearts who have shown up again, today, without a chain, without lead characters, but with a willingness to figure it out together and in love. That is the spirit of theater.</i><strong>   Broadway World,  Dec. 2021</strong> </p>
            <p className="play-meta mt-3"><strong>Publisher: Dramatists Play Service</strong></p>
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
export default AChristmasCarolPage