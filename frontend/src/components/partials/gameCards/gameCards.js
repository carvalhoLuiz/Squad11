import React from 'react';
import styled from 'styled-components';
import Ppl from '../../../assets/icons/Ppl.svg';
import Timer from '../../../assets/icons/Timer.svg';
import { ButtonStyle3 } from '../buttonStyle3/buttonStyle3';

export const Template = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 6vh;
`;
export const Area = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 2px solid #c9c9c9;
    border-radius: 10px;
    padding: 8px;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2%;

    .Titulo {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        align-self: center;
        margin-top: 25px;
        align-self: flex-start;
    }
    @media (min-width: 768px) {
        width: 45%;

        .Titulo {
            align-self: flex-start;
        }
    }

    @media (max-width: 768px) {
        h6 {
            font-size: 18px;
        }
    }
`;

export const CardImg = styled.div`
    display: flex;
    justify-content: center;

    img {
        width: 100%;
    }
`;

export const TxtArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3vh;

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-size: 18px;
        margin-left: 1vw;

        @media (max-width: 768px) {
            margin-right: 25px;
        }
    }

    .minutos {
        margin-left: 1.5vw;
    }

    @media (max-width: 768px) {
        p {
            font-size: 12px;
            margin-top: 45px;
        }
        img {
            margin-top: 45px;
        }
    }
`;
export const DescArea = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -25px;
    justify-content: flex-start;

    @media (min-width: 768px) {
        flex-direction: column;
        margin-top: 25px;
    }
`;

export const BtnArea = styled.div`
    display: flex;
    margin-top: 85px;
    width: 45%;
    align-self: flex-start;

    @media (max-width: 768px) {
        width: 100%;
        align-self: center;
        margin-top: 30px;
        margin-bottom: 10px;
        margin-right: 5px;
    }
`;

export const GameCard = (props) => {
    return (
        <Template>
            <Area>
                <CardImg>
                    <img src={props.image} alt="mesa" />
                </CardImg>
                <InfoArea>
                    <h6 className="Titulo">{props.name}</h6>
                    <DescArea>
                        <TxtArea>
                            <img src={Ppl} alt="icon" />
                            <p>{props.fila}</p>
                        </TxtArea>
                        <TxtArea>
                            <img src={Timer} alt="icon" />
                            <p className="minutos">{props.duracao}</p>
                        </TxtArea>
                    </DescArea>
                    <BtnArea>
                        <ButtonStyle3
                            className="botao"
                            primary
                            texto="Entrar na Fila"
                            texto2=">"
                        />
                    </BtnArea>
                </InfoArea>
            </Area>
        </Template>
    );
};
