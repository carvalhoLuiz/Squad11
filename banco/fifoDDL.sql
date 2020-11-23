CREATE DATABASE fifo;
USE `fifo` ;


CREATE TABLE usuario (
  id_usuario INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nome VARCHAR(200) NOT NULL,
  email VARCHAR(200) UNIQUE NOT NULL,
  senha VARCHAR(200) NOT NULL
  );

CREATE TABLE jogo (
  id_jogo INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nome_jogo VARCHAR(200) NOT NULL,
  descricao MEDIUMTEXT,
  tempo_medio INT(200) NOT NULL,
  numero_jogadores INT(200) NOT NULL
  );

CREATE TABLE fila (
  id_fila INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  id_jogador INT NOT NULL,
  id_jogo INT NOT NULL,
  inicio DATETIME ,
  finalizar BOOLEAN DEFAULT '0',
  acrescimo BOOLEAN DEFAULT '0',
  FOREIGN KEY (`id_jogador`) REFERENCES usuario(`id_usuario`),
  FOREIGN KEY (`id_jogo`) REFERENCES jogo(`id_jogo`)
  );


