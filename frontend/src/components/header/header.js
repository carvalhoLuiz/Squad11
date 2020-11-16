import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/Logo.svg';

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const HeaderArea = styled.div`
    display: flex;
    height: 10vh;
    width: 95vw;
    margin-left: 0vw;
    background-color: #00ffff;
    border-bottom: 3px solid #2d00cc;
    flex-direction: row;
    align-items: center;
    color: #6236ff;

    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    nav ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        margin-left: 58vw;
    }

    nav a {
        text-decoration: none;
        align-items: center;
    }

    nav a:hover {
        background-color: #4619e5;
        color: #f8ca00;
        border-radius: 10px;
    }

    nav ul li {
        display: block;
        padding: 15px;
        border: ${(props) =>
            props.active === true ? '1px solid #ccc;' : '0px'};
        border-radius: 10px;
        text-align: center;
    }

    img {
        margin-top: 3vh;
        margin-bottom: 2vh;
    }
`;

export const Header = (props) => {
    return (
        <Container>
            <HeaderArea active={props.active}>
                <nav>
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <ul>
                        <Link to="/">
                            <li>Jogos</li>
                        </Link>
                        <Link to="/">
                            <li>Fila</li>
                        </Link>
                        <Link to="/">
                            <li>Histórico</li>
                        </Link>
                        <Link to="/">
                            <li>Notificação</li>
                        </Link>
                        <Link to="/">
                            <li>Perfil</li>
                        </Link>
                    </ul>
                </nav>
            </HeaderArea>
        </Container>
    );
};
