import bcrypt from 'bcryptjs';
import UsuarioDAO from '../../DAO/usuarioDAO';

const usuario = new UsuarioDAO();

class Usuario {
  async store(req, res) {
    try {
      const { nome, email, senha } = req.body;
      const senha_hash = await bcrypt.hash(senha, 7);
      const register = await usuario.create(nome, email, senha_hash);

      return res.status(200).json(register);
    } catch (error) {
      return res.status(400).json({ menssagem: `Houve um erro: ${error}` });
    }
  }
}

export default new Usuario();
