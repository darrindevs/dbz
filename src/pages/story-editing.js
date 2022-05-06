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
import StoryEditingList from "../components/story-editing-list"


// Step 2: Define your component
const StoryEditingPage = () => {
  return (
    <Layout>
        <Seo title="Story Editing" />
      <main>
        <Row id="triptych">
          <Col id="" lg={{ span: 4, offset: 0 }} className='col-1'>
            <Moe />
          </Col>
          <Col lg={{ span: 5, offset: 0 }} className="bump">
            <div className='triptych-content'>
              <h2 className='triptych-title'>Story Editing</h2>
              <StoryEditingList />
              
            </div>
            <div id="moe-footer"></div>
          </Col>
          <Col lg={{ span: 3, offset: 0 }}>
              <Dorie />
          </Col>
        </Row>
      </main>
    </Layout>
    
  )
}

// Step 3: Export your component
export default StoryEditingPage