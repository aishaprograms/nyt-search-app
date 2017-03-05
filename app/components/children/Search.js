// Include React
var React = require("react");

var Search = React.createClass({
    render: function(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Search;