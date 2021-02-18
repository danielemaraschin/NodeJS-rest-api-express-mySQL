CREATE table Servicos (NOME varchar(20), PRECO float);

SELECT * FROM Servicos;

INSERT INTO Servicos(nome, preco) VALUES('banho porte médio', '22.50');

update servicos SET preco = 25 where preco = '22.50';

