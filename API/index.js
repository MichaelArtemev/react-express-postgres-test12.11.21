const express = require('express');
const fakeApi = require('./controller/render.controller');
const renderRouter = require('./routes/render.routes');
const cors = require('cors');

const PORT = process.env.PORT || 8080;


const app = express();

app.use(cors());

app.use(express.json());
app.use('/api', renderRouter);

app.get('/trace', ( req, res ) => {
    res.send('health check')
})
// fakeApi.createFakeData();

app.use(express.json());



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})