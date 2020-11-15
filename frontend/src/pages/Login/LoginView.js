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
        <div
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <form
                style={{
                    border: '2px solid black',
                    margin: '2% 0% 2% 2%',
                }}
            >
                <div style={{ margin: '2% 2% 2% 10%' }}>
                    <Input
                        label="nome"
                        placeHolder="Digite seu nome"
                        input={0}
                        func={teste}
                    />
                    <div style={{ margin: '2% 2% 2% 10%' }}>
                    <Input
                        label="email"
                        placeHolder="Digite seu email"
                        input={1}
                        func={teste}
                    />
                    <div style={{ margin: '2% 2% 2% 10%' }}>
                    <Input
                        label="senha"
                        placeHolder="Digite sua senha"
                        input={2}
                        func={teste}
                        
                    />
                </div>
            </form>
        </div>
    );
}
