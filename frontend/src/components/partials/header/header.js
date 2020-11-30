import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../../assets/icons/Logo.svg';

export const HeaderArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    border-bottom: 2px solid #2d00cc;
    padding-bottom: 49px;
    padding-top: 40px;
`;

export const LogoArea = styled.div`
    align-self: flex-start;
`;
export const MenuArea = styled.div`
    display: flex;
    align-self: flex-end;
    font-family: 'Montserrat';
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    color: #6236ff;
    margin-right: 2%;
    box-sizing: border-box;

    a {
        text-decoration: none;
        height: 60px;
        display: block;
        text-align: center;
        margin-right: 0%;
        padding: 10px;
        border: 1px solid #fff;
        border-radius: 10px;
        min-width: 200px;
    }

    a:visited {
        color: #6236ff;
    }

    a:hover {
        font-weight: 600;
        font-style: normal;
    }
    .Active {
        border: 1px solid #f8ca00;
        border-radius: 10px;
    }

    p {
        align-self: center;
        padding: 5px 25px 5px 25px;
    }

    nav {
        display: flex;
        max-width: 60%;
        height: 50px;
    }

    ul {
        display: flex;
        align-items: center;
        list-style: none;
        align-self: flex-end;
        justify-content: space-evenly;
    }

    ul a {
        text-decoration: none;
    }

    ul li {
        align-self: flex-end;
        align-items: center;
        justify-content: center;
        padding: 15px;
        border: 2px solid #00ffff;
        border-radius: 10px;
        margin-left: 10%;
    }

    ul li:nth-child(1) {
        margin-left: -20%;
    }
`;

export const Header = () => {
    return (
        <HeaderArea>
            <LogoArea>
                <img src={Logo} alt="Logo" />
            </LogoArea>
            <MenuArea>
                <nav>
                    <NavLink to="/home" activeClassName="Active">
                        <p>Jogos</p>
                    </NavLink>
                    <NavLink to="/jogos" activeClassName="Active">
                        <p>Histórico</p>
                    </NavLink>
                    <NavLink to="/perfil" activeClassName="Active">
                        <p>Perfil</p>
                    </NavLink>
                </nav>
            </MenuArea>
        </HeaderArea>
    );
};
