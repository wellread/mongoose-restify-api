// loading mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Message schema
var messageSchema = new Schema({
    content:    { type: String, require: true}
});

// Create Message model
var Message = mongoose.model('Message', messageSchema);

// exports Message model
module.exports = Message;
