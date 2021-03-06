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
const PlaysTemplatePage = () => {
  return (
    <Layout>
    <Seo title="Play Title" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col mdlg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mt-5 mb-3'>A Christmas Carol</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <img className="align-self-start mr-3 play-img" src="https://via.placeholder.com/150" alt="Generic placeholder image"></img>
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
          {/* Additional Content */}
          <div className="flex-shrink-0 play-img-container">
              <img class="align-self-start mr-3 mt-5 play-img" src="https://via.placeholder.com/300" alt="Generic placeholder image"></img>
          </div>
          <h6 className="play-meta mt-3">A caption</h6>
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
export default PlaysTemplatePage