// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT authKey
var authKey ='ad1325afb8354719b4404326965826e6';

var helper = {
    //runs the query with beginning and end dates
    runQuery: function(query, beginYear, endYear){
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json",
            {
                params: {
                    'api-key': "ad1325afb8354719b4404326965826e6",
                    'q': query.trim(),
                    'begin_date': beginYear.trim() +'0101',
                    'end_date': endYear.trim() +'1231',
                    'fl': "web_url,pub_date,headline,snippet",
            },
        });
    },
    // retrieves saved articles from server
    getSavedArticles: function(){
        return axios.get('/api/saved');
    },
    // adds articles to database
    addSavedArticles: function(article){
        return axios.post('/api/saved', article)
    },
    //deletes articles from db
    deleteSavedArticles: function(id){
        return axios.delete('/api/saved/'+id);
    }
}

module.exports = helper;