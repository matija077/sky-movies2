const express = require("express");
const router = express.Router();

const { errorLogging } = require("../services/logging.service");
const { returnCodes } = require("../config/utils");

const {
    getMovies,
    createMovie,
    deleteMovie,
    getMovie,
    updateMovie
} = require('../services/movies.service');
const { sendCorrectResponse:  sendResponse } = require( '../utility/send_correct_response');

router
    .get("/movies", async (req, res) => {
        try {
            const result = await getMovies();

            sendResponse(res, result)
        } catch (error) {
            errorLogging("get movies", error);
            res.status(returnCodes.error).send("something went wrong");
        }
    })

    .get("/movies/:id", async (req, res) => {
        const id = req.params.id;

        try {
            const result = await getMovie(id);

            sendResponse(res, result)
        } catch (error) {
            errorLogging("get movies", error);
            res.status(returnCodes.error).send("something went wrong");
        }
    })

    .post("movies", async (req, res) => {
        const movie = req.body.movie;

        try {
            const result = await createMovie(movie);

            //sendResponse(res, result)

        } catch (error) {
            errorLogging("get movies", error);
            res.status(returnCodes.error).send("something went wrong");
        }
    })

    .put("movies/:id", async (req, res) => {
        const movie = req.body.movie;

        try {
            const result = await updateMovie(movie);

            //sendResponse(res, result)

        } catch (error) {
            errorLogging("get movies", error);
            res.status(returnCodes.error).send("something went wrong");
        }
    })

    .delete("movies", async (req, res) => {
        const id = req.params.id;

        try {
            const result = await deleteMovie(id);

           // sendResponse(res, result)

        } catch (error) {
            errorLogging("get movies", error);
            res.status(returnCodes.error).send("something went wrong");
        }
    })

module.exports = router;