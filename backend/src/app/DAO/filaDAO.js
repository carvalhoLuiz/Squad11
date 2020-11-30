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
        .select(
          'jogo.id_jogo',
          'usuario.nome',
          'jogo.tempo_medio',
          'fila.inicio'
        )
        .join('usuario', 'usuario.id_usuario', '=', 'fila.id_jogador')
        .join('jogo', 'jogo.id_jogo', '=', 'fila.id_jogo')
        .where('fila.finalizar', '=', '0')
        .andWhere('fila.id_jogo', '=', id_jogo);

      queue.map((x) => {
        return !x.inicio ? x.inicio : null;
      });

      queue = queue.map((x, t) => {
        if (t > 0) {
          x.tempo_medio *= ++t;
        }
        return x;
      });
      return queue;
    } catch (error) {
      return error;
    }
  }

  async time() {
    try {
      let queue = await knexDB('fila')
        .select(
          'jogo.id_jogo',
          'usuario.nome',
          'jogo.tempo_medio',
          'fila.inicio'
        )
        .join('usuario', 'usuario.id_usuario', '=', 'fila.id_jogador')
        .join('jogo', 'jogo.id_jogo', '=', 'fila.id_jogo')
        .where('fila.finalizar', '=', '0')
        .orderBy('id_jogo');
      const ids = [];
      const nPlayers = [];
      const time2 = [];
      let f = 0;

      let current = queue[0].id_jogo;
      for (let x = 0; x <= queue.length - 1; x++) {
        if (x < queue.length - 1) {
          if (queue[x].id_jogo !== queue[x + 1].id_jogo) {
            if (ids.length < 1) {
              ids.push(queue[x].id_jogo);
              time2.push(queue[x].tempo_medio);
            }
            time2.push(queue[x + 1].tempo_medio);
            ids.push(queue[x + 1].id_jogo);
          }
        }
        if (queue[x].id_jogo !== current) {
          nPlayers.push(f);

          f = 0;
          current = queue[x].id_jogo;
        }
        if (
          current === queue[queue.length - 1].id_jogo &&
          x === queue.length - 1
        ) {
          nPlayers.push(f + 1);
          if (!ids[0]) {
            ids.push(queue[x].id_jogo);
            ids.push(queue[x].id_jogo);
          }
        }
        f++;
      }

      const time = nPlayers.map((x, ind) => {
        return x * time2[ind];
      });
      queue = {
        id: ids,
        player: nPlayers,
        time,
      };
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
      let res;
      let searchPlayersId = await knexDB('fila').where('finalizar', '=', '0');

      const playerInGame = searchPlayersId.filter((player) => {
        return player.inicio ? player.inicio : null;
      });
      searchPlayersId = searchPlayersId.map((x) => {
        return x.id_jogador;
      });
      let nPlayers = await knexDB('jogo')
        .where('id_jogo', '=', id_jogo)
        .first();

      nPlayers = nPlayers.numero_jogadores;

      if (searchPlayersId.length > nPlayers) {
        const x = searchPlayersId.length - nPlayers;

        searchPlayersId.splice(-x);
      }
      if (!playerInGame[0]) {
        res = await knexDB('fila')
          .update('inicio', new Date())
          .whereIn('id_jogador', searchPlayersId)
          .andWhere('finalizar', '=', '0');
      }

      return res;
    } catch (error) {
      return error;
    }
  }

  async finish(id_jogo) {
    try {
      let finishMatch;

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
        finishMatch = await knexDB('fila')
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
