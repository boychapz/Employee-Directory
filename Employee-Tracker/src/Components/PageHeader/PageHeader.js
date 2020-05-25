import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./style.css";
function PageHeader() {
  return (
    <Jumbotron className="page-header">
      <h1>Employee Directory</h1>
      <p>Get employee Information</p>
    </Jumbotron>
  );
}

export default PageHeader;
