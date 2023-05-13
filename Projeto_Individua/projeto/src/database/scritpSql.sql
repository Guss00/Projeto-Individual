CREATE database livros;
use livros;


CREATE TABLE usuario (
idUsuario INT PRIMARY KEY auto_increment,
nome_completo VARCHAR(45),
email VARCHAR(50),
genero1 VARCHAR(30),
genero2 VARCHAR(30),
genero3 VARCHAR(30)
);

