import { JogadorModel } from "../models/jogador.model.js";

export class JogadorService {
    static async criar(jogador) {
        // /\d/ -> significa "algum dígito numérico" | .test -> retorna true ou false
        if (/\d/.test(jogador.nome)){
            throw new Error("O nome do jogador não pode ter número")
        }

        return await JogadorModel.criar(jogador);

    }
}