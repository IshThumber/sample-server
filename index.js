const express = require('express')
const app = express();

const PORT = 2001

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
});