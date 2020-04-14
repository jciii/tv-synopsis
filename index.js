const express = require('express')
const app = express()
const showData = require('./showdata')

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { showData })
})

app.get('/seasons/:id', (request, response) => {
  const seasonNum = showData.seasons.find((season) => season.number === parseInt(request.params.id))

  return response.render('seasons', { seasonNum, showData })
})


app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(7142, () => {
})

