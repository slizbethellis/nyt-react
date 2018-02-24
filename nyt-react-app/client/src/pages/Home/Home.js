import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, Label, Select, SelectItem, FormBtn } from "../../components/Form";
//import API from "../../utils/API";

class Home extends Component {
  // Setting component's initial state
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    return "nothing";
  };
  
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>New York Times Archive Search</h1>
          <p className="lead">Search for articles and annotate interesting ones!</p>
        </Jumbotron>
        <form>
          <Label>Topic</Label>
          <Input
            value={this.state.topic}
            onChange={this.handleInputChange}
            name="topic"
            placeholder="Topic (required)"
          />
          <Label>Number of Articles to Retrieve</Label>
          <Select
            value={this.state.numToRetrieve}
            onChange={this.handleInputChange}
            name="numToRetrieve"
          >
            <SelectItem>1</SelectItem>
            <SelectItem>5</SelectItem>
            <SelectItem>10</SelectItem>
          </Select>
          <Label>Start Year (optional)</Label>
          <Input
            value={this.state.startYear}
            onChange={this.handleInputChange}
            name="startYear"
            placeholder="Start Year"
          />
          <Label>End Year (optional)</Label>
          <Input
            value={this.state.endYear}
            onChange={this.handleInputChange}
            name="startYear"
            placeholder="End Year"
          />
          <FormBtn
            disabled={!(this.state.topic)}
            onClick={this.handleFormSubmit}
          >
            Find Article(s)
          </FormBtn>
        </form>
      </div>
    );
  }
}

export default Home;