const express = require('express');
const { configServerMiddlewares } = require('./config/serverConfig');
const PORT = require('./config/utils');
const config  = require('./knexfile');
//const movies = require("./routes/movies.route");

//import { knexConfig } from './app/db/knexfile';

// and set ports
const port = process.env.port || PORT;
//console.log(process.env.CLIENT);
// initialize necessary apps
const knex = require('./db/connection');

//console.log(knex);
//knex.migrate.make("movies");
//const result = knex.migrate.latest();
//knex({user: 'table'})
//knex.seed.make("movies_seed");
try {
  knex.seed.run();
} catch(err) {

}
/*result.then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
})



console.log(result);*/

const app = express();

// middlewares for all routes
configServerMiddlewares(app);

//console.log(movies);
//console.log(knex);

//app.set("db", knex);

app.use("/api/v1", require("./routes/movies.route"));

//console.log(app._router.stack);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);