import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { Container } from './StyledLoginView';
import Logo from '../../assets/icons/Logo.svg';
import api from '../../services/api';

import { ButtonStyle1 } from '../../components/partials/buttonStyle1/buttonStyle1';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const handleEmail = (a) => {
        setEmail(a.target.value);
    };
    const handleSenha = (a) => {
        setSenha(a.target.value);
    };
    const logar = async () => {
        const data = {
            email,
            senha,
        };
        await api.post('/login', data).then((response) => {
            const { user, token } = response.data;
            localStorage.setItem('user', user);
            localStorage.setItem('token', token);
            console.log(user);
        });
    };
    return (
        <Container>
            <img src={Logo} alt="Logo" />

            <Input
                label="Email"
                placeHolder="Digite seu email"
                input={0}
                func={handleEmail}
                className="inputs"
            />
            <div className="space" />
            <Input
                label="Senha"
                placeHolder="Digite sua senha"
                type="password"
                input={1}
                func={handleSenha}
                className="inputs"
            />
            <br />
            <Link className="passForgot" to="/">
                Esqueci a Senha
            </Link>
            <div className="btn">
                <ButtonStyle1
                    className="botao"
                    primary
                    active
                    texto="Entrar"
                    func={logar}
                />
            </div>
        </Container>
    );
}
