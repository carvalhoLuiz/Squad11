import bcrypt from 'bcryptjs';
import JWT from 'jsonwebtoken';
import UsuarioDao from '../../DAO/usuarioDAO';
import authConfig from '../../config/authConfig';

const usuario = new UsuarioDao();

class SessionController {
  async store(req, res) {
    try {
      const { email, senha } = req.body;
      const lineUser = await usuario.search(email);
      if (!(await bcrypt.compare(senha, lineUser.senha))) {
        return res.status(400).json({ menssagem: `Senha inválida` });
      }

      return res.status(200).json({
        user: {
          email,
        },
        token: JWT.sign({ email }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (error) {
      return res.status(400).json({
        mensage: `${error}`,
      });
    }
  }
}

export default new SessionController();
