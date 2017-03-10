// Include React
var React = require("react");
// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

var SavedArticle = React.createClass({
    getInitialState: function(){
        return {url:'', title:'', date: '', id: ''};
    },
    // Deleted article and shows alert
    handleDelete: function(event){
        event.preventDefault();
        helpers.deleteSavedArticles(this.state.id);
        this.showAlert();
        this.props.updateSaved();
    },
    showAlert: function(){
        var alert = '<div class="alert alert-info alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Done!</strong> You deleted an article!</div>';
        $('#saved-alert-area').append(alert);
        $(".alert").alert();
    },
    componentDidMount: function(){
        this.setState({url:this.props.url, title:this.props.title, date:this.props.date, id:this.props.id});
    },
    render: function(){
        return(
            <div>
                <button className="btn btn-danger btn-xs pull-right" onClick={this.handleDelete}>Delete</button>
                <a href={this.props.url}><p>{this.props.title}</p></a>
                <hr />
            </div>
        );
    }
});

module.exports = SavedArticle;