import { JogadorModel } from "../models/jogador.model.js";
import { JogadorService } from "../service/jogador.service.js";

export class JogadorController {

    // Controller -> GET

    /*Nesse caso como existem mais de um método get(listar),
    precisamos utilizar o if/else para que o listagem seja feita de acordo
    com o que o usuário está precisando */

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
            if (data === undefined) {
                return res.status(404).send({ "mensagem": "ID não encontrado" })
            }
            return res.status(200).json(data)

        } catch (erro) {
            return res.status(500).send(erro.message)
        }
    }

    // Controller - POST

    static async criar(req, res) {
        try {

            const jogador = req.body;
            const novoJogador = await JogadorService.criar(jogador);
            return res.status(201).json(novoJogador)

        } catch (erro) {
            if (erro.message === "O nome do jogador não pode ter número") {
                return res.status(400).json({ mensagem: erro.message })
            } else {
                return res.status(500).json({ mensagem: erro.message })
            }
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
