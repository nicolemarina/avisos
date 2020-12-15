const router = require('express').Router()

const Avisos = require("./avisos")

router.get("/", (req,res)=>{
    res.send("Pagina Inicial")
})

router.get("/avisos", (req,res)=>{
    res.send("Pagina de Avisos Cadastrados")
})

router.get("/avisos/novo", (req,res)=>{
     res.render('formulario_avisos')

}) //fim da rota
router.post("/avisos/novo", async (req, res)=>{
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem

   
   const msg = await Avisos.salvar({titulo,data,mensagem})
   res.render('formulario_avisos', {msg})
})


module.exports = router