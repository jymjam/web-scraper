const axios = require("axios");
const cheerio = require("cheerio");
const fs = require('fs')

const URL = "https://old.reddit.com/r/Jokes/";


// function scrape(){
//   return axios.get(URL).then()
// }

async function scrapingJokes(){
  const { data } = await axios.get(URL);
  const $ = cheerio.load(data);
  const hrefArray = [] //stores jokes url

  
  // getting all posts urls
  $("#siteTable .thing a.title").slice(2).each((index, element) => {
      const $body = $(element)
      href_url = `https://old.reddit.com/r/Jokes/${$body.attr('href').slice(9)}`
      hrefArray.push(href_url)
    })
    // getting each joke 
    for (urls of hrefArray.slice(-3)){
      getJokes(urls).then(data => { 
        return data
      }).catch((error) => {
        console.error(error);
      })
    }
}

// promise 
async function getJokes(urls){
  jokeJson = {}
  let { data } = await axios.get(urls)
  let $ = cheerio.load(data)

  jokeJson.title = $('a.title').text()
  jokeJson.body = $('div.expando p').text()
  return jokeJson
}

scrapingJokes()
// module.exports = scrapingJokes