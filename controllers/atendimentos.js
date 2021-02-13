const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {     //dps dos : é o parametro (id eh o nome do parametro QUE IREMOS COLOCAR DPS)

        console.log(req.params)
        res.send('OK')
    })  
        
    
        app.post('/atendimentos', (req, res) => {
        //console.log(req.body) //req.body = onde está recebendo os dados que estamos enviando (conteudo do body é o atendimento)
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    })
}