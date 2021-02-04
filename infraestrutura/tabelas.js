class Tabelas {
    init(conexao){
       console.log('Tabelas foram chamadas')
       this.conexao = conexao
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE Atendimentos'
        this.conexao.query()
    }

}

module.exports = new Tabelas