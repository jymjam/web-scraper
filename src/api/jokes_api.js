const { Router } = require('express')
const scraper = require('./scraper')

let resObj = {}
scraper().then(data => resObj = data);

const router = Router()

router.get('/', (req, res) => {
    res.json(resObj)
})

router.post('/', (req, res) => {
    res.send("you don't have the fucking permission to POST")
})

module.exports = router