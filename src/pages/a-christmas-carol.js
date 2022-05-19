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
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            A down-on-its-luck theater company has to produce its annual Dickens play without a Scrooge (quit), a Tiny Tim (fired) or a chain for Marley’s Ghost (lost). How they find a way to make the show go on transforms them all as they invent their way through Christmas Past, Present and Future.  A fast, fresh, moving, and family-friendly 60 minute classic.  

            </div>
            
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
            <p className="play-meta mt-3"><strong>World premiere:</strong> Mark Taper Forum, 1977.</p>
            <p className="play-meta"><strong>Most recent:</strong> The Alley Theater, Houston, TX., 2021</p>
           
            <p className="play-meta mt-3"><strong>Press:</strong> <i>…the choice of the Alley Theater to do this script was a good one for where theatre is today. We are all coming back to our lives, picking up the pieces of where we left off before a pandemic separated us into isolation. Now the hearts that will remain are the hearts who have shown up again, today, without a chain, without lead characters, but with a willingness to figure it out together and in love. That is the spirit of theater.</i><strong>   Broadway World,  Dec. 2021</strong> </p>
            <p className="play-meta mt-3"><strong>Publisher: </strong><a href='https://www.dramatists.com/cgi-bin/db/single.asp?key=954' target="__blank">Dramatists Play Service</a></p>
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