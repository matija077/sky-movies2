const db = require("../db/connection");

async function getMovies() {
    try {
        const result = await db
            .from("movies")
            .select("*");

        return {
            data:result,
            notFound: undefined
        };
    } catch(err) {
        throw err;
    }
}

async function getMovie(id) {
    let returnValue = {
        data: null,
        notFound: undefined
    }

    try {
        const result = await db
            .from("movies")
            .select("*")
            .where({id: +id});

        if (!result || result.length === 0) {
            returnValue.notFound = true;
        }

        return returnValue;
    } catch(err) {
        throw err;
    }
}

async function createMovie(movie) {
    let returnValue = {
        data: null,
        notFound: undefined
    }

    try {
        await db("movies")
            .insert(movie)

        const result = await getMovie(movie.id);

        if (!result || result.length === 0) {
            returnValue.notFound = true;
        }

        return returnValue;
    } catch(err) {
        throw err;
    }
}

async function updateMovie(movie) {
    let returnValue = {
        data: null,
        notFound: undefined
    }

    try {
        const dbMovie = await getMovie(movie.id);

        const result = await db("movies")
            .where({id: +dbMovie.id})
            .update(movie)

        //const result = await getMovie(movie.id);

        if (!result || result.length === 0) {
            returnValue.notFound = true;
        }

        return returnValue;
    } catch(err) {
        throw err;
    }
}

async function deleteMovie(id) {
    let returnValue = {
        data: null,
        notFound: undefined
    }

    try {
        const result = await db("movies")
            .where({id: +id})
            .del()

        //const result = await getMovie(movie.id);

        if (!result || result.length === 0) {
            returnValue.notFound = true;
        }

        return returnValue;
    } catch(err) {
        throw err;
    }
}

Object.assign(module.exports, {
    createMovie,
    deleteMovie,
    getMovie,
    getMovies,
    updateMovie
})