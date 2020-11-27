import { addMinutes, isAfter } from 'date-fns';
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
        .select('id_usuario', 'nome')
        .whereNotIn('id_usuario', blackList)
        .andWhereNot('id_usuario', '=', id_jogador);

      return res;
    } catch (error) {
      return error;
    }
  }

  async indexQueue(id_jogo) {
    try {
      let queue = await knexDB('fila')
        .select('usuario.nome', 'jogo.tempo_medio')
        .join('usuario', 'usuario.id_usuario', '=', 'fila.id_jogador')
        .join('jogo', 'jogo.id_jogo', '=', 'fila.id_jogo')
        .where('fila.finalizar', '=', '0')
        .andWhere('fila.id_jogo', '=', id_jogo);
      queue.splice(0, 1);
      queue = queue.map((x, t) => {
        x.tempo_medio = 2 * ++t;
        return x;
      });
      return queue;
    } catch (error) {
      return error;
    }
  }

  async delete(id_jogo, id_jogador) {
    try {
      await knexDB('fila')
        .where('id_jogador', '=', id_jogador)
        .andWhere('finalizar', '=', '0')
        .andWhere('id_jogo', '=', id_jogo)
        .del();
      return 'deletado com sucesso';
    } catch (error) {
      return error;
    }
  }

  async startDate(id_jogo) {
    try {
      let searchPlayersId = await knexDB('fila').where('finalizar', '=', '0');

      searchPlayersId = searchPlayersId.map((x) => {
        return x.id_jogador;
      });

      let nPlayers = await knexDB('jogo').where('id_jogo', '=', id_jogo);
      nPlayers = nPlayers[0].numero_jogadores;

      if (searchPlayersId.length > 2) {
        const x = searchPlayersId.length - nPlayers;

        searchPlayersId.splice(-x);
      }

      const res = await knexDB('fila')
        .update('inicio', new Date())
        .whereIn('id_jogador', searchPlayersId)
        .andWhere('finalizar', '=', '0');

      return res;
    } catch (error) {
      return error;
    }
  }

  async finish(id_jogo) {
    try {
      const matchs = await knexDB('fila')
        .whereNotNull('inicio')
        .andWhere('id_jogo', id_jogo)
        .andWhere('finalizar', '=', '0');

      const finishIds = matchs.map((x) => {
        return x.id_fila;
      });

      const avarageTime = await knexDB('jogo')
        .select('*')
        .where('id_jogo', id_jogo)
        .first();

      if (
        isAfter(
          new Date(),
          addMinutes(matchs[0].inicio, avarageTime.tempo_medio)
        )
      ) {
        const finishMatch = await knexDB('fila')
          .update('finalizar', 1)
          .whereIn('id_fila', finishIds);
      }

      return finishMatch;
    } catch (error) {
      return error;
    }
  }
}

export default filaDAO;
