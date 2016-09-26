create database casadocodigo_nodejs;

use casadocodigo_nodejs;

CREATE TABLE livros (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  titulo varchar(255) DEFAULT NULL,
  descricao text,
  preco decimal(10,2) DEFAULT NULL);

insert into livros(titulo, descricao, preco)
values ('Comecando com nodejs', 'livro introdutório sobre nodejs', 39.90);

insert into livros(titulo, descricao, preco)
values ('Comecando com javascript', 'livro introdutório sobre javascript', 39.90);

insert into livros(titulo, descricao, preco)
values ('Comecando com express', 'livro introdutório sobre express', 39.90);

insert into livros(titulo, descricao, preco)
values ('Comecando com angular', 'livro introdutório sobre angularjs', 29.90);

create database casadocodigo_nodejs_test;

use casadocodigo_nodejs_test;

CREATE TABLE livros (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  titulo varchar(255) DEFAULT NULL,
  descricao text,
  preco decimal(10,2) DEFAULT NULL);
