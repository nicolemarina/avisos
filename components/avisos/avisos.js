//teste insert
const db = require('../../knexfile.js')

 function salvar(aviso){
    //insert
    return db.insert(aviso).into('avisos').then(id=>{
       return { tipo: "sucesso", corpo: "Dados inseridos com sucesso!"}
        //teste = id
    })
    
        .catch(erro => {
            return { tipo: "erro", corpo: "Erro: "+erro}
           // teste = erro
        })
} //fim salvar

module.exports = {salvar}

