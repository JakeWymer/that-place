const express = require('express');
const app = express();

app.get('/', function (req, res) {
    return res.send({ message: 'Root URL' })
});

app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});