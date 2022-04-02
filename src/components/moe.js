import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Moe = () => (
    <div id="">
       this is moe component
       <StaticImage
      src="https://zno.s3.us-west-1.amazonaws.com/moe_589.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    </div>
  );
  
  export default Moe;