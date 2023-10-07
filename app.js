require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT



// TODO: Require hbs
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')
// Content Static
app.use( express.static('public') )

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Home',
    titulo: 'Home Page',
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Generic',
    titulo: 'Generic Page',
  })
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Elements',
    titulo: 'Elements Page',
  })
})

app.get('/*', (req, res) => {
  res.write('404 Not Found')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${ port }`)
})

