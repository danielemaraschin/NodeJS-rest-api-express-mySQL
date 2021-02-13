const moment = require('moment')

const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')


        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        //console.log('atendimento.cliente', atendimento.cliente);
        const clienteEhValido = atendimento.cliente.length >=5

        //criar um array com objetos das validações

        //console.log('atendimento.cliente.length', atendimento.cliente.length);

        const validacoes = [

            {
                nome: 'data',                                               //nome do campo
                valido: dataEhValida,                                        //se for válido
                mensagem: 'Data deve ser maior ou igual à data atual.'      //se não for válido
            },

            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres.'
            }
        ]

        // na validacoes vamos filtrar e pegar só oq tiver errado
        const erros = validacoes.filter(campo => !campo.valido)
        
        const existemErros = erros.length

        if (existemErros) {           // faz a validacao primeiro, pq se tiver erros já avisa antes pro usuario sem precisar chamar o db
            res.status(400).json(existemErros)
        } else {      // se não existem erros faz a query e a conexão com o banco de dados

            const atendimentoDatado = { ...atendimento, dataCriacao, data }

            const sql = 'INSERT INTO Atendimentos SET ?'

            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erros)
                } else {
                    res.status(201).json(resultados)
                }
            })
        }
    }
}


module.exports = new Atendimento
