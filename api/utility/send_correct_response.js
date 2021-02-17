const express = require("express");
const { returnCodes } = require("../config/utils");

function sendCorrectResponse(res, result) {
    console.log(result);
    if (result.notFound) {
        res.status(returnCodes.error).send("Resource Not Found");
        return;
    }

    res.json(result.data)
}

module.exports.sendCorrectResponse = sendCorrectResponse;