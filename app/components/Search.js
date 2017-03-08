// Include React
var React = require("react");
// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");
// Form component
var Form = require('./search/Form');
// Results component
var Results = require('./search/Results');

var Search = React.createClass({
    // initial state
    getInitialState: function() {
        return {results: []};
    },
    // a search term was entered
    searchArticles: function(term, beginYear, endYear){
        //run the query for the search term
        helpers.runQuery(term, beginYear, endYear).then(function(response) {
        if (response !== this.state.results) {
            this.setState({results: response.data.response.docs});
        }
        }.bind(this));
        this.setState({results:[]});
    },
    render: function(){
        return(
            <div className="container">
                <Form searchArticles={this.searchArticles} />
                <Results results={this.state.results} />
            </div>
        );
    }
});

module.exports = Search;