// Include react
var React = require('react');
// include react router
var router = require('react-router');
// include Route component
var Route = router.Route;
// include router component
var Router = router.Router;
// include hash history
var hashHistory = router.hashHistory;
// include index-route as default route
var IndexRoute = router.IndexRoute;

//high level components
var Main = require('../components/Main');
var Search = require('../components/children/Search');
var Saved = require('../components/children/Saved');
var Query = require('../components/children/grandchildren/Query');
var Results = require('../components/children/grandchildren/Results');

module.exports= (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='search' component={Search}>
                <Route path='query' component={Query} />
                <Route path='results' component={Results} />
            </Route>
            <Route path='saved' component={Saved}>
            </Route>
            <IndexRoute component={Saved} />
        </Route>
    </Router>
);