const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send ("rota de atendimentos realizando um get"))

    app.post('/atendimentos', (req, res) => {
        //console.log(req.body) //req.body = onde está recebendo os dados que estamos enviando (conteudo do body é o atendimento)
        const atendimento = req.body

        Atendimento.adiciona(atendimento)
        res.send ('POST ATENDIMENTO')
    })
}