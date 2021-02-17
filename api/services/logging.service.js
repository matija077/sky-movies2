function logging(context, data) {
    console.log("current context -> " + context);
    console.log(data);
    console.log("end context");
}

function errorLogging(context, data) {
    logging(context, data);
}

Object.assign(module.exports, {
    logging,
    errorLogging
})