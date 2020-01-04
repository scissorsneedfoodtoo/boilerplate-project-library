/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       If additional tests are added, keep them at the very end
*
*
*/

const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
  this.timeout(5000);

  /*
  * ----[EXAMPLE TEST]----
  * Each test should test the response of the API endpoint, including the status code!
  */
  test('#example Test GET /api/books', function(done) {
    chai.request(server)
     .get('/api/books')
     .end((err, res) => {
       assert.strictEqual(res.status, 200);
       assert.isArray(res.body, 'Response should be an array');
       assert.property(res.body[0], 'commentCount', 'Books in array should contain a commentCount');
       assert.property(res.body[0], 'title', 'Books in the array should contain a title');
       assert.property(res.body[0], '_id', 'Books in the array should contain an _id');
       done();
     });
  });

  suite('Routing tests', function() {
    
    suite('POST /api/books with title => Add a book to the collection and expect an object or message', function() {
      
      test('Add a book with a unique title', function(done) {
        // done();   
      });
      
      test('No title in request body', function(done) {
        // done();
      });

      test('Existing title in request body', function(done) {
        // done();
      });
      
    });
    
    suite('GET /api/books => Array of all book objects', function() {
      
      test('Return an array of all book objects',  function(done) {
        // done();
      });      
      
    });

    suite('POST /api/books/[id] => Add a comment to an existing book and expect an object or message', function() {
      
      test('Add a comment to an existing book', function(done) {
        // done();
      });

      test('No comment in request body', function(done) {
        // done();
      });
      
    });

    suite('GET /api/books/[id] => Expect an object for [id] or a message for an unknown id', function() {

      test('Return a book object for an existing id',  function(done) {
        // done();
      });

      test('Search for an unknown id',  function(done) {
        // done();
      });

    });

    suite('DELETE /api/books/[id] => Success message', function() {

      test('Remove a book from the collection',  function(done) {
        // done();
      });

    });

  });

});
