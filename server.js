'use strict';

const Http = require('http');
const Express = require('express');
const BodyParser = require('body-parser');
const Swaggerize = require('swaggerize-express');
const Path = require('path');
const App = Express();

const Server = Http.createServer(App);

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({
    extended: true
}));

const swaggerConfig = {
    api: Path.resolve('./src/interface/swagger.yaml'),
    handlers: Path.resolve('./src/handlers')
};

App.use(Swaggerize(swaggerConfig));

const apiHost = 'localhost'; // Replace with your actual API host
const apiPort = 8000; // Replace with your desired port

// Remove the following line since we are not modifying Swagger object
// App.swagger.api.host = apiHost + ':' + apiPort;

Server.listen(apiPort, function () {
    /* eslint-disable no-console */
    console.log('App running on %s:%d', apiHost, apiPort);
    /* eslint-disable no-console */
});
