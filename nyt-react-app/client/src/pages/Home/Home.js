import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
//import API from "../../utils/API";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>New York Times Archive Search</h1>
          <p className="lead">Search for articles and annotate interesting ones!</p>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;