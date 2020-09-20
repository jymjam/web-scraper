const {Router} = require('express')

// const jokesJson = require('./jokes.json') 
const scraper = require('./scraper')

const router = Router()

router.get('/', (req, res) => {
    res.json(scraper)
})

router.post('/', (req, res) => {
    res.send("you don't have the fucking permission to POST")
})

module.exports = router