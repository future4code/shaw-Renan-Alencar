## Exercicio 1
A. Acredito que seja uma boa ideia usar strings, pois com o uso mesclado de letrar e números são bem maiores as combinações que podem existir sem serem repetidas.

## Exercicio 2
A. Ele atribui User a variavel userTableName, depois faz a conexão com o banco de dados e depois chama a variável para a criação do usuário passando como parâmetros id, email e password.

B. 
CREATE TABLE User (
	  id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);