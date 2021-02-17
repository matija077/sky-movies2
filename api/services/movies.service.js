const db = require("../db/connection");

async function getMovies() {
    try {
        const result = await db
            .from("movies")
            .select("*");

        console.log(result);
    } catch(err) {
        console.log(err);
    }

}

async function getMovie(id) {
    /*try {
    } catch(error: any) {
    }*/

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