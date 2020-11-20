import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { ButtonStyle1 } from '../../components/partials/buttonStyle1/buttonStyle1';
import Logo from '../../assets/icons/Logo.svg';

export default function Register() {
    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
            }}
        >
            <div style={{ margin: '40px 0 0 40px' }}>
                <img src={Logo} alt="teste" />
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '10%',
                            cursor: 'pointer',
                        }}
                    >
                        <p>
                            <ArrowBackIosIcon />
                        </p>
                        <p>CADASTRO</p>
                    </div>
                </Link>
            </div>
            <div
                style={{
                    height: '80%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <form
                    style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '0px',
                    }}
                >
                    <Input
                        label="Nome de usuário"
                        placeHolder="Digite seu nome"
                        input={0}
                    />
                    <br />
                    <Input
                        label="Email"
                        placeHolder="Digite seu email"
                        input={1}
                    />
                    <br />
                    <Input
                        label="Senha"
                        placeHolder="Digite sua senha "
                        input={2}
                    />
                    <ButtonStyle1 primary active texto="Concluir cadastro" />
                </form>
            </div>
        </div>
    );
}
