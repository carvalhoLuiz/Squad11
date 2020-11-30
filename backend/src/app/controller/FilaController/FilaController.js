import FilaDao from '../../DAO/filaDAO';

const fila = new FilaDao();

class FilaController {
  async store(req, res) {
    const { id_jogador2, id_jogo } = req.body;
    const id_jogador1 = req.userId;
    const checarUsuarioFila = await fila.checkUserQueue(id_jogador1);

    try {
      if (!checarUsuarioFila) {
        const create = await fila.create(id_jogador1, id_jogador2, id_jogo);

        return res.status(200).json(create.mensagem);
      }

      return res
        .status(200)
        .json({ mensagem: 'Usuario já se encontra na fila!' });
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async indexAvailable(req, res) {
    const id_jogador = req.userId;
    try {
      const userAvailable = await fila.indexAvailable(id_jogador);

      return res.status(200).json(userAvailable);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async index(req, res) {
    const id_jogo = req.query.id;

    try {
      const queue = await fila.indexQueue(id_jogo);

      return res.status(200).json(queue);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async time(req, res) {
    try {
      const queue = await fila.time();

      return res.status(200).json(queue);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async delete(req, res) {
    const id_jogo = req.query.id;
    const id_jogador = req.userId;
    try {
      await fila.delete(id_jogo, id_jogador);

      return res.status(200).json({ mensagem: 'Você saiu da fila' });
    } catch (error) {
      return res.status(400).json({ mensagem: error });
    }
  }

  async startDate(req, res) {
    const id_jogo = req.query.id;
    try {
      const startDate = await fila.startDate(id_jogo);

      return res.status(200).json(startDate);
    } catch (error) {
      return res.status(400).json({ mensagem: error });
    }
  }

  async finishMatch(req, res) {
    const id_jogo = req.query.id;
    try {
      const finishMatch = await fila.finish(id_jogo);

      return res.status(200).json({ finishMatch });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new FilaController();
