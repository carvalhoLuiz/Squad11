import React from 'react';
import { ButtonStyle1 } from '../../components/partials/buttonStyle1/buttonStyle1';
import { ButtonStyle2 } from '../../components/partials/buttonStyle2/buttonStyle2';
import { Container } from './IndexViewStyled';

export const IndexView = () => {
    /* - Basta apenas alterar o conteúdo da prop TEXTO e automaticamente estará como nome do botão 
       - A prop Primária, passa um valor booleano para o component que altera sua estilização caso seja
         botão primario ou não
       - A prop Active, recebe um booleano para definir as cores do botão caso esteja ativo ou não, será necessario integrar
         essa informação na validação do formulário */
    return (
        <Container>
            <ButtonStyle1 primary active texto="Cadastrar" />
            <br />
            <ButtonStyle1 primary={false} texto="Entrar" />
            <br />
            <ButtonStyle2 primary={false} active={false} texto="Inativo" />
            <br />
            <ButtonStyle2 primary active texto="Ativo" />
        </Container>
    );
};
