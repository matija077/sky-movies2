module.exports = {
    development: {
        client: process.env.CLIENT,
        connection: {
            host : process.env.HOST,
            user : process.env.USER,
            password : process.env.PASSWORD,
            database : process.env.DATABASE,
        },
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds'
        },
        pool: { min: 0, max: 100,
            afterCreate: (connection, done) => {
                console.log(connection);
                connection.query('*', function(err) {
                    console.log(err);
                })

                done(null, connection);
            }
        },
        acquireConnectionTimeout: 100000
    }
};