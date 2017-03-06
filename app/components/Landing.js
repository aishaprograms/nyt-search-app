// Include React
var React = require("react");

var Landing = React.createClass({
    render: function(){
        return (
            <div>
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

module.exports = Landing;