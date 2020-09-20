require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const jokes_api = require('./src/api/jokes_api') 

/* SERVER ATTRIBUTES */
const app = express()
PORT = process.env.PORT || 3000

/* MIDDLEWARES */
app.use(morgan('common'))
app.use(helmet()) // mods header for security
app.use(cors({
    origin: 'http://localhost:4200' // allowed frontend
}))
app.use(bodyParser.json()) // to parse POST body response

/* SERVER ROUTES */
app.get('/', (req, res) => {
    res.json({
        server_says: "WELCOME JOKE ZONE"
    })
})
app.use('/jokes', jokes_api)


/* SERVER CONFIG */
app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
    console.log(`server started on http://localhost:${PORT}/jokes`);
})