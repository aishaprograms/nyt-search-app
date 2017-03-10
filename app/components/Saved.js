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
        const numSaved = (this.state.saved.length);
        return(
            <div className="container">
                <div className="row">
                    <h1 className="text-center">All Saved Articles</h1>
                    <p>Here are all the articles saved by you and users like yourself. You may add more articles to this archive by searching for new articles and then saving them. If you wish to remove an article from the archive, click delete and see it disappear. Save and delete responsibly!</p>
                </div>
                <div className="row">
                    <div className="col-sm-10 col-md-offset-1">
                        <div id="saved-alert-area"></div>
                        <div className="panel panel-success">
                            <div className="panel-heading">
                            <h3 className="panel-title text-center">Saved Articles</h3>
                            </div>
                            <div className="panel-body">
                            {numSaved===0 &&
                                <em>
                                There are no saved artivles to display. Enter a new search to see some articles that can be saved.
                                </em>
                            }
                            {/* Map function to loop through the array in JSX */}
                            {this.state.saved.map(function(element, i) {
                                return (
                                    <SavedArticle key={i} id={element._id} url={element.url} title={element.title} date={element.date} updateSaved={this.updateSaved}/>
                                );
                            }, this)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Saved;