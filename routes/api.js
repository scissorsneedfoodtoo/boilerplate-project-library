/*
*
*
*       FILL IN EACH ROUTE BELOW COMPLETELY
*       
*       
*/

'use strict';

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const CONNECTION_STRING = process.env.DB_URI;

module.exports = function (app) {

  app.route('/api/books')
    .get((req, res) => {
      // The response will be an array of book objects
      // JSON response format: [{"_id": bookId, "title": bookTitle, "commentCount": numOfComments },...]
    })

    .post(function (req, res) {
      // The response will contain a new book object with at least the _id and title
    })

    .delete((req, res) => {
      // If successful the response will be 'Complete deletion successful'
    });
    
  app.route('/api/books/:id')
    .get((req, res) => {
      const bookId = req.params.id;
      // JSON response format: {"_id": bookId, "title": bookTitle, "comments": [comment,comment,...]}
    })

    .post((req, res) => {
      const bookId = req.params.id;
      // JSON response format same as .get
    })

    .delete((req, res) => {
      const bookId = req.params.id;
      // If successful the response will be 'Deletion successful'
    });
  
};
