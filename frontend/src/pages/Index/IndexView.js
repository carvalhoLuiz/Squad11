import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { Link } from 'react-router-dom';
import { ButtonStyle1 } from '../../components/partials/buttonStyle1/buttonStyle1';
import { ButtonStyle2 } from '../../components/partials/buttonStyle2/buttonStyle2';
import { Container } from './IndexViewStyled';
import Logo from '../../assets/icons/Logo.svg';
import { Template } from '../../components/partials/template';
import Mesa from '../../assets/media/Mesa.png';
import Slide1 from '../../assets/media/Slide1.png';
import Slide2 from '../../assets/media/Slide2.png';
import Slide3 from '../../assets/media/Slide3.png';
import Slide4 from '../../assets/media/Slide4.png';
import Slide5 from '../../assets/media/Slide5.png';

export const IndexView = () => {
    /* - Basta apenas alterar o conteúdo da prop TEXTO e automaticamente estará como nome do botão 
       - A prop Primária, passa um valor booleano para o component que altera sua estilização caso seja
         botão primario ou não
       - A prop Active, recebe um booleano para definir as cores do botão caso esteja ativo ou não, será necessario integrar
         essa informação na validação do formulário.
       - Adicionado pointer customizado quando estiver ativo e quando estiver desativado no ButtonStyle2
         */
    return (
        <Template>
            <Container>
                <img src={Logo} alt="logo" />
                <p>Confira os benefícios da fila virtual para jogar</p>

                <AwesomeSlider
                    style={{
                        height: '250px',
                        width: '35vw',
                        marginBottom: '50px',
                    }}
                >
                    <div
                        data-src={Slide1}
                        style={{
                            marginBottom: '50px',
                        }}
                    />
                    <div
                        data-src={Slide2}
                        style={{
                            marginBottom: '50px',
                        }}
                    />
                    <div
                        data-src={Slide3}
                        style={{
                            marginBottom: '50px',
                        }}
                    />
                    <div
                        data-src={Slide4}
                        style={{
                            marginBottom: '50px',
                        }}
                    />
                    <div
                        data-src={Slide5}
                        style={{
                            marginBottom: '50px',
                        }}
                    />
                </AwesomeSlider>

                <div className="btnArea">
                    <Link to="/cadastro">
                        <ButtonStyle1 primary active texto="Cadastrar" />
                    </Link>
                    <br />
                    <br />
                    <Link to="/login">
                        <ButtonStyle1 primary={false} texto="Entrar" />
                    </Link>
                </div>
            </Container>
        </Template>
    );
};
