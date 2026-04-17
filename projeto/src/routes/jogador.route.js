import { Router } from "express";
import { JogadorController } from "../controllers/jogador.controller.js";

const router = Router();

router.get('/jogadores', JogadorController.listar);

router.get('/jogadores/:id', JogadorController.listarId);

router.post('/jogadores', JogadorController.criar);

router.put('/jogadores/:id', JogadorController.atualizar);

router.delete('/jogadores/:id', JogadorController.remover);

export { router };

