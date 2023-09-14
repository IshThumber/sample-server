const express = require("express");
const app = express();

const PORT = 2001;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test", (req, res) => {
    res.send("Testing the node server on the instance sfgd");
});

app.get("/check", (req, res) => {
    res.send("Checking the node server tari");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});
