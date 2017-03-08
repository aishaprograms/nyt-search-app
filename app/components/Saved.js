// Include React
var React = require("react");
// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

var SavedArticle = require('./saved/SavedArticle');

// This is the Saved component. It will be used to show the saved articles
var Saved = React.createClass({
    //initial state
    getInitialState: function(){
        return {saved:[]};
    },
    // The moment the page renders get the Saved articles
    componentDidMount: function() {
        // Get the saved articles
        helpers.getSavedArticles().then(function(response) {
        if (response !== this.state.saved) {
            this.setState({ saved: response.data });
        }
        }.bind(this))
        .catch(function(error){
            console.log(error);
        });
    },
    updateSaved: function(){
        helpers.getSavedArticles().then(function(response) {
        if (response !== this.state.saved) {
            this.setState({ saved: response.data });
        }
        }.bind(this))
        .catch(function(error){
            console.log(error);
        });
    },
    render: function(){
        return(
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                    <h3 className="panel-title text-center">Saved Articles</h3>
                    </div>
                    <div className="panel-body">
                    {/* Map function to loop through the array in JSX */}
                    {this.state.saved.map(function(element, i) {
                        return (
                            <SavedArticle key={i} id={element._id} url={element.url} title={element.title} date={element.date} updateSaved={this.updateSaved}/>
                        );
                    }, this)}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Saved;