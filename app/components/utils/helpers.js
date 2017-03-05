// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT authKey
var authKey ='ad1325afb8354719b4404326965826e6';

var helper = {
    //runs the query with beginning and end dates
    runQuery: function(query, beginDate, endDate){
        return axios.get({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        params: {
            'api-key': "ad1325afb8354719b4404326965826e6",
            'q': query,
            'begin_date': beginDate,
            'end_date': endDate,
            'sort': "newest",
            'fl': "web_url,pub_date,headline,snippet",
            'page': 0
        },
        }).then(function(err, response, body) {
            body = JSON.parse(body);
            console.log(body);
        });
    },
    // retrieves saved articles from server
    getSavedArticles: function(){
        return axios.get('/api/saved');
    },
    // adds articles to database
    addSavedArticles: function(article){
        return axios.post('/api/saved', {article: article})
    },
    //deletes articles from db
    deleteSavedArticles: function(){
        return axios.delete('/api/saved');
    }
}

module.exports = helper;