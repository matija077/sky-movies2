const path = require('path');
const PORT = 3333;

const returnCodes = {
    'error': 500,
    'ok': 200,
    'notFound': 404
};

Object.assign(module.exports, {
    PORT,
    returnCodes
})