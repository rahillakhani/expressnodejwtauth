var express = require("express");
var app = express();

const port = process.env.PORT || 8080;

app.use("/public", express.static("public"));


app.post("/authorise", (req,res) => {
    // res.set({
    //     "X-Content-Type-Options": "nosniff",
    //     "X-Frame-Options": "deny",
    //     "X-XSS-Protection": "1; mode=block",
    //     "Content-Security-Policy":"default-src 'self' *.spenmo.com data: ; script-src 'self'; object-src 'self'; img-src 'self' spenmo-prod.s3-ap-southeast-1.amazonaws.com spenmo.s3-ap-southeast-1.amazonaws.com local.spenmo.com data: blob:; ",
    //     "Strict-Transport-Security":"max-age=31536000"
    // });
    res.send ({somedata: "data"});
});
app.get("/authorise", (req,res) => {
    // res.set({
    //     "X-Content-Type-Options": "nosniff",
    //     "X-Frame-Options": "deny",
    //     "X-XSS-Protection": "1; mode=block",
    //     "Content-Security-Policy":"default-src 'self' *.spenmo.com data: ; script-src 'self'; object-src 'self'; img-src 'self' spenmo-prod.s3-ap-southeast-1.amazonaws.com spenmo.s3-ap-southeast-1.amazonaws.com local.spenmo.com data: blob:; ",
    //     "Strict-Transport-Security":"max-age=31536000"
    // });
    res.sendFile( "/login.html", { root : publicPath});
});

app.get("/*", (req,res) => {
    res.set({
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "deny",
        "X-XSS-Protection": "1; mode=block",
        "Content-Security-Policy":"default-src 'self' *.spenmo.com data: ; script-src 'self'; object-src 'self'; img-src 'self' spenmo-prod.s3-ap-southeast-1.amazonaws.com spenmo.s3-ap-southeast-1.amazonaws.com local.spenmo.com data: blob:; ",
        "Strict-Transport-Security":"max-age=31536000"
    });
    res.sendFile( "/index.html", { root : publicPath});
});

app.listen(port, () => {
    console.log("running at ", port);
});

