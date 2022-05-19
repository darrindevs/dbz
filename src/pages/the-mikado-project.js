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
const TheMikadoProjectPage = () => {
  return (
    <Layout>
    <Seo title="THE MIKADO PROJECT" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>THE MIKADO PROJECT</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" alt="THE MIKADO PROJECT (with Ken Narasaki) " src="https://zno.s3.us-west-1.amazonaws.com/the_mikado_project.jpg"></img>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            Desperate for a grant to keep the company in business, the director of a small Asian American theater company commits to producing The Mikado and finds himself in furious conflict with his leading diva and splitting up the rest of the troupe. It takes all of them to invent some angry and crazy new takes on the music, lyrics, dancing and a twist on the Gilbert and Sullivan plot to restore their personal relationships and artistic dignity. 


             </div>
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
          <p className="play-meta mt-3"><strong>Premiere: </strong><span className='underline'>Lodestone Theater Company</span>, Burbank, CA, 2007</p>
          <p className="play-meta mt-3"><strong>Press:</strong> <i>Doris Baizley and Ken Narasaki’s world premiere musical, makes serious points about cultural stereotypes and the endemic racism of certain classics, in this case "The Mikado." However, the play's political context is sugar-coated subtext to what is, first and foremost, solid entertainment of a charmingly wacky stripe. </i><strong> Los Angeles Times, 2007
            </strong> </p>
            <p><i>Winner,  Pacific Rim Playwrights Award, Kuma Kahua Theater/University of Hawaii, 2008</i></p>
            <p className="play-meta mt-3"><a target="_blank" href='https://www.dropbox.com/s/j5ufyqwtdui5seo/THE%20MIKADO%20PROJECT.pdf?dl=0'>link</a></p>
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
export default TheMikadoProjectPage