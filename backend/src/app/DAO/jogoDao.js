import knexDB from '../../database/knex';

class jogoDao {
  async create(nome_jogo, descricao, tempo_medio, numero_jogadores) {
    try {
      const create = await knexDB('jogo').insert({
        nome_jogo,
        descricao,
        tempo_medio,
        numero_jogadores,
      });

      return { mensagem: 'Jogo criado com sucesso', db: create };
    } catch (error) {
      return error;
    }
  }

  async update(id_jogo, nome_jogo, descricao, tempo_medio, numero_jogadores) {
    try {
      const update = await knexDB('jogo')
        .update(nome_jogo, descricao, tempo_medio, numero_jogadores)
        .where(id_jogo);

      return { mensagem: 'Jogo atualizado com sucesso', db: update };
    } catch (error) {
      return error;
    }
  }

  async delete(id_jogo) {
    try {
      const del = await knexDB('jogo').where(id_jogo).del();

      return { mensagem: 'Jogo excluido com sucesso', db: del };
    } catch (error) {
      return error;
    }
  }

  async index() {
    try {
      const index = await knexDB('jogo').select('*');

      return index;
    } catch (error) {
      return error;
    }
  }
}

export default jogoDao;
