var express = require('express');
var router = express.Router();
var Article = require("../models/Article.js");


//  * `/api/saved` (get) - the components will use this to query MongoDB for all saved articles
router.get('/api/saved', function (req, res) {
    Article.find({}, function (error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        else {
            res.send(doc);
        }
    });
})

//  * `/api/saved` (post) - the components will use this to save an article to the database
router.post('/api/saved', function (req, res) {
    console.log("BODY: " + req.body);
    Article.create(req.body, function (err, document) {
        // Log any errors
        if (err) {
            console.log(err);
        }
        // Or log the document
        else {
            console.log(document);
        }
    });
})

//  * `/api/saved` (delete) - the components will use this to delete a saved article in the database
router.delete('/api/saved/:id', function (req, res) {
    Article.findByIdAndRemove(req.params.id, function (error, doc) {
            // Log any errors
            if (error) {
                console.log(error);
            }
            else {
            }
        });
})

//  * `*` (get) - will load the single HTML page (with ReactJS) in public/index.html
router.use('*', function (req, res) {
    res.sendFile("index.html");
})

module.exports = router;