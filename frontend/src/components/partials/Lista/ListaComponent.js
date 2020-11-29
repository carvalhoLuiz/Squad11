import React from 'react';
import styled from 'styled-components';
import { ButtonStyle1 } from '../buttonStyle1/buttonStyle1';

export const ItemArea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 24px;
    margin-bottom: 24px;
`;

export const FotoItem = styled.div`
    align-self: center;
    width: 50px;
    height: 52px;
    border-radius: 360px;
    background-color: #00ffff;

    img {
        width: 100%;
        height: 100%;
        border-radius: 360px;
    }
`;
export const NomeItem = styled.div`
    display: flex;
    align-items: center;
    p {
        font-family: 'Roboto';
        font-size: 18px;
        font-style: normal;
        margin-left: 155%;
    }
`;
export const TempoItem = styled.div`
    display: flex;
    align-items: center;

    p {
        font-family: 'Roboto';
        font-size: 18px;
        font-style: normal;
    }
`;
export const PessoasItem = styled.div`
    display: flex;
    align-items: center;

    p {
        font-family: 'Roboto';
        font-size: 18px;
        font-style: normal;
    }
`;
export const ButtonItem = styled.div`
    display: flex;
    align-items: center;
`;
export const UserArea = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ListaComponentizada = (props) => {
    return (
        <>
            <ItemArea>
                <UserArea>
                    <FotoItem>
                        <img src={props.photo} alt="user_photo" />
                    </FotoItem>
                    <NomeItem>
                        <p>{props.nome}</p>
                    </NomeItem>
                </UserArea>
                <TempoItem>
                    <p>{props.tempo}</p>
                </TempoItem>
                <PessoasItem>
                    <p>{props.fila}</p>
                </PessoasItem>
                <ButtonItem>
                    <ButtonStyle1 primary active texto="Sair da Fila" />
                </ButtonItem>
            </ItemArea>
        </>
    );
};
