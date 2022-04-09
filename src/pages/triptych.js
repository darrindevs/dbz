// Step 1: Import React
import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

//import NavGlobal from "../components/nav-global"
import Moe from "../components/moe"
import Dorie from "../components/dorie"


// Step 2: Define your component
const TriptychPage = () => {
  return (
    <Layout>
        <Seo title="Triptych" />
      <main>
        <Row id="triptych">
          <Col id="" md className='col-1'>
            <Moe />
          </Col>
          <Col md>
            <div className='triptych-content'>
              <h2 className='triptych-title'>Triptych</h2>
              <h3 className='mt-5 mb-3'>PLAYWRIGHT BIO</h3>
              <p>Born in Portland Maine, raised in Philadelphia, 
              she lives in Los Angeles where she teaches 
              at Loyola Marymount University. She is a founding 
              member of LA Theaterworks (originally Artists in Prison). 
              She was resident playwright at the Mark Taper Forum’s 
              company for young audiences and dramaturg for its 
              Other Voices Program for theater artists with disabilities.
              Her plays have been developed and produced 
              at the Mark Taper Forum, ACT Seattle, 
              the Alabama Shakespeare Festival, History Theater, 
              The Salt Lake Acting Company and    
              internationally at the Semafor Theater in Prague 
              and the Icon Theater in Taipei. Her most recent 
              work is community-based theater and documentary 
              story editing.      
              </p>
              <h3 className='mt-5 mb-3'>ORIGIN STORY</h3>
              <p>In fifth grade I invented playwriting. (You write down the character’s name, 
              then you write down the words they say). The play was the story of Sir Walter Raleigh. 
              He puts his cloak over a muddle for Queen Elizabeth I to cross and she knights him. 
              But the next king doesn’t like him.  He orders Sir Walter’s head (a goateed basketball) to be cut off. 
              The ax falls. The head rolls into the audience.  A huge hit! 
              The play was so popular in our classroom it was moved to the auditorium. 
              It had everything, romance, history - and irony.
              I never wanted to do anything else. 
              </p>
              <h3 className='mt-5 mb-3'>GROUPS, TROUPES, ENSEMBLES AND COMPANIES</h3>
              <p>Playwriting isn’t a solitary activity for me. I started out 
                working in groups, with groups, about groups.  <a href="#">Lee Worley</a>
                a founder of the <a href="#">Open Theater</a>formed an ensemble to perform 
                my first play at the Washington Square Methodist Church
                with months of rehearsal and everyone playing every role. 
                Then with the Theater of Man in San Francisco we wrote 
                and performed collectively. In a rehearsal room at the 
                <a href="#">Mark Taper Forum</a>in Los Angeles I wrote two plays a year 
                to tour the schools with a seven member company directed
                by John Dennis meeting six days a week for physical work, 
                improv, and theater games to inspire my research and writing.
                At the Taper a few years later I got to work with <a href="#">Victoria Ann Lewis</a> 
                in the Other Voices Project to dramaturg, research, and edit 
                a collective play by writers and theater artists with disabilities.  
                With Susan Loewenberg, Bonnie Banfield, Barbara Ling and
                Judith Blahnik we developed a theater workshop in California prisons
                and expanded it to become a company: <a href="#">L.A. Theaterworks</a>.
                The work I did in all of these groups goes into the community 
                based and documentary work I do and teach now.        
              </p>
            </div>
            <div id="moe-footer"></div>
          </Col>
          <Col md>
              <Dorie />
          </Col>
        </Row>
      </main>
    </Layout>
    
  )
}

// Step 3: Export your component
export default TriptychPage