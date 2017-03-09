// Include React
var React = require("react");

var Landing = React.createClass({
    render: function(){
        return (
            <div>
                <div className="jumbotron">
                    <div className="container darken">
                        <h1>NYT Search</h1>
                        <blockquote className="pull-right">
                            <p>Search.</p>
                            <p>Save.</p>
                            <p>Repeat.</p>
                        </blockquote>
                    </div>
                </div>
                <div className="thick-red-hr"></div>
                <div className="container"> 
                    <h2>Finding <em>New York Times</em> articles made easy</h2>
                    <p>This is simple. Search articles by keywords and their publication year. If you find an article that you like, save it for viewing later.</p>
                    <br />
                    <h2>Access saved articles in one place</h2>
                    <p>What was that one thing that you read that one time? No problem. It's saved for you to view, any time. If you no longer want to keep the article, just delete it.</p>
                    <br />
                    <br />
                    <div className="text-center">
                        <h3>Streamlined. Organized. Yours at NYT Search.</h3>
                    </div>
                    <br />
                </div>
            </div>
        );
    }
});

module.exports = Landing;