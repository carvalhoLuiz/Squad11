import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { Container } from './StyledLoginView';
import Logo from '../../assets/icons/Logo.svg';

import { ButtonStyle1 } from '../../components/partials/buttonStyle1/buttonStyle1';

export default function Login() {
    let error = false;
    const teste = (x) => {
        const testek = x.target.value;

        error = testek === 'luiz';
        return error;
    };
    return (
        <Container>
            <img src={Logo} alt="Logo" />

            <Input
                label="Email"
                placeHolder="Digite seu email"
                input={0}
                func={teste}
                className="inputs"
            />
            <div className="space" />
            <Input
                label="Senha"
                placeHolder="Digite sua senha"
                type="password"
                input={1}
                className="inputs"
            />
            <br />
            <Link className="passForgot" to="/">
                Esqueci a Senha
            </Link>
            <div className="btn">
                <Link to="/">
                    <ButtonStyle1
                        className="botao"
                        primary
                        active
                        texto="Entrar"
                    />
                </Link>
            </div>
        </Container>
    );
}
