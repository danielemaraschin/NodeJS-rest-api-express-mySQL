module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send ("rota de atendimentos realizando um get"))

    app.post('/atendimentos', (req, res) =>{

        console.log(req.body) //req.body = onde está recebendo os dados que estamos enviando

        res.send ("rota de atendimentos realizando um post")
    })
}