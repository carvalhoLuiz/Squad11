import knexDB from '../database/knex';

class UsuarioDAO {
  async create(nome, email, senha) {
    try {
      this.res = await knexDB('usuario').insert({ nome, email, senha });

      return { mensagem: `Cadastro realizado com sucesso` };
    } catch (error) {
      return { menssagem: `Houve um erro! ${error}` };
    }
  }
}

export default UsuarioDAO;
