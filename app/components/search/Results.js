// Include React
var React = require("react");

var Result = require('./results/Result');

var Results = React.createClass({
    render: function(){
        const numResults = (this.props.results.length);
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Results</h3>
                </div>
                <div className="panel-body">
                    {/* Here we use a map function to loop through an array in JSX */}
                    {numResults===0 &&
                        <em>
                        There are no results to display. Enter a new search to see some results.
                        </em>
                    }
                    {this.props.results.map(function(element, index) {
                        return (
                            <Result key={index} url={element.web_url} title={element.headline.main} snippet={element.snippet} date={element.pub_date} />
                        );
                    })}
                </div>
            </div>
        );
    }
});

module.exports = Results;