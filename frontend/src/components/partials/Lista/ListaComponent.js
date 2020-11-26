import React from 'react';
import styled from 'styled-components';
import { ButtonStyle1 } from '../buttonStyle1/buttonStyle1';

export const AreaTotal = styled.div`
    width: 100%;
    background-color: #f7f7f7;
    border-radius: 10px;
    padding: 10px;
`;
export const ItemArea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    padding: 24px;
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
        margin-left: 41px;
    }
`;
export const TempoItem = styled.div`
    display: flex;
    align-items: center;

    p {
        font-family: 'Roboto';
        font-size: 18px;
        font-style: normal;
        margin-left: 279px;
    }
`;
export const PessoasItem = styled.div`
    display: flex;
    align-items: center;

    p {
        font-family: 'Roboto';
        font-size: 18px;
        font-style: normal;
        margin-left: 214px;
    }
`;
export const ButtonItem = styled.div`
    display: flex;
    align-items: center;
    margin-left: 187px;
`;

export const ListaComponentizada = (props) => {
    return (
        <AreaTotal>
            <ItemArea>
                <FotoItem>
                    <img src={props.photo} alt="user_photo" />
                </FotoItem>
                <NomeItem>
                    <p>{props.nome}</p>
                </NomeItem>
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
        </AreaTotal>
    );
};
