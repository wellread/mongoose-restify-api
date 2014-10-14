/*jslint node: true */
/*jshint strict:false */
/* jshint -W097 */

'use strict';
// *******************
// ** app/server.js **
var restify =  require('restify');
var mongoose = require('mongoose');

// **************************
// **  Bootstrapping ********

// connect to mongodb database rest-api on localhost
mongoose.connect('mongodb://localhost/rest-api');

// create restify serer named 'rest-api'
var server = restify.createServer({
    name: 'rest-api',
});

// Use body parser middleware to parse json post body
server.use(restify.bodyParser());

// ******************
// ** Routing *******

// Restful url should be seperated in logical resources (noun) accessed
// via HTTP methods

// HTTP Methods

/* GET /messages
 * List all messages */
server.get('/messages',     require('./routes/messages/list'));

/* GET /messages/:id
 * Get message details by id */
server.get('/messages/:id', require('./routes/messages/details'));

/* PUT /messages/:id
 * Update messages by id */
server.put('/messages/:id', require('./routes/messages/update'));

/* DEL /messages/:id
 * Delete messages by id */
server.del('/messages/:id', require('./routes/messages/delete'));

/* POST /messages
 * Create new messages */
server.post('/messages',    require('./routes/messages/create'));

// ******************
// ** Starting ******

// start listening on port 1337
server.listen(1337);
