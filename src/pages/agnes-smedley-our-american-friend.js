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
const AgnesSmedleyOurAmericanFriendPage = () => {
  return (
    <Layout>
    <Seo title="Agnes Smedley, Our American Friend" />
  <main>
    <Row id="play">
      <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
        <NavGlobal/>
      </Col>
      <Col lg={{ span: 6, offset: 0 }}>
        <div className='play-content mb-5'>
          <h3 className='play-title mb-3'>Agnes Smedley, Our American Friend</h3>
          {/* Media Obect */ }
          <div className="play-media-object">
            <div className="play-img-container">
              <Row>
                <Col>
                  <img className="me-3 mb-3 play-img" src="https://zno.s3.us-west-1.amazonaws.com/agnes_smedley_our_american_friend.jpg" alt="Agnes Smedley, Our American Friend"></img>
                </Col>
               
                <Col>
                </Col>
                <Col>
                </Col>
              </Row>
            </div>
            
            
            <div className="play-description mt-3">
            1934. In camp with the Chinese People’s Army, Agnes Smedley, a radical American journalist, interviews the popular general Chu Teh. Trading stories, they discover their lives and rebellious personalities ran parallel through poverty and oppression, leading them to deep beliefs in revolution. Played by two Asian and two non-Asian actors, the play moves through time and place like the square dances Agnes taught the revolutionaries.
            </div>
            
          </div>
          {/* Media Obect */ }
          <div className="play-meta-container">
          <p className="play-meta mt-3"><strong>Development: </strong>A Contemporary Theater, Seattle WA, 1992</p>
            <p className="play-meta mt-3"><strong>Premiere:</strong> Big Fork Playwrights Retreat, Bigfork MT.</p>
            <p className="play-meta mt-3"><strong>Press:</strong> <i>Doris Baizley hit bedrock with Agnes Smedley…with her square-dance instructions echoing in our ears: “Take the hand of the person next to you; if you get lost, keep moving forward; be bold in executing all calls; and always keep your head raised.” They’re the watchwords of a larger-than-life character who very nearly bursts the seams of this small-scale, finely wrought play.</i><strong> Variety, Oct 11, 1993
</strong> </p>
            <p className="play-meta mt-3"><a target="blank" href='https://www.dropbox.com/s/ek99qmvl2z819bj/AGNES%20SMEDLEY%20OUR%20AMERICAN%20FRIEND.pdf?dl=0
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
export default AgnesSmedleyOurAmericanFriendPage