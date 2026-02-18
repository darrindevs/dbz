import * as React from "react"
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const FooterText = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <small><span>© Doris Baizley {year} / Built by </span><span><a href="https://dynamo.dev" target="blank" className="dynamo">Dynamo</a></span></small>
    </>
  );
};
  
  export default FooterText;