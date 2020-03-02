/**
 * API_KEYS
 * En este caso lo que estamos haciendo es definir en nuestras variables de ambiente (env) 
 * que sólo permitiremos el acceso a llamadas de la API que estén firmadas con la llave (api_key),
 * El api key es una llave que definimos en el servidor para abrir el acceso a nuestro servicio, así, 
 * si algún servicio en internet no tiene la llave que estás definiendo, no podrá acceder a tu servicio
 */

/** Dependecies */
const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
    token: String,
    scopes: Array
})
const ApiKey = mongoose.model('api-keys', apiKeySchema);

module.exports = ApiKey;