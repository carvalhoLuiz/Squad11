import FilaDao from '../../DAO/filaDAO';

const fila = new FilaDao();

class FilaController {
  async store(req, res) {
    try {
      const { id_jogador2, id_jogo } = req.body;
      const id_jogador1 = req.userId;

      const create = await fila.create(id_jogador1, id_jogador2, id_jogo);

      return res.status(200).json(create);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new FilaController();
