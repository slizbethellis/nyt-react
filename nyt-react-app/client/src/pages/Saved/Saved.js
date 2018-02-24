import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
//import API from "../../utils/API";

class Saved extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>New York Times Archive Search - Saved Articles</h1>
          <p className="lead">Read saved articles here!</p>
        </Jumbotron>
      </div>
    );
  }
}

export default Saved;