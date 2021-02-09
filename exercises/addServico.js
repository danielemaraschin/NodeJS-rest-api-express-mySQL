/*
Para salvar os dados na nossa base de dados, usamos a query que a biblioteca do mysql nos disponibiliza.

Agora que já cadastramos o atendimento, queremos cadastrar um novo serviço dentro da tabela Servicos no nosso sistema.

Considerando que este serviço deve possuir id (que será incrementado automaticamente), nome e preço, como seria esse código de inserção?




//Como primeiro parâmetro, passamos a nossa query e, como segundo parâmetro, uma função que será executada logo após a nossa query.
//Os valores que serão incluídos devem ser passados como parâmetro do método query, não da função de retorno.
//O nosso Id é incrementado automaticamente, então não precisamos adicioná-lo no nosso INSERT, pois quem fará isso é o próprio SQL!


conexao.query(`INSERT INTO Servicos(nome, preco) VALUES('${nome}', '${preco}')`, (erro, resultados) => {
   ...
      })
    }
   }

   */





