CREATE DATABASE IF NOT EXISTS jogadores_registro
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

  USE jogadores_registro;

  CREATE TABLE jogadores (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    clube VARCHAR(120) NOT NULL,
    posicao ENUM(
        'Goleiro',
        'Lateral',
        'Zagueiro',
        'Meio-Campo',
        'Atacante'
    ) NOT NULL,
    idade INT NOT NULL,
    nacionalidade ENUM(
        'Brasileiro',
        'Argentino',
        'Venezuelano',
        'Colombiano',
        'Uruguaio',
        'Europeu') NOT NULL,
    altura DECIMAL(3,2) NOT NULL,
    peso DECIMAL (4,2) NOT NULL
  );