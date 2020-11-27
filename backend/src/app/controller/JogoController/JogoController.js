import Jogo from '../../DAO/jogoDao';

const jogo = new Jogo();

class JogoController {
  async store(req, res) {
    const { nome_jogo, descricao, tempo_medio, numero_jogadores } = req.body;
    try {
      const store = await jogo.create(
        nome_jogo,
        descricao,
        tempo_medio,
        numero_jogadores
      );

      return res.status(200).json(store);
    } catch (error) {
      return error;
    }
  }
}

export default new JogoController();
