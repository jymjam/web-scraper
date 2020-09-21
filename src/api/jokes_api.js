const { Router } = require('express')

// const jokesJson = require('./jokes.json') 
let resObj = {}
const scraper = require('./scraper')
scraper().then(data => resObj = data);

const router = Router()

router.get('/', (req, res) => {
    res.json(resObj)
})

router.post('/', (req, res) => {
    res.send("you don't have the fucking permission to POST")
})

module.exports = router