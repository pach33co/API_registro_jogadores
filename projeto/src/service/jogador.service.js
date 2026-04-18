import { JogadorModel } from "../models/jogador.model.js";

export class JogadorService {
    static async criar(jogador) {
        // /\d/ -> significa "algum dígito numérico" | .test -> retorna true ou false
        if (/\d/.test(jogador.nome)){
            throw new Error("O nome do jogador não pode ter número")
        }

        if (jogador.idade <= 0) {
            throw new Error("A idade do jogador não pode ser igual ou menor que zero")
        }

        if (jogador.altura >= 2.30 || jogador.altura <= 1.00) {
            throw new Error("A altura do jogador precisa estar entre 1.00 e 2.30")
        }

        return await JogadorModel.criar(jogador);

    }
}