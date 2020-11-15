import knexDB from '../../database/knex';

class UsuarioDAO {
  async create(nome, email, senha) {
    try {
      this.res = await knexDB('usuario').insert({ nome, email, senha });

      return { error: false, mensagem: `Cadastro realizado com sucesso` };
    } catch (error) {
      return { error: true, mensagem: error };
    }
  }

  async search(email) {
    try {
      this.res = await knexDB('usuario')
        .select('*')
        .where('email', email)
        .first();
      return { error: false, mensagem: this.res };
    } catch (error) {
      return { error: true, mensagem: error };
    }
  }
}

export default UsuarioDAO;
