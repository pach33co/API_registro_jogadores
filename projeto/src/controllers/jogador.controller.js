import { JogadorModel } from "../models/jogador.model.js";

export class JogadorController {

    // Controller -> GET

    // Nesse caso não precisa de uma req, porque é um res geral, de todos os jogadores
    static async listar(req, res) {
        try {

            if (req.query.clube) {
                const clube = req.query.clube;
                const data = await JogadorModel.listarClube(clube);
                return res.status(200).json(data)

            } else if (req.query.posicao) {
                const posicao = req.query.posicao;
                const data = await JogadorModel.listarPosicao(posicao);
                return res.status(200).json(data)

            } else if (req.query.nacionalidade) {
                const nacionalidade = req.query.nacionalidade;
                const data = await JogadorModel.listarNacionalidade(nacionalidade);
                return res.status(200).json(data)
            } else {
                const data = await JogadorModel.listar();
                return res.status(200).json(data)
            }
        } catch (erro) {
            return res.status(500).send(erro.message)
        }
    }

    // Nesse caso precisa de uma req específica(params) para o id
    static async listarId(req, res) {
        try {
            const id = req.params.id;
            const data = await JogadorModel.listarId(id);
            return res.status(200).json(data)
        } catch (erro) {
            return res.status(500).send(erro.message)
        }
    }

    // Controller - POST

    static async criar(req, res) {
        try {
            const jogador = req.body;
            const novoJogador = await JogadorModel.criar(jogador);
            return res.status(201).json(novoJogador)
        } catch (erro) {
            return res.status(500).send(erro.message)
        }

    }

    // Controller - PUT

    static async atualizar(req, res) {
        try {
            const jogadorId = req.params.id;
            const data = req.body;
            const atualizarJogador = await JogadorModel.atualizar(jogadorId, data);
            return res.status(200).json(atualizarJogador)
        } catch (erro) {
            return res.status(500).send(erro.message)
        }
    }

    // Controller - Delete

    static async remover(req, res) {
        try {
            const jogadorId = req.params.id;
            await JogadorModel.remover(jogadorId);
            return res.status(204).send()
        } catch (erro) {
            return res.status(500).send(erro.message)
        }
    }

}
