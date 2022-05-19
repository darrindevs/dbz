import * as React from "react"

import { Link } from "gatsby"


const StoryEditingList = () => (
    <div id="story-editing-list" className='mt-5'> 
        <div>
            <img src="https://zno.s3.us-west-1.amazonaws.com/story_editing_2.JPG" className="thumbnail me-3 mb-3" alt="Story Editing"></img>
            <img src="https://zno.s3.us-west-1.amazonaws.com/story_editing_3.jpg" className="thumbnail me-3 mb-3" alt="Story Editing"></img>
        </div>
        <div id="story-editing-list-content">
            {/* Story */}
            <p className="story-content mb-1"><span className="story-title me-2"><strong>Sansón and Me</strong></span>
            dir. Rodrigo Reyes, producer Su Kim.. Told through dramatic reenactments, Sansón and Me recreates a life of multilayered border crossing as told by Sansón to his
            interpreter-turned-friend, ﬁlmmaker Rodrigo Reyes. 
            <i> A Tribeca Film Festival selection, 2022.</i>
            </p>
            <a className="mb-3" href="https://itvs.org/films/sanson-and-me" target="_blank">link</a>
            {/* Story */}
             <p className="story-content mt-3 mb-1"><span className="story-title me-2"><strong>Chasing Voices</strong></span>dir. Daniel Golding. The life story of John P. Harrington. Beginning in 1907 he crisscrossed the United States obsessively searching and documenting dying Native American languages. Today tribes are accessing the notes, bringing together a new generation of language learners.
            </p>
            <a className="mb-3" href="https://www.hokanmedia.com/chasingvoices" target="_blank">link</a>
            
            {/* Story */}
            <p className="story-content mt-3 mb-1"><span className="story-title me-2"><strong>Tribal Justice</strong></span>
            dir. Anne Makepeace. Two Native American judges reach back to traditional concepts of justice in order to reduce incarceration rates, foster greater safety for their communities, and create a more positive future for their youth. By addressing the root causes of crime, they are providing models of restorative justice that are working. 
            </p>
            <a className="mb-3" href="https://www.makepeaceproductions.com/tribaljustice/" target="_blank">link</a>
            {/* Story */}
            <p className="story-content mt-3 mb-1"><span className="story-title me-2"><strong>Rebels With A Cause</strong></span>
            dir. Nancy Kelly and Kenji Yamamoto, narrated by Frances McDormand. The story of the schemers and dreamers who fought to keep developers from taking over the breathtaking landscape of Point Reyes National Seashore and the Golden Gate National Park. <i>Winner of the Audience Award, Mill Valley Film Festival.</i>
            </p>
            <a className="mb-3" href="http://rebelsdocumentary.org/" target="_blank">link</a>
            {/* Story */}
            <p className="story-content mt-3 mb-1"><span className="story-title me-2"><strong>As Nutayunean, We Still Live Here</strong></span>
            dir. Anne Makepeace. The quest of the Wampanoag Indians to reclaim the forgotten language of their people. <i>Winner of the Moving Mountains Prize, Mountain Film Festival, Telluride, CO.</i> <i>Winner of the Inspiration Award at the Full Frame Documentary Film Festival, Durham NC. </i>
            </p>
            <a className="mb-3" href="http://www.makepeaceproductions.com/wampfilm.html" target="_blank">link</a>
            {/* Story */}
            <p className="story-content mt-3 mb-1"><span className="story-title me-2"><strong>Emile Norman by His Own Design</strong></span>
            dir. Will Parinello, ed. Mary Lampson, produced by Jill Eikenberry and Michael Tucker. A portrait of the artist Emile Norman through seven decades of a changing art scene and turbulent times for a gay man in America. <i>Winner of the HBO Audience Award, Miami Gay and Lesbian Film Festival, 2007.</i> 
            </p>
            <a className="mb-3" href="http://www.emilenorman.com/pbsdoc.html" target="_blank">link</a>
        </div>
    </div>
  );
  
  export default StoryEditingList;