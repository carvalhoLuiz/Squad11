import React from 'react';
import Input from '../../components/Input/Input';

export default function Login() {
    let error = false;
    const teste = (x) => {
        const testek = x.target.value;

        error = testek === 'luiz';
        return error;
    };
    return (
        <div>
            <p>asdasdasdasdas</p>

            <Input
                label="email"
                placeHolder="Digite seu email"
                input={0}
                func={teste}
            />
            <Input
                label="senha"
                placeHolder="Digite sua senha"
                type="password"
                input={1}
            />
        </div>
    );
}
