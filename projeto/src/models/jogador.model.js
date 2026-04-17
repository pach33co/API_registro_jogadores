import { NacionalideJogador } from "../enum/nacionalidade.js";
import { PosicaoJogador } from "../enum/posicao.js";
import { connection } from "../config/database.js";

export class JogadorModel {
    constructor(id = 0, nome = "", clube = "", posicao = PosicaoJogador.ATACANTE, idade = 0, nacionalidade = NacionalideJogador.BRASILEIRO, altura = 0, peso = 0 ) {
        this.id = id;
        this.nome = nome;
        this.clube = clube;
        this.posicao = posicao;
        this.idade = idade;
        this.nacionalidade = nacionalidade;
        this.altura = altura;
        this.peso = peso;
    }

    // Método HTTP GET

    static async listar() {
        const [rows] = await connection.execute(
            `SELECT * FROM jogadores`
        );
        return rows;
    }

    static async listarId(id) {
        const [rows] = await connection.execute(
            'SELECT * FROM jogadores WHERE id = ?',
            [id]
        );
        return rows[0];
    }

    static async listarClube(clube) {
        const [rows] = await connection.execute(
            `SELECT * FROM jogadores WHERE clube = ?`,
            [clube]
        );
        return rows;
    }

    static async listarPosicao(posicao) {
        const [rows] = await connection.execute(
            `SELECT * FROM jogadores WHERE posicao = ?`,
            [posicao]
        );
        return rows;
    }

    static async listarNacionalidade(nacionalidade) {
        const [rows] = await connection.execute(
            `SELECT * FROM jogadores WHERE nacionalidade = ?`,
            [nacionalidade]
        );
        return rows;
    }

    // Método HTTP POST

    static async criar(jogador) {
        const [result] = await connection.execute(
            `INSERT INTO jogadores
            (nome, clube, posicao, idade, nacionalidade, altura, peso)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                jogador.nome,
                jogador.clube,
                jogador.posicao,
                jogador.idade,
                jogador.nacionalidade,
                jogador.altura,
                jogador.peso,
            ]
        );
        return result.insertId;
    }

    // Método HTTP PUT

    static async atualizar(id, jogador) {
        const [result] = await connection.execute(
            `UPDATE jogadores SET
            nome = ?,
            clube = ?,
            posicao = ?,
            idade = ?,
            nacionalidade = ?,
            altura = ?,
            peso = ?
            WHERE id = ?`,
            [
                jogador.nome,
                jogador.clube,
                jogador.posicao,
                jogador.idade,
                jogador.nacionalidade,
                jogador.altura,
                jogador.peso,
                id
            ]
        );
        return result.affectedRows
    }

    // Método HTTP DELETE

    static async remover(id) {
        const [result] = await connection.execute(
            `DELETE FROM jogadores WHERE id = ?`,
            [id]
        );
        return result.affectedRows;
    }

};