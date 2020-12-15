//teste insert
const db = require('../../knexfile.js')

async function salvar(aviso){
    //insert
    
    let retorno
    await db.insert(aviso).into('avisos').then(id=>{
        retorno = { tipo: "sucesso", corpo: "Dados inseridos com sucesso!"}
        //teste = id
    })
    
        .catch(erro => {
            return { tipo: "erro", corpo: "Erro: "+erro}
           // teste = erro
        })
        return retorno
} //fim salvar

module.exports = {salvar}

