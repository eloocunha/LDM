const express = require('express')
const app = express()
 
app.listen(8081, function(){
    console.log('Servidor Ativo!')
})
 
app.get('', function(req, res){
    res.send('Cadastro: ' +  req.params.nome + req.params.sobrenome + req.params.idade )
})