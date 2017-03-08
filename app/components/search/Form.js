// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // set search term state
  getInitialState: function() {
    return { term: "", beginYear:"", endYear:"" };
  },
  // This function will respond to the user input
  handleTermChange: function(event) {
    this.setState({ term: event.target.value });
  },
  // This function will respond to the user input
  handleBeginChange: function(event) {
    this.setState({ beginYear: event.target.value });
  },
  // This function will respond to the user input
  handleEndChange: function(event) {
    this.setState({ endYear: event.target.value });
  },
  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    // Set the parent to have the search term, begin, end years
    this.props.searchArticles(this.state.term, this.state.beginYear, this.state.endYear);
    this.setState({ term: "", beginYear:"", endYear:""});
  },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search NYT</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <label htmlFor="term">Search</label>
              <input
                value={this.state.term}
                type="text"
                className="form-control"
                id="term"
                onChange={this.handleTermChange}
                required
              />
              <label htmlFor="beginYear">Start Year (YYYY)</label>
              <input
                value={this.state.beginYear}
                type="number"
                className="form-control"
                id="beginYear"
                onChange={this.handleBeginChange}
                maxLength="4"
                min="1900" 
                max="2017" 
                step="1" 
                required
              />
              <label htmlFor="endYear">End Year (YYYY)</label>
              <input
                value={this.state.endYear}
                type="number"
                className="form-control"
                id="endYear"
                onChange={this.handleEndChange}
                maxLength="4"
                min="1900" 
                max="2017" 
                step="1" 
                required
              />
              <br />
              <button
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
