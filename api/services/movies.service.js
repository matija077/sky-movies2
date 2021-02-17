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
        console.log(err);
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
        console.log(err);
    }
}

async function createMovie(movie) {
    /*try {
    } catch(error: any) {
    }*/

}

async function updateMovie(movie) {
    /*try {
    } catch(error: any) {
    }*/

}

async function deleteMovie(id) {
    /*try {
    } catch(error: any) {
    }*/

}

Object.assign(module.exports, {
    createMovie,
    deleteMovie,
    getMovie,
    getMovies,
    updateMovie
})