const express = require('express') 
const bodyParser = require('body-parser')

//rotas do aviso
const routerAvisos = require('./components/avisos/avisosController')

const app = express() //iniciar express

app.set('view engine', 'ejs') //configura engine
app.use(express.static('public')) //configura pasta pública

app.locals.moment = require('moment')

app.use(bodyParser.urlencoded({extended:false})) // configura bodyParses
app.use(bodyParser.json())

//rotas
app.use(routerAvisos)

//configuração da porta
app.listen(3000)