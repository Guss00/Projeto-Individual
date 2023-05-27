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

CREATE TABLE biblioteca(
idLivro INT PRIMARY KEY auto_increment,
nome VARCHAR(45),
genero VARCHAR(50),
fkUsuario INT,
CONSTRAINT fkUsuario FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE comunidade (
idPostagem INT PRIMARY KEY,
titulo VARCHAR(45),
tipo VARCHAR(30),
descricao VARCHAR(250),
fkUsuario INT,
CONSTRAINT fkUsuarios FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
);