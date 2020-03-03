const boom = require('@hapi/boom');

function permissionsValidationHandler(allowedPermissions) {
    return function (req, res, next) {
        if (!allowedPermissions) {
            next(boom.unauthorized());
        }
        if (!req.user || (req.user && !req.user.permissions)) {
            next(boom.unauthorized('Missing permissions'));
        }
        const hasAccess = allowedPermissions.map(allowedPermission => req.user.permissions.includes(allowedPermission)).find(allowed => Boolean(allowed));

        if (hasAccess) {
            next();
        } else {
            next(boom.unauthorized('Insufficient permissions'));
        }
    }
}

module.exports = permissionsValidationHandler;