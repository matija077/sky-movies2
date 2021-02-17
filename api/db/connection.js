const { development } = require('../knexfile');

function createConnection() {
    const environment = process.env.NODE_ENV || 'development';
    const config = require('../knexfile')[environment];
    console.log(config);

    const Knex =  require('knex');
    const knex = new Knex(config)
    console.log(knex);
    //console.log(new Knex(config));
    knex.transaction(trx => {
        return trx('select 1+1 as result');
    })
    knex.raw('select 1+1 as result').then(function () {
        console.log("wroking");
      }).catch((err) => {
          console.log(err);
      });
}

module.exports = createConnection();