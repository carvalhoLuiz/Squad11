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
      return res.status(400).json(error);
    }
  }

  async update(req, res) {
    const { nome_jogo, descricao, tempo_medio, numero_jogadores } = req.body;
    const id_jogo = req.query.id;
    try {
      const update = await jogo.update(
        id_jogo,
        nome_jogo,
        descricao,
        tempo_medio,
        numero_jogadores
      );

      return res.status(200).json(update);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async delete(req, res) {
    const id_jogo = req.query.id;
    try {
      const del = await jogo.delete(id_jogo);

      return res.status(200).json(del);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async index(req, res) {
    const id_jogo = req.query.id ? req.query.id : null;

    try {
      const index = await jogo.index(id_jogo);

      return res.status(200).json(index);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new JogoController();
