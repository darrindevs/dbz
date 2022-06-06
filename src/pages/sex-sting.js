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
const SexStingPage = () => {
  return (
    <Layout>
    <Seo title="Sex Sting" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>Sex Sting</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" alt="Sex Sting" src="https://zno.s3.us-west-1.amazonaws.com/sex_sting.jpg"></img>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            Drama. Two men on the border between fantasy and crime. For adult audiences.
Written in collaboration with criminal defense attorney Susan Raffanti, and based on transcripts from a real case, Sex Sting follows the course of an FBI online sting operation that becomes a complex relationship between the FBI agent and his target, John Doe, as the invented seduction turns into a friendship and a welcoming space for sharing troubles, life stories, advice and the kind of engagement with another person that neither man has in his “real life.” 
             </div>
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
          <p className="play-meta mt-3"><strong>Development: </strong><span className='underline'>Guthrie Theatre/Playwrights’ Center</span> Guthrie Theatre/Playwrights’ Center Two-Headed Challenge Commission.</p>
          <p className="play-meta mt-3"><strong>World Premiere: </strong><span className='underline'>Salt Lake Acting Company
            </span>, Salt Lake City, UT.  Nomination, Steinberg Award for    Best  Production outside New York City.</p>
            <p className="play-meta mt-3"><strong>Regional Premiere: </strong><span className='underline'>Skylight Theater </span>  , Los Angeles CA.  LA WEEKLY 10 Best Plays of 2013</p>
           
            <p className="play-meta mt-3"><strong>Press:</strong> <i>Timely and disturbing, "Sex Sting"  raises bold questions about entrapment, the dark side of human nature and the sometimes dangerous line between fantasy and reality.  </i><strong> Salt Lake Tribune, 2/7/2007
            </strong> </p>
            <p className="play-meta mt-3"> <i>…acute psychological observation, reminiscent of Porfiry and Raskolnikov -- with, if anything, far more intense moral ambiguity.  </i><strong> Hollywood Reporter 3/7/2013 
            </strong> </p>
            
            <p className="play-meta mt-3"><a target="blank" href='https://www.dropbox.com/s/p5j0gn45g3cvlhm/SexSting.pdf?dl=0
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
export default SexStingPage