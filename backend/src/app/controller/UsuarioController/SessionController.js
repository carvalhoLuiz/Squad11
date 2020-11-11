import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';
import UsuarioDao from '../../DAO/usuarioDAO';
import authConfig from '../../../config/authConfig';

const usuario = new UsuarioDao();

class SessionController {
  async store(req, res) {
    try {
      const { email, senha } = req.body;
      const lineUser = await usuario.search(email);

      if (!lineUser.mensagem) {
        const error = { Error: 'Email inválido' };
        throw error.Error;
      }

      if (lineUser.error === true) {
        throw lineUser.mensagem;
      }

      if (!(await bcrypt.compare(senha, lineUser.mensagem.senha))) {
        return res.status(400).json({ mensagem: `Senha inválida` });
      }
      const { id_usuario, nome } = lineUser.mensagem;
      return res.status(200).json({
        user: {
          nome,
        },
        token: JWT.sign({ email, id_usuario }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (error) {
      return res.status(400).json({ Error: error });
    }
  }
}

export default new SessionController();
