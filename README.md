# nyt-search-app
This app is a React-based rendition of the New York Times Article Search application. It uses use Node, Express and MongoDB so that users can save articles to read later.

## Technologies used
- Node.js
- Express
- axios
- request
- mongodb
- mongoose
- mongolab
- React
- React-Router
- Babel
- Webpack

## Getting Started
Visit the Heroku app:

* **NYT Search** - [NYT Search](https://frozen-brook-69554.herokuapp.com/)

## Understand
Saved articles are stored on the Mongo database. Each article has a
- title (Title of the stored article from nytimes.com)
- date (publish date and time of the article)
- url (URL of the article on nytimes.com)

This is a SPA (Single Page Application) that uses react-router to navigate, hide and show the React components without changing the route within Express. React-router uses hash history.

The higher level React components are the following:  
* **Main** - contains the main-container div that holds the main layout and navigation. This component also holds sub-components Search and Saved
* **Search** - queries the NYT API for articles. Displays API search results from **Form** component and **Results** component. Gives the user the ability to save an article to Saved Articles
* **Saved** - displays the Saved Articles that were searched and stored in the database

## Screenshots
![Screenshot of search page](/public/img/search.png)
![Screenshot of saved page](/public/img/saved.png)

## Default test (included in package.json file)

The default test to run the local server and webpack is
```
npm run dev
```

## Built With

* Webpack

## Authors

* **Aisha Ahmad** - [Aisha Ahmad](https://github.com/aishaprograms)
