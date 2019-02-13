import axios from "axios";
const authKey = process.env.REACT_APP_NYT_KEY;

export default {
  // Finds articles from NYT api
  searchArticles: function(topic, startYear, endYear) {
    const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?${startYear && endYear ? `&begin_date=${startYear}0101&end_date=${endYear}1231` : ""}&q=${topic}&api-key=${authKey}`;
    return axios.get(queryURL);
  },
  // Gets all saved articles
  getArticles: function() {
    return axios.get("/api/articles/");
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};