const express = require('express');
const path = require('path');
const port = process.env.PORT || 5000;

const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.use((req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
    })
}

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});