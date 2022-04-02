import * as React from "react"

import { Link } from "gatsby"

const NavHome = () => (
    <div id="nav-home">
        <div className="nav-home-1">
            <h1 className="nav-home-title"><Link className="nav-home-link-lg" to="/"><span>Doris</span><br></br><span>Baizley</span></Link></h1>
            
        </div>
        <div className="nav-home-2">
            <h2 className="nav-home-link link-about"><Link className="nav-home-link-sm" to="/about">About</Link></h2>
            <h2 className="nav-home-link link-plays"><Link className="nav-home-link-sm" to="/plays">Plays</Link></h2>
            <h2 className="nav-home-link link-community-projects"><Link className="nav-home-link-sm" to="/community-projects">Community Projects</Link></h2>
            <h2 className="nav-home-link link-story-editing"><Link className="nav-home-link-sm" to="/story-editing">Story Editing</Link></h2>
            <h2 className="nav-home-link link-contact"><Link className="nav-home-link-sm" to="/contact">Contact</Link></h2>
        </div>
    </div>
  );
  
  export default NavHome;