import React from 'react';
import Input from '../../components/Input/Input';

export default function Login() {
    return (
        <div>
            <p>asdasdasdasdas</p>

            <Input label="email" placeHolder="Digite seu email" />
            <Input
                label="senha"
                placeHolder="Digite sua senha"
                type="password"
            />
        </div>
    );
}
