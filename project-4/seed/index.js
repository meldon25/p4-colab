const fs = require('fs')
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()
const queries = ['beef']

async function read(query) {
  if (!queries.length) {
    throw 'Queries cannot be empty. Please enter a valid query.'
  } else {
    fs.readFile('./receipes.json', async (err, data) => {
      if (err) throw err
      let file = data.toJSON()
      if (!file.data.length) {
        writeFiles([])
      }
      for (let i = 0; i < query.length; i++) {
        const resp = await axios.get(`https://api.edamam.com/search?q=${query[i]}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}
     `)
        file.data.push(...resp.data.hits)
      }
      console.log(`Fetched ${file.data.length} entries from the api.`)
      writeFiles(file.data)
    })
  }
}

read(queries)

function writeFiles(data) {
  fs.writeFile('./receipes.json', JSON.stringify(data), err => {
    if (err) throw err
    if (data.length)
      console.log('Finished writing files, check receipes.json for output.')
    else {
      console.log('Created empty container for incoming data.')
    }
  })
}
