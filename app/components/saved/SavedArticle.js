// Include React
var React = require("react");
// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

var SavedArticle = React.createClass({
    getInitialState: function(){
        return {url:'', title:'', date: '', id: ''};
    },
    handleDelete: function(event){
        event.preventDefault();
        helpers.deleteSavedArticles(this.state.id);
        alert('You deleted an article.');
        this.props.updateSaved();
    },
    componentDidMount: function(){
        this.setState({url:this.props.url, title:this.props.title, date:this.props.date, id:this.props.id});
    },
    render: function(){
        return(
            <div>
                <button className="btn btn-warning btn-xs pull-right" onClick={this.handleDelete}>Delete</button>
                <a href={this.props.url}><p>{this.props.title}</p></a>
                <hr />
            </div>
        );
    }
});

module.exports = SavedArticle;