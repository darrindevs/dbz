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
const ShilohRulesPage = () => {
  return (
    <Layout>
    <Seo title="Shiloh Rules" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>Shiloh Rules</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" alt="Shiloh Rules" src="https://zno.s3.us-west-1.amazonaws.com/shiloh_rules.jpg"></img>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            Two Union nurses and two female Confederate refugees struggle to hold their ground at Shiloh National Military Park in a reenactment of 1868’s bloodiest Civil War battle. Opposing them all is Ranger Wilson, a Black woman park ranger who wants nothing to do with 1868. As things slip out of control, a supply and refreshment stand operator convinces her the only way to restore order is to go onto the field in a Union uniform. None of them comes out unwounded or unchanged - except for the Widow Beckwith and her supply cart, moving on to the next war game. A dark comedy with serious intent. 
            </div>
            
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
          <p className="play-meta mt-3"><strong>Development: </strong>Taper New Works Festival, LA CA., Intiman Theater Reading Series, Seattle WA. Hedgebrook Residency, Whidbey Island, WA.</p>
            <p className="play-meta mt-3"><strong>Workshop Production:</strong> New Century Theater, Northampton MA.  2001.</p>
            <p className="play-meta mt-3"><strong>World Premiere:</strong> Alabama Shakespeare Festival, Montgomery AL. 2002.</p>
            <p className="play-meta mt-3"><strong>NYC:</strong> Flying Fig Theater, 2006.</p>
            <p className="play-meta mt-3"><strong>Publisher: </strong><a href="https://www.playscripts.com/play/3238" target="blank"> Playscripts Inc.</a></p>
            <p className="play-meta mt-3"><strong>Press:</strong> <i>It's not easy finding a new take on something as heavily scrutinized as the Civil War, but Doris Baizley has done it in "Shiloh Rules," an inventive comedy with some drama, history and first-aid tips thrown in. Sterling performances by the six-member, all-female cast make the production, by the Flying Fig Theater and Middle Tennessee State University, a rewarding trip back to, well, the present.
            </i><strong>New York Times, March 2006</strong> </p>
            <p className="play-meta mt-3"><i>Like the best war plays, Shiloh Rules thrums the heart and stirs the mind.</i><strong>Backstage, March 2006</strong> </p>
           
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
export default ShilohRulesPage