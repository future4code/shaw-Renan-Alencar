Exercício - 1
CREATE TABLE Actor (
	  id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

A. 
  VARCHAR(X) - strings de no máximo X caracteres
  DATE - representa uma data (YYYY-MM-DD)
  NOT NULL - O campo precisa ser preenchido
  PRIMARY KEY- chave primaria, não pode se repetir

B.
  SHOW DATABASES - mostra meus bancos de dados
  SHOW TABLES - mostra o nome das tabelas do banco

C.
  DESCRIBE Actor - ele mostra a descrição da tabela, como campos, tipo, se pode ser null e chave primaria

Exercício - 2

A.
  INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES("002", "Glória Pires", 1200, "1963-08-25", "women"
  );

B.
 Entrada duplicada '002' para a chave 'PRIMARY' - Já existe uma chave primaria de numero 002

C.
 A contagem de colunas não corresponde a contagem de valores na linha
 Correção:
 INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19", "female"
  );

D. 
  Está faltando o campo 'nome'
  Correção:
  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES("004", "Renan", 400000, "1949-04-18", "male"
  );

E. 
  O campo data tem que ser informado dentro de " aspas"
  Correção:
  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES("005","Juliana Paes", 719333.33, "1979-03-26", "female"
  );

F.
  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES("006","Fernanda Montenegro",300000,"1929-10-19","female"),
	      ("007","Antônio Fagundes", 400000,"1949-04-18","male");

Exercício 3.
A.
  SELECT * from Actor WHERE gender = "female";

B.
  SELECT salary from Actor WHERE name = "Tony Ramos";

C.
  SELECT * from Actor WHERE gender = "invalid";

D.
  SELECT id, name, salary from Actor WHERE salary <= 500000;

E.
  A coluna nome não está listada na reclaração
  Correção:
  SELECT id, name from Actor WHERE id = "002";

Exercício 4.
A.
  Para fazer a primeira parte, vamos usar o comparador LIKE, que permite comparar strings. Para verificar se uma palavra começa com a letra "A", usamos a sintaxe: LIKE "A%" porque % indica uma string genérica. O operador "ou" é indicado por OR. Assim, a primeira condição é indicada por: WHERE name LIKE "A%" OR name LIKE "J%". 

B.
  SELECT * FROM Actor
  WHERE (name NOT LIKE "A%" ) AND salary > 350000;

C.
  SELECT * FROM Actor
  WHERE name LIKE "%G%";

D.
  SELECT * FROM Actor
  WHERE (name LIKE "%A%" OR name like "%G%") AND salary BETWEEN 350000 AND 900000;

Exercício 5.
A.
  CREATE TABLE Filmes (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);

INSERT INTO Filmes (id, name, sinopse, data_lancamento, avaliacao)
  VALUES("001", 
  "Animais Fantásticos: Os Segredos de Dumbledore", 
  "O professor Alvo Dumbledore (Jude Law) sabe que o poderoso mago das trevas Gellert Grindelwald (Mads Mikkelsen) está se movimentando para assumir o controle do mundo mágico. Incapaz de detê-lo sozinho, ele pede ao magizoologista Newt Scamander (Eddie Redmayne) para liderar uma intrépida equipe de bruxos, bruxas e um corajoso padeiro trouxa em uma missão perigosa, em que eles encontram velhos e novos animais fantásticos e entram em conflito com a crescente legião de seguidores de Grindelwald. Mas com tantas ameaças, quanto tempo poderá Dumbledore permanecer à margem do embate?", 
  "2022-04-14", 7),
  ("002",
  "O Regresso",
  "Após ser atacado por um urso, o caçador Hugh Glass é abandonado na floresta por seu companheiro John Fitzgerald. Apesar de muito ferido, Glass consegue sobreviver e vai em busca de vingança.",
  "2016-05-04", 9
  ),
  ("003",
  "Uma Mente Brilhante",
  "John Forbes Nash Jr. é reconhecido como gênio da matemática aos 21 anos. Cedo, casa-se com uma bela mulher, mas logo começa a dar sinais de esquizofrenia. Após anos de luta contra a doença, ele acaba ganhando o prêmio Nobel.",
  "2002-02-15", 9
  ),
  ("004",
  "Os Vingadores – The Avengers",
  "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.",
  "2012-04-27", 7
  );


Exercício 6.
A. 
  SELECT id, name, avaliacao from Filmes WHERE id = "002";

B.
  SELECT * from Filmes WHERE name = "Uma Mente Brilhante";

C.
  SELECT id, name, sinopse from Filmes WHERE avaliacao > 7;

Exercício 7.
A.
  SELECT * from Filmes WHERE name LIKE "%vida%";

B.
  SELECT * from Filmes 
  WHERE name LIKE "%vida%" OR sinopse LIKE "%ganha%";

C.
  SELECT * from Filmes WHERE data_lancamento < "2022-06-06";

D.
  SELECT * from Filmes 
  WHERE (data_lancamento < "2022-06-06") AND 
	      (name LIKE "%vida%" OR sinopse LIKE "%ganha%") AND 
        (avaliacao > 7);