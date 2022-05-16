import * as React from "react"

import { Link } from "gatsby"


const StoryEditingList = () => (
    <div id="story-editing-list" className='mt-5'>
        <div>
            <img src="https://zno.s3.us-west-1.amazonaws.com/story_editing_2.JPG" className="thumbnail me-3 mb-3" alt="Story Editing"></img>
            <img src="https://zno.s3.us-west-1.amazonaws.com/story_editing_3.jpg" className="thumbnail me-3 mb-3" alt="Story Editing"></img>
        </div>
        <div id="story-editing-list-content">
            <h5 className="story-title mt-4 mb-3"><strong>Emile Norman by His Own Design</strong></h5>
            <p className="story-content mb-1">
            dir. Will Parrinello, ed, Mary Lampson, pro Jill Eikenberry and Michael Tucker.  A portrait of the artist Emile Norman, through seven decades of a changing art scene and turbulent times for a gay man in America.  
            </p>
            <p className="story-content mb-3"><i>Winner of the HBO Audience Award, Miami Gay and Lesbian Film Festival, 2007. </i>
            </p>
            <a href="https://www.amazon.com/Emile-Norman-His-Own-Design/dp/B0018QOIW6" target="blank">link</a>
            <h5 className="story-title mt-4 mb-3"><strong>As Nutayunean, We Still Live Here</strong></h5>
            <p className="story-content mb-1">
            dir Anne Makepeace. The quest of the Wampanoag Indians to reclaim the forgotten language of their people. 
            </p>
            <p className="story-content mb-1"><i>Winner of the Moving Mountains Prize, Mountain Film Festival, Telluride, CO.</i>
            </p>
            <p className="story-content mb-3"><i>Winner of the Inspiration Award at the Full Frame Documentary Film Festival, Durham NC. </i>
            </p>
            <a href="https://www.makepeaceproductions.com/wampfilm.html" target="_blank">link</a>
            <h5 className="story-title mt-4 mb-3"><strong>Rebels With A Cause</strong></h5>
            <p className="story-content mb-1">
            by Nancy Kelly and Kenji Yamamoto ; narrated by Frances McDormand, the story of the schemers and dreamers who fought to keep developers from taking over the breathtaking landscape of Point Reyes National Seashore and the Golden Gate National Park. 
            </p>
            <p className="story-content mb-3"><i>Winner of the Audience Award, Mill Valley Film Festival. </i>
            </p>
            <a href="http://rebelsdocumentary.org/" target="blank">link</a>
            <h5 className="story-title mt-4 mb-3"><strong>Tribal Justice</strong></h5>
            <p className="story-content mb-3">
            dir. Anne Makepeace. Two Native American judges reach back to traditional concepts of justice in order to reduce incarceration rates, foster greater safety for their communities, and create a more positive future for their youth. By addressing the root causes of crime, they are providing models of restorative justice that are working.  

            </p>
            <a href="https://www.makepeaceproductions.com/tribaljustice/" target="blank">link</a>
            <h5 className="story-title mt-4 mb-3"><strong>Chasing Voices</strong></h5>
            <p className="story-content mb-3">
            dir. Daniel Golding. The life story of John P. Harrington. Beginning in 1907 he crisscrossed the United States obsessively searching and documenting dying Native American languages. Today tribes are accessing the notes, bringing together a new generation of language learners.
            </p>
            <a href="https://www.hokanmedia.com/chasingvoices">link</a>
            <h5 className="story-title mt-4 mb-3"><strong>Sansón and Me</strong></h5>
            <p className="story-content mb-3">
            dir Rodrigo Reyes. Told through dramatic reenactments, Sansón and Me recreates a life of multilayered border crossing as told by Sansón to his interpreter-turned-friend, filmmaker Rodrigo Reyes.

            </p>
            <a href="https://itvs.org/films/sanson-and-me">link</a>
        </div>
    </div>
  );
  
  export default StoryEditingList;