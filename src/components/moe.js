import * as React from "react"


import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import NavGlobal from "../components/nav-global"

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const Moe = () => (
    <div id="moe-container" className="">
      <div id="moe-img" className="">
        <StaticImage
        src="https://zno.s3.us-west-1.amazonaws.com/moe_589.png"
        width={589}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Moe"
        style={{ }}
      />
      </div>
    </div>
    
  );
  
  export default Moe;