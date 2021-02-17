const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');

function configServerMiddlewares(app) {
    //app.use(helmet());
    app.use(cors());
    //app.use(express.urlencoded({extended: true}));
    app.use(express.json());
}

/**
 * should be run before any environment calls
 */
function config() {
    if (process.env.NODE_ENV !== 'production') {
        const result = dotenv.config({ path: ".env"});

        if (result.error) {
            console.log("error reading env");
        }
    }
}
config();

module.exports.configServerMiddlewares = configServerMiddlewares;