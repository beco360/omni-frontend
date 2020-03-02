// RUN: node -r dotenv/config .\src\utils\scripts\mongo\seedApiKeys.js

const crypto = require('crypto');
const ApiKey = require('../../../db/models/ApiKey');
const initDatabase = require('../../../db');

const adminScopes = [
    // Auth
    'login:auth',
    'signup:auth',
    // Users
    'read:users',
    'create:users',
    'update:users',
    'inactivate:users',
];

const supervisorScopes = [
    // Auth
    'login:auth',
    'signup:auth',
    // Users
    'read:users',
    'create:users',
    'update:users',
    'inactivate:users'
];

const agentScopes = [
    // Auth
    'login:auth',
    'signup:auth',
    // Chat
    'start:chat',
    'close:chat',
    'transfer: chat',
    'accept:chat',
];

const customerScopes = [
    // Auth
    'login:auth',
    'signup:auth',
    // Chat
    'start:chat',
    'close:chat',


    'read:user-movies',
    'create:user-movies',
    'delete:user-movies'
];

const apiKeys = [
    {
        token: generateRandomToken(),
        scopes: adminScopes
    },
    {
        token: generateRandomToken(),
        scopes: supervisorScopes
    },
    {
        token: generateRandomToken(),
        scopes: agentScopes
    },
    {
        token: generateRandomToken(),
        scopes: customerScopes
    }
];

function generateRandomToken() {
    const buffer = crypto.randomBytes(32);
    return buffer.toString('hex');
}

(
    async function () {
        await initDatabase();
        try {
            const promises = apiKeys.map(async apiKey => {
                const apiKeyAux = new ApiKey();
                apiKeyAux.token = apiKey.token;
                apiKeyAux.scopes = apiKey.scopes;
                await apiKeyAux.save();
            });

            await Promise.all(promises);
            console.log(`${promises.length} api keys have been created succesfully`);
            return process.exit(0);
        } catch (error) {
            console.log(error);
            process.exit(1);
        }
    }
)();