import * as React from "react"

import { Link } from "gatsby"

const CommunityProjectsList = () => (
    <>
    
    <div id="projects-list" className='mt-5'>
    <div id="projects-list-content">
            {/* Story */}
            <p className="story-content mb-1"><span className="story-title me-2"><strong>Title</strong></span>
            dir. Rodrigo Reyes, producer Su Kim.. Told through dramatic reenactments, Sansón and Me recreates a life of multilayered border crossing as told by Sansón to his
            interpreter-turned-friend, ﬁlmmaker Rodrigo Reyes. 
            <i> A Tribeca Film Festival selection, 2022.</i>
            </p>
            <a className="mb-3" href="https://itvs.org/films/sanson-and-me" target="blank">link</a>
        </div>
    </div>
    
    </>
    
  );
  
  export default CommunityProjectsList;