/** Dependencies */
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

/** Models */
const ApiKey = require('../db/models/ApiKey');

/** Basic Strategy */
require('../utils/auth/strategies/basic');

const router = express.Router();

router.post('/login', async (req, res, next) => {
    const { apiKeyToken } = req.body; // Api key token generated in the scripts/seedApiKeys.js

    if (!apiKeyToken) {
        next({
            error: 'apiKeyToken is required'
        });
    }

    passport.authenticate('basic', (error, user, message) => {
        try {
            if (error) {
                next({
                    error
                });
            }
            if (message) {
                next({
                    message
                })
            }
            if (!user) {
                next({
                    error: 'User not found'
                });
            }
            req.login(user, { session: false }, async (error) => {
                if (error) {
                    next({
                        error
                    })
                }
                const apiKey = await ApiKey.find({ token: apiKeyToken });

                if (!apiKey) {
                    next({
                        error: 'Apikey not found'
                    })
                }

                const { _id: id, email } = user;

                const payload = {
                    sub: id,
                    email,
                    scopes: apiKey.scopes
                }

                const token = jwt.sign(payload, process.env.AUTH_JWT_SECRET, {
                    expiresIn: '15m'
                });

                return res.status(200).json({
                    token,
                    user: {
                        id,
                        name,
                        email
                    }
                });
            });
        } catch (error) {
            next({
                error
            })
        }
    })(req, res, next);
});


module.exports = router;