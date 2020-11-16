import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyle1 } from '../../components/partials/buttonStyle1/buttonStyle1';
import { Container } from './IndexViewStyled';
import Logo from '../../assets/icons/Logo.svg';
import { Template } from '../../components/partials/template';

export const IndexView = () => {
    /* - Basta apenas alterar o conteúdo da prop TEXTO e automaticamente estará como nome do botão 
       - A prop Primária, passa um valor booleano para o component que altera sua estilização caso seja
         botão primario ou não
       - A prop Active, recebe um booleano para definir as cores do botão caso esteja ativo ou não, será necessario integrar
         essa informação na validação do formulário */
    return (
        <Template>
            <Container>
                <img src={Logo} alt="logo" />
                <p>Confira os benefícios da fila virtual para jogar</p>
                <div className="CarrosselArea">Area do Carrossel</div>
                <Link to="/cadastro">
                    <ButtonStyle1 primary active texto="Cadastrar" />
                </Link>
                <br />
                <Link to="/login">
                    <ButtonStyle1 primary={false} texto="Entrar" />
                </Link>
            </Container>
        </Template>
    );
};
