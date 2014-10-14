var restify  = require('restify');
var Messages = require('../../models/Messages');

// exports controller
module.exports = function(req, res, next) {

    // find all messages
    Messages.find({}, function(err, messages) {
        if(err) {
            // logging errors
            console.error('InternalError :', err);
            // returning generic InternalError to clients on errors
            return next(new restify.InternalError());
        }

        // send all messages
        res.send(messages);
    });
}
