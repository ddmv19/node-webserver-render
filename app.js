import express from 'express'
import hbs from 'hbs'
import * as url from 'node:url'
import 'dotenv/config'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const app = express()
const port = process.env.PORT

//Handlebars
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

//Middleware - Para Servir Contenido Estático (Index.html en la carpeta 'public')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    titulo: 'Home'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    titulo: 'Generic - Road Trip by TEMPLATED'
  })
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    titulo: 'Elements - Road Trip by TEMPLATED'
  })
})


// Para una ruta que no tengamos definida podemos usar el '*'
app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})

// Para evitar que salga el generic.html en el URL podemos hacerlo también de esta manera


