import React, { Component } from "react";
import Moment from "moment";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Card, CardHeader, CardBody } from "../../components/Card";
import { List, ListBtn, ListItem } from "../../components/List";
import { Input, Label, FormBtn } from "../../components/Form";
import API from "../../utils/API";

class Home extends Component {
  // Setting component's initial state
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  // saves article to database
  saveArticle = index => {
    API.saveArticle({
      title: this.state.articles[index].headline.main,
      blurb: this.state.articles[index].snippet,
      date: this.state.articles[index].pub_date,
      url: this.state.articles[index].web_url
    }).then(res => alert("Article saved to database!")).catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.searchArticles method to find articles
  // Then load articles from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic) {
      API.searchArticles(this.state.topic, this.state.startYear,this.state.endYear)
        .then(res => this.setState({ articles: res.data.response.docs, topic: "", startYear: "", endYear: "" }))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>New York Times Archive Search</h1>
          <p className="lead">Search for articles and annotate interesting ones!</p>
        </Jumbotron>
        <Container fluid>
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
                      name="endYear"
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
                      {this.state.articles.map((article, index) => {
                        return (
                          <ListItem key={index}>
                            <a href={article.web_url}>
                              <strong>{article.headline.main}</strong>
                            </a>
                            <p>{article.snippet}</p>
                            <p className="small text-muted">{Moment(article.pub_date).format("DD MMMM YYYY, hh:mmA")}</p>
                            <ListBtn onClick={() => this.saveArticle(index)}>Save Article</ListBtn>
                          </ListItem>
                        );
                      })}
                    </List>
                  ) : (
                      <h5>No Results to Display</h5>
                    )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;