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
                <main>
                    {this.props.children}
                </main>
                <hr />
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h4>About NYT Search</h4>
                                <p>This app is a React-based rendition of the New York Times Article Search application. It uses use Node, Express and MongoDB so that users can save articles to read later.</p>
                                <p>Learn more at the Github repo <a href="https://github.com/aishaprograms/nyt-search-app" target="_blank">nyt-search-app</a></p>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h4>Contact Me</h4>
                                <ul>
                                <li><a href="https://github.com/aishaprograms" target="blank">Github</a></li>
                                <li><a href="https://twitter.com/aishaprograms" target="_blank">Twitter</a></li>
                                <li><a href="https://www.linkedin.com/in/aisha-ahmad/" target="_blank">LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>  
        );
    }
});

module.exports = Main;