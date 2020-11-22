import FilaDao from '../../DAO/filaDAO';

const fila = new FilaDao();

class FilaController {
  async store(req, res) {
    try {
      const { id_jogador2, id_jogo } = req.body;
      const id_jogador1 = req.userId;
      const checarUsuarioFila = await fila.checkUserQueue(id_jogador1);

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
    try {
      const id_jogador = req.userId;

      const userAvailable = await fila.indexAvailable(id_jogador);

      return res.status(200).json(userAvailable);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new FilaController();
