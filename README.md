# API Registo de Jogadores 

## Sobre o projeto:
Uma API desenvolvida para registrar jogadores com as seguintes informações
- id
- nome
- clube
- posição
- idade
- nacionalidade
- altura
- peso

## Tecnologias utilizadas:
Nesse projeto utilizei como linguagem o javascript, rodando em node.js, usando o express como framework e o MySQL como banco de dados

## Pré-requisitos:
Para rodar o projeto, precisa ser instalado o express, o dotenv, o MySQL workbench e o node.js

## Configurações:
Para configurar o .env o usuário precisa ter as seguintes informações
- PORT: A porta onde o projeto irá rodar
- DB_HOST: O localhost
- DB_PORT: A porta do banco de dados
- DB_NAME: O nome do banco de dados
- DB_USER: O user
- DB_PASSWORD: E a senha do banco de dados

## Como rodar:
Para instalar e rodar o projeto é preciso ter o banco de dados instalado, junto com o framework. Em seguinta rodar o comando nodemon app.js, para iniciar o servidor, e utlizar o Insomnia para realizar os testes.

## Rotas disponíveis:
- Post -> http://localhost:3000/jogadores
- Get -> http://localhost:3000/jogadores
- Get/ID -> http://localhost:3000/jogadores/2
- Get/Clube -> http://localhost:3000/jogadores?clube=Fluminense
- Get/Posicao -> http://localhost:3000/jogadores?posicao=Meio-Campo
- Get/Nacionalidade -> http://localhost:3000/jogadores?nacionalidade=Argentino
- Put -> http://localhost:3000/jogadores/1
- Delete -> http://localhost:3000/jogadores/2

## Estrutura do Projeto:
- Config: Onde está o arquivo database.js, com as informações do banco de dados
- Controllers: O está o arquivo controller, que é responsável pela requisição e resposta dos comandos http
- Enum: Uma pasta independete para os arquivos Enum, nesse caso, nacionalidade e posição
- Models: Onde o arquivo model está localizado, que é responsável por ser como uma ponte entre o controlador (Controller) e o banco de dados
- Routes: O está localizado o aquivo route, que é responsável por criar as rotas
- Service: Nesse arquivo, está a regra do que pode e o que não pode ser feito na API
- database.js: É o arquivo da estrutura do MySQL
- .env: O arquivo que contém o acesso ao banco de dados
- app.js: O arquivo principal que recebe todos as informações