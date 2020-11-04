CREATE DATABASE fifo;
USE `fifo` ;


CREATE TABLE usuario (
  id_usuario INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nome VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  senha VARCHAR(200) NOT NULL
  );

CREATE TABLE jogo (
  id_jogo INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nome_jogo VARCHAR(200) NOT NULL,
  descricao MEDIUMTEXT,
  tempo_medio INT(200) NOT NULL,
  tempo_definido INT(200) NOT NULL
  );

CREATE TABLE fila (
  id_fila INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_jogador1 INT NOT NULL,
  id_jogador2 INT NOT NULL,
  id_jogo INT NOT NULL,
  inicio DATETIME NULL,
  finalizar TINYINT NULL,
  FOREIGN KEY (`id_jogador1`) REFERENCES usuario(`id_usuario`),
  FOREIGN KEY (`id_jogador2`) REFERENCES usuario(`id_usuario`),
  FOREIGN KEY (`id_jogo`) REFERENCES jogo(`id_jogo`)
  );


