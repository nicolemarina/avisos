const express = require('express') 
const bodyParser = require('body-parser')

const app = express() //iniciar express

app.set('view engine', 'ejs') //configura engine
app.use(express.static('public')) //configura pasta pública

app.use(bodyParser.urlencoded({extended:false})) // configura bodyParses
app.use(bodyParser.json())

//rotas
app.get("/", (req,res)=>{
    res.send("teste")
})

//configuração da porta
app.listen(3000)