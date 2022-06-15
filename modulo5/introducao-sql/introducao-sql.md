### EXERCÍCIO 1
a) VARCHAR é como uma string com o número máximo de caracteres passado entre parênteses,
DATE é para declarar uma data no formato "ano-mês-dia".

b) O SHOW DATABASES mostra o nome do database e o SHOW TABLES mostra as tabelas existentes.

c) Retorna uma tabela contendo os tipos e as restrições de todas as colunas
da tabela.



### EXERCÍCIO 2
a) A query é:
```
INSERT INTO Actor
VALUES ("002", "Glória Pires", 1200000, "1963-08-23", "female");
```

b) Erro 1062. Entrada duplicada '001' para chave primária. A chave primária é
a chave única na tabela, normalmente o ID, e essas chaves não podem se repetir.

c) Erro 1136. O número de colunas é diferente do número de valores. Isso acontece
porque são informadas apenas 3 colunas para colocar um valor, e são passados 5
valores para apenas 3 colunas.

A forma correta deveria ser:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

d) Erro 1364. O campo "name" não apresenta um valor padrão. Isso acontece porque
o campo "name" é obrigatório e como não foi passado um valor para o "name", visto
que ele não apresenta um valor default (declarado ao criar a tabela) ele acaba levando para este erro.

A forma correta deveria ser:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Wagner Moura",
  400000,
  "1949-04-18", 
  "male"
);
```

e) Erro 1292. Valor para data incorreto: '1950' para coluna "birth_date". Isso
acontece porque a data é passado como se fosse uma string, entre aspas.

A forma correta deveria ser:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

### EXERCÍCIO 3
a) A query é:
```
SELECT * FROM Actor WHERE gender = "female";
```

b) A query é:
```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

c) Como não possui nenhuma linha com o gênero "invalid" ele simplesmente
retorna nada.


d) A query é:
```
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```

e) Erro 1054. Coluna desconhecida "nome" na lista de campo. Isso porque não
existe a coluna "nome" apenas a "name".

A query coreta é:
```
SELECT id, name FROM Actor WHERE id = "002"
```