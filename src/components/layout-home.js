/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 
 //import Header from "./header"
 //import NavDark from "./nav-dark"
 import NavLight from "./nav-light"
 import Footer from "./footer"
 //import "./layout.css"  
 // 👆 replaced with bootstrap minified 👇
 import 'bootstrap/dist/css/bootstrap.min.css'
 // add custom css folder and file 
 import '../css/custom.css'
 
 // styling customizarions
 import { Container } from 'react-bootstrap'
 import { Row } from 'react-bootstrap'
 import { Col } from 'react-bootstrap'
 
 
 const LayoutHome = ({ children }) => {
  
   return (
     <>
       {/* remove default header 
       <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
       */}
       
       {/* Custom Navbar */}
      
       {/* Custom Container */}
       <Container fluid>
           <main>
           {children}
           </main>
          </Container>
       {/*} <Footer/>*/}
      
     </>
   )
 }
 
 LayoutHome.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default LayoutHome
 