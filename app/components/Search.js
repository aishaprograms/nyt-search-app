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
        return { term: "", beginYear:"", endYear:"", results: []};
    },
    // a search term was entered
    componentDidUpdate: function(){
        //run the query for the search term
        helpers.runQuery(this.state.term, this.state.beginYear, this.state.endYear).then(function(response) {
        if (response !== this.state.results) {
            this.setState({results: response.data.response.docs});
        }
        }.bind(this));
    },
    // This function allows childrens to update the parent.
    setSearch: function(searchTerm, searchBegin, searchEnd) {
        this.setState({ term: searchTerm, beginYear: searchBegin, endYear: searchEnd });
    },
    render: function(){
        return(
            <div>
                <Form setSearch={this.setSearch} />
                <Results results={this.state.results} />
            </div>
        );
    }
});

module.exports = Search;