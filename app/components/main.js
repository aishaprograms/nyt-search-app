// Include React
var React = require("react");

var Main = React.createClass({
    render: function(){
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nyt-search-nav">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">NYT Search</a>
                        </div>

                        <div className="collapse navbar-collapse" id="nyt-search-nav">
                        <ul className="nav navbar-nav">
                            <li><a href="#/search">Search</a></li>
                            <li><a href="#/saved">Saved Articles</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <div className="jumbotron">
                    <div className="container">
                        <h1>NYT Search</h1>
                        <blockquote className="pull-right">
                            <p>Search.</p>
                            <p>Save.</p>
                            <p>Repeat.</p>
                        </blockquote>
                    </div>
                </div>
                <div className="container">
                    <h2>Click search to get started</h2>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Main;