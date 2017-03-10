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
                <div className="row">
                    <div className="row">
                        <h1 className="text-center">Search <em>New York Times</em></h1>
                        <p>Search by keyword, start year, and end year. Articles will be searched form Jan 1 of the start year to Dec 31 of the end year. Make sure the year you enter is between 1900 and 2017.</p>
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <Form searchArticles={this.searchArticles} />
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <div id="alert-area"></div>
                        <Results results={this.state.results} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Search;