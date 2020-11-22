import knexDB from '../../database/knex';

class filaDAO {
  async create(id_jogador1, id_jogador2, id_jogo) {
    try {
      if (id_jogador2) {
        await knexDB.transaction(async (trans) => {
          await knexDB('fila').insert({
            id_jogador: id_jogador1,
            id_jogo,
          });

          await knexDB('fila').insert({ id_jogador: id_jogador2, id_jogo });

          return {
            error: false,
            mensagem: 'Inserido na fila com sucesso!',
            trans,
          };
        });
      } else {
        await knexDB('fila').insert({ id_jogador: id_jogador1, id_jogo });

        return { error: false, mensagem: 'Inserio na fila com sucesso!' };
      }
      return 0;
    } catch (error) {
      return { error: true, mensagem: error };
    }
  }

  async checkUserQueue(id_jogador) {
    try {
      const res = await knexDB('fila')
        .where('id_jogador', id_jogador)
        .andWhere('finalizar', 0)
        .first();

      return res;
    } catch (error) {
      return error;
    }
  }

  async indexAvailable(id_jogador) {
    try {
      let res = await knexDB('usuario')
        .select('usuario.id_usuario', 'usuario.nome')
        .join('fila', 'usuario.id_usuario', '=', 'fila.id_jogador')
        .where('fila.finalizar', '=', '0')
        .andWhereNot('usuario.id_usuario', '=', id_jogador);

      const blackList = res.map((x) => {
        return x.id_usuario;
      });
      res = await knexDB('usuario')
        .select('nome')
        .whereNotIn('id_usuario', blackList)
        .andWhereNot('usuario.id_usuario', '=', id_jogador);

      return res;
    } catch (error) {
      return error;
    }
  }
}

export default filaDAO;
