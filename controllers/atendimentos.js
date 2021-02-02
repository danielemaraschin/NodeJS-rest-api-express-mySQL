module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send ("rota de atendimentos realizando um get"))

    app.post('/atendimentos', (req, res) => res.send ("rota de atendimentos realizando um post"))
}