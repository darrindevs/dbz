import * as React from "react"

import { Link } from "gatsby"

const NavGlobal = () => (
    <div id="nav-global-container" className="d-flex justify-content-end">
        <div className="nav-global-content ">
        <h5 className="nav-global-title"><Link className="nav-global-link-lg" to="/"><span>Doris</span><br></br><span>Baizley</span></Link></h5>
        <h5 className="mb-4 pst"><span>Playwright. </span><span>Story Editor. </span><span>Teacher.</span></h5>
            <h6 className="nav-global-link link-about"><Link className="nav-home-link-sm" to="/about">About</Link></h6>
            <h6 className="nav-global-link link-plays"><Link className="nav-home-link-sm" to="/plays">Plays</Link></h6>
            <h6 className="nav-global-link link-community-projects"><Link className="nav-home-link-sm" to="/community-based-plays">Community Based Plays</Link></h6>
            <h6 className="nav-global-link link-story-editing"><Link className="nav-home-link-sm" to="/story-editing">Story Editing</Link></h6>
            <h6 className="nav-global-link link-contact"><Link className="nav-home-link-sm" to="/contact">Contact</Link></h6>
        </div>
    </div>
  );
  
  export default NavGlobal;