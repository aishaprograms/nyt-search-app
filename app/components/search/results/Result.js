// Include React
var React = require("react");
// Helper for making AJAX requests to our API
var helpers = require("../../utils/helpers");

var Result = React.createClass({
    getInitialState: function(){
        return {url:'', title:'', date: '', snippet: ''};
    },
    // Saves article and shows alert
    handleSave: function(event){
        event.preventDefault();
        var article = {
            title: this.state.title,
            url: this.state.url,
            date: this.state.date
        };
        helpers.addSavedArticles(article);
        this.showAlert();
    },
    showAlert: function(){
        var alert = '<div class="alert alert-success alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Success!</strong> You added an article!</div>';
        $('#alert-area').append(alert);
        $(".alert").alert();
    },
    componentDidMount: function(){
        this.setState({url:this.props.url, title:this.props.title, date:this.props.date, snippet:this.props.snippet});
    },
    render: function(){
        return (
            <div>
                <button className="btn btn-primary btn-xs pull-right" onClick={this.handleSave}>Save</button>
                <a href={this.state.url} target="_blank"><p>{this.state.title}</p></a>
                <p>{this.state.snippet}</p>
                <hr />
            </div>
        );
    }
});

module.exports = Result;