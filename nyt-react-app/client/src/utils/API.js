import axios from "axios";
const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
  // Finds articles from NYT api
  searchArticles: function(topic, startYear, endYear) {
    return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=${topic}${startYear && endYear ? `&begin_date=${startYear}0101&end_date=${endYear}0101` : ""}`);
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