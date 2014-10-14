var restify = require('restify');
var Messages = require('../../models/Messages');

module.exports = function(req, res, next) {

    if (!req.params.content) {
        return next(new restify.MissingParameterError('Missing :content'));
    }

    var message = new Messages({
        content: req.params.content
    });

    message.save(function(err, message) {
        if (err) {
            // loging errors
            console.error('InternalError :', err);
            // returning generic InternalError to clients
            return next(new restify.InternalError());
        }

        // returning newly created message on success
        res.send(message);
    });
};
