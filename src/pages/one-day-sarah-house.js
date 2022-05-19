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
const OneDaySarahHousePage = () => {
  return (
    <Layout>
    <Seo title="One Day Sarah House: Living and Dreaming in Hospice" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>ONE DAY SARAH HOUSE: Living and Dreaming in Hospice</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" src="https://zno.s3.us-west-1.amazonaws.com/one-day-sarah-house.jpg" alt="A Christmas Carol"></img>
                  <br></br>
                  <small className='catpion'>Devin Scott and Matthew Tavianini. Photo by David Bazemore</small>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            Paloma and her dog Ginger guide us through twenty-four hours into the stories, dreams and fantasies of five residents at Sarah House, a small, social-model  hospice for unhoused men and women in Santa Barbara CA facing their last six months of life. The play comes from stories told by its staff and residents and their exploration of the good death inspired by Greek myth, dreamwork and the surprises that can come from a mission of "unrelenting kindness."


            </div>
            
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
            <p className="play-meta mt-3"><strong>Premiere:</strong> Center Stage Theater,  Santa Barbara CA, 2009.</p>
            <p className="play-meta mt-3"><strong>Press:</strong> <i>Baizley employs a fascinating blend of movement and discourse that expresses the heart and soul of the profoundly moving place and process that is Sarah House.</i><strong> Santa Barbara Independent, 2009</strong> </p>
            <p className="play-meta mt-3"><i>Winner, Best Original Script,  Santa Barbara Independent,  2009. 
            </i></p>
            <p className="play-meta mt-3"><a target="blank" href='https://www.dropbox.com/s/o70xyc72gjybupa/ONE%20DAY%20SARAH%20HOUSE.pdf?dl=0
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
export default OneDaySarahHousePage