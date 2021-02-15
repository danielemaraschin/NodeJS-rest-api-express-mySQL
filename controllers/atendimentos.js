const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {     //dps dos : é o parametro (id eh o nome do parametro QUE IREMOS COLOCAR DPS)

        const id = parseInt(req.params.id)
        
        Atendimento.buscaPorId(id, res)
        
    })  
        
    
        app.post('/atendimentos', (req, res) => {
        //console.log(req.body) //req.body = onde está recebendo os dados que estamos enviando (conteudo do body é o atendimento)
        const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    })

    app.patch('/atendimentos/:id', (req, res) => {
    
        const id = parseInt(req.params.id) //converte id aqui novamente de string pra numero
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })
}