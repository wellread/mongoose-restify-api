var restify = require('restify');
var Messages = require('../../models/Messages');

module.exports = function(req, res, next) {

    Messages.findByIdAndRemove(req.params.id, function(err, message) {
        if (err) {
            // loging errors
            console.error('InternalError :', err);
            // returning generic InternalError to clients
            return next(new restify.InternalError());
        }

        // returning ResourceNotFoundError (error 404)
        if (!message) { return next(new restify.ResourceNotFoundError()); }

        // returning deleted message on success
        res.send(message);
    });
}
