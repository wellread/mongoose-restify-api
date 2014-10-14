var restify = require('restify');
var Messages = require('../../models/Messages');

module.exports = function(req, res, next) {

    if (!req.params.content) {
        return next(new restify.MissingParameterError('Missing :content param'))
    }

    Messages.findByIdAndUpdate(req.params.id,
        {
            content: req.params.content,    // update content
            lastUpdatedOn: Date.now()       // change lastUpdate date
        },
        function(err, message) {
            if (err) {
                // logging errors
                console.error('InternalError :', err);
                // returning generic InternalError to clients
                return next(new restify.InternalError());
            }

            // returning ResourceNotFoundError (error 404)
            if (!message) { return next(new restify.ResourceNotFoundError()); }

            // returning updated message on success
            res.send(message);
        }
    );
}
