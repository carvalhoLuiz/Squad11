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
}

export default filaDAO;
