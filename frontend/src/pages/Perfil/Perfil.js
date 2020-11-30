import React from 'react';
import styled from 'styled-components';
import { Template } from '../../components/partials/template';
import { Header } from '../../components/partials/header/header';
import { ButtonStyle1 } from '../../components/partials/buttonStyle1/buttonStyle1';
import Person from '../../assets/media/Person.jpg';

export const ContentTotal = styled.div`
    padding-bottom: 25px;
    .Title {
        font-weight: 400;
        font-family: 'Montserrat';
        font-size: 24px;
        font-style: normal;
        margin-bottom: 16px;
        margin-top: 40px;
    }
`;
export const ProfileArea = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #f7f7f7;
    border-radius: 10px;
    height: 377px;
    width: 55%;
`;
export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
`;
export const NomeFotoArea = styled.div`
    display: flex;
    align-items: center;
    margin-left: 32px;
    h5 {
        font-size: 36px;
        font-family: 'Montserrat';
        font-weight: 400;
        font-style: normal;
        margin-left: 24px;
    }
`;

export const NomeInfoArea = styled.div`
    margin-left: 32px;
    .Field {
        margin-top: 41.3px;
        font-size: 24px;
        font-family: 'Roboto';
        font-weight: 500;
        font-style: normal;
    }

    .Usuario {
        font-size: 18px;
        margin-top: 15.9px;
    }
`;

export const MailInfoArea = styled.div`
    margin-left: 32px;
    .Field {
        margin-top: 41.3px;
        font-size: 24px;
        font-family: 'Roboto';
        font-weight: 500;
        font-style: normal;
    }

    .Usuario {
        font-size: 18px;
        margin-top: 15.9px;
    }
`;

export const ButtonArea = styled.div`
    align-self: center;
    margin-top: 95px;
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 25%;
    margin-left: 45%;

    .Fbtn {
        margin-bottom: 45px;
    }
`;

export const ImgArea = styled.div`
    margin-top: 36px;
    width: 81px;
    height: 83px;
    border-radius: 360px;
    background-color: #00ffff;

    img {
        width: 100%;
        height: 100%;
        border-radius: 360px;
    }
`;

export const NotificationArea = styled.div`
    display: flex;
    align-items: center;
    background-color: #f7f7f7;
    border-radius: 10px;
    height: 138px;
    width: 55%;

    .BtnArea {
        width: 40%;
        margin-left: 32px;
    }

    .btnDesativada {
        width: 40%;
        height: 64px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btnDesativada :hover {
        cursor: pointer;
    }

    .Desativada {
        font-family: 'Montserrat';
        font-size: 24px;
        font-weight: 600;
        color: #6236ff;
    }

    .IconArea {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 33px;
        width: 19px;
        margin-left: 12%;
    }

    .IconArea :hover {
        cursor: pointer;
    }

    .UpperPart {
        background-color: #f8ca00;
        width: 25px;
        height: 5px;
        transform: rotate(45deg);
        margin-right: 10px;
    }

    .LowerPart {
        background-color: #f8ca00;
        width: 25px;
        height: 5px;
        transform: rotate(-45deg);
        margin-top: 10px;
        margin-right: 10px;
    }
`;
export const TimerArea = styled.div`
    display: flex;
    align-items: center;
    background-color: #f7f7f7;
    border-radius: 10px;
    height: 235px;
    width: 55%;
`;

export const CounterArea = styled.div`
    height: 183px;
    width: 183px;
    border-radius: 360px;
    margin-left: 32px;

    .OuterCircle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: inherit;
        height: inherit;
        background-color: #ffe261;
        border-radius: 360px;
    }

    .InnerCircle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 153px;
        height: 153px;
        background-color: #4619e5;
        border-radius: 360px;
        align-self: center;

        .minutos {
            font-size: 36px;
            color: #fff;
            font-family: 'Montserrat';
            font-weight: 500;
            font-style: normal;
        }
    }
`;
export const TimeInfoArea = styled.div`
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    height: 183px;
    width: 60%;

    .CtrlJogo {
        font-family: 'Roboto';
        font-weight: 500;
        font-style: normal;
        font-size: 20px;
    }

    .JogoDesc {
        margin-top: 10px;
        font-family: 'Roboto';
        font-weight: 400;
        font-style: normal;
        font-size: 18px;
        width: 363px;
    }
`;

export const AreaBtns = styled.div`
    margin-top: 32px;
    display: flex;

    .btUm {
        width: 208px;
        margin-right: 32px;
    }

    .btDois {
        width: 208px;
    }
`;
export const Perfil = () => {
    return (
        <Template>
            <Header />
            <ContentTotal>
                <h6 className="Title">Perfil</h6>
                <ProfileArea>
                    <InfoArea>
                        <NomeFotoArea>
                            <ImgArea>
                                <img src={Person} alt="" />
                            </ImgArea>
                            <h5>Bruno</h5>
                        </NomeFotoArea>
                        <NomeInfoArea>
                            <p className="Field">Nome do Usuário</p>
                            <p className="Usuario">Bruno</p>
                        </NomeInfoArea>
                        <MailInfoArea>
                            <p className="Field">Email</p>
                            <p className="Usuario">usuario@gmail.com</p>
                        </MailInfoArea>
                    </InfoArea>
                    <ButtonArea>
                        <div className="Fbtn">
                            <ButtonStyle1 primary texto="Editar Pefil" />
                        </div>
                        <ButtonStyle1 primary texto="Editar Perfil" />
                    </ButtonArea>
                </ProfileArea>
                <h6 className="Title">Notificações</h6>
                <NotificationArea>
                    <div className="BtnArea">
                        <ButtonStyle1 primary texto="Ativada" />
                    </div>
                    <div className="btnDesativada">
                        <h6 className="Desativada">Desativada</h6>
                    </div>
                    <div className="IconArea">
                        <div className="UpperPart" />
                        <div className="LowerPart" />
                    </div>
                </NotificationArea>
                <h6 className="Title">Acompanhe seu tempo</h6>
                <TimerArea>
                    <br />
                    <CounterArea>
                        <div className="OuterCircle">
                            <div className="InnerCircle">
                                <h5 className="minutos">14:45</h5>
                            </div>
                        </div>
                    </CounterArea>
                    <TimeInfoArea>
                        <p className="CtrlJogo">Controle seu jogo!</p>
                        <p className="JogoDesc">
                            Você pode encerrar ou acrescentar + 10 minutos a sua
                            partida
                        </p>
                        <AreaBtns>
                            <div className="btUm">
                                <ButtonStyle1 primary texto="Encerrar" />
                            </div>
                            <div className="btDois">
                                <ButtonStyle1 primary texto="+ 10 Min" />
                            </div>
                        </AreaBtns>
                    </TimeInfoArea>
                </TimerArea>
            </ContentTotal>
        </Template>
    );
};
