const express = require("express");
const app = express();

let requestCount = 0;
function requestCountNumber(req, res, next){
    requestCount = requestCount + 1;
    console.log(requestCount);
    next();
}

app.use(requestCountNumber);

app.get("/Count", function(req, res){
    res.json({
        message: "Number of requestCount"
    });
});
app.listen(5500);