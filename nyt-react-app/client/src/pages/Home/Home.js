import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { Card, CardHeader, CardBody } from "../../components/Card";
import { List, ListItem } from "../../components/List";
import { Input, Label, Select, SelectItem, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Home extends Component {
  // Setting component's initial state
  state = {
    articles: [],
    topic: "",
    numToRetrieve: "",
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
        <Row>
          <Col size="md-11">
            <Card>
              <CardHeader>Search Parameters</CardHeader>
              <CardBody>
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
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-11">
            <Card>
              <CardHeader>Article Results</CardHeader>
              <CardBody>
                {this.state.articles.length ? (
                  <List>
                    {this.state.articles.map(book => {
                      return (
                        <ListItem key={article._id}>
                          <a href={article.url}>
                            <strong>{article.title}</strong>
                            <p className="text-muted">{article.date}</p>
                          </a>
                          <DeleteBtn/>
                        </ListItem>
                      );
                    })}
                  </List>
                ) : (
                    <h3>No Results to Display</h3>
                  )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;