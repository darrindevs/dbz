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
const MrsCaliforniaPage = () => {
  return (
    <Layout>
    <Seo title="Mrs. California" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>Mrs. California</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" alt="Mrs. California" src="https://zno.s3.us-west-1.amazonaws.com/mrs_california.jpg"></img>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            1955. A housekeeping contest sponsored by the Southern California Gas Company pits four housewives against each other in sewing, cooking, ironing and "My Proudest Moment" in evening gown. Dot, an ex-Navy WAVE enters the contest with the help of her neighbor Babs, an ex-aircraft electrician. As the competition increases, Dot has to choose between taking the advice of her male Gas Company sponsor and losing her best friend – or losing the contest. A dark comedy exploring the dangers of women’s isolation and self-denial to fit the expectations of a rigid social structure.  

            </div>
            
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
            <p className="play-meta mt-3"><strong>World Premiere: </strong><span className='underline'>Mark Taper Forum</span>, New Theater for Now, Los Angeles, CA.</p>
            <p className="play-meta mt-3"><strong>Regional Premieres: </strong><span className='underline'>L.A. Public Theater</span>, Los Angeles, CA; <span className='underline'> A Contemporary Theater</span>, Seattle, WA. <span className='underline'> Capitol Rep</span>, Albany, NY.</p>
            <p className="play-meta mt-3"><i>CBS/Dramatists Guild Award</i></p>
            <p className="play-meta mt-3"><strong>Press:</strong> <i>Doris Baizley’s “Mrs. California” deftly strikes the first blow for feminism as comedy... It takes a long, unaffectionate look back at those silly contests about femininity ad absurdum--in this case the Mrs. California competition of 1955…It only hits you later that under all the fun are currents that could sink a ship. </i><strong> Los Angeles Times,  April 22, 1986</strong> </p>
            <p className="play-meta mt-3"><strong>Publisher</strong>: <a href='https://www.dramatists.com/cgi-bin/db/single.asp?key=1083
            ' target="__blank">Dramatists Play Service</a></p>
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
export default MrsCaliforniaPage