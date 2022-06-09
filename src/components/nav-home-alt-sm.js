import * as React from "react"
import { Link } from "gatsby"
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const NavHomeAltSm = () => (
    <div id="nav-home-alt-sm">
       <div>
            <h1 className="nav-home-title-alt-sm"><Link className="nav-home-link-lg" to="/"><span className="nav-home-link-lg"><span>Doris</span><br></br><span>Baizley</span></span></Link></h1>
            <h3 className="mb-4 pst"><span>Playwright. </span><span>Story Editor. </span><span>Teacher.</span></h3>
        </div>
        <div>
            <h2 className="nav-home-link-alt-sm link-about"><Link className="nav-home-link-sm" to="/about">About</Link></h2>
            <h2 className="nav-home-link-alt-sm link-plays"><Link className="nav-home-link-sm" to="/plays">Plays</Link></h2>
            <h2 className="nav-home-link-alt-sm link-community-projects"><Link className="nav-home-link-sm" to="/community-projects">Community Based Plays</Link></h2>
            <h2 className="nav-home-link-alt-sm link-story-editing"><Link className="nav-home-link-sm" to="/story-editing">Story Editing</Link></h2>
            <h2 className="nav-home-link-alt-sm link-contact"><Link className="nav-home-link-sm" to="/contact">Contact</Link></h2>
        </div>
      
    </div>
  );
  
  export default NavHomeAltSm;