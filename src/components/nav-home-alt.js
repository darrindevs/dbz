import * as React from "react"
import { Link } from "gatsby"
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const NavHomeAlt = () => (
    <div id="nav-home-alt">
        <Row>
        <Col sm={{ }}>
            <div>
                <h1 className="nav-home-title-alt"><Link className="nav-home-link-lg" to="/"><span>Doris</span><br></br><span>Baizley</span></Link></h1>
                <h2 className="pst"><span>Playwright. </span><span>Story Editor. </span><span>Teacher.</span></h2>
            </div>
        </Col>
        <Col sm={{ }}>
            <div>
                <h2 className="nav-home-link-alt link-about"><Link className="nav-home-link-sm" to="/about">About</Link></h2>
                <h2 className="nav-home-link-alt link-plays"><Link className="nav-home-link-sm" to="/plays">Plays</Link></h2>
                <h2 className="nav-home-link-alt link-community-projects"><Link className="nav-home-link-sm" to="/community-based-plays">Community Based Plays</Link></h2>
                <h2 className="nav-home-link-alt link-story-editing"><Link className="nav-home-link-sm" to="/story-editing">Story Editing</Link></h2>
                <h2 className="nav-home-link-alt link-contact"><Link className="nav-home-link-sm" to="/contact">Contact</Link></h2>
            </div>
        </Col>

        </Row>
    </div>
  );
  
  export default NavHomeAlt;