const express = require("express");
const { returnCodes } = require("../config/utils");

function sendCorrectResponse(res, result) {
    if (result.notFound) {
        res.status(returnCodes.error).send("Resource Not found");
    }

    res.json(result.data)
}

module.exports.sendCorrectResponse = sendCorrectResponse;