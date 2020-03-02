const passport = require('passport');
const { BasicStrategy } = require('passport-http');

const User = require('../../../db/models/User');

passport.use(new BasicStrategy(async (email, password, cb) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return cb(null, false, {
                error: 'No user found'
            })
        }

        user.comparePassword(password, (err, isMatch) => {
            delete user.password;

            if (err) {
                return cb(err, false);
            }
            if (!isMatch) {
                return cb(null, false, {
                    error: "The password is not correct."
                })
            }

            if (isMatch) {
                return cb(null, user);
            }
        });
    } catch (error) {
        return cb(error.message);
    }
}));