/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import { ListaComponentizada } from '../../components/partials/Lista/ListaComponent';
import { Template } from '../../components/partials/template';
import UserPhoto from '../../assets/media/Person.jpg';

export const AreaTotal = styled.div`
    width: 100%;
    background-color: #f7f7f7;
    border-radius: 10px;
    padding: 25px;
    padding-bottom: 5px;
`;

export const LegendaArea = styled.div`
    width: 100%;
    display: flex;

    p {
        font-weight: '500';
        font-family: 'Roboto';
        color: #2f2e2e;
        font-size: 18px;
    }
`;

export const LegendaPessoas = styled.div``;

export const LegendaTempo = styled.div`
    margin-left: 28%;
    margin-right: 14%;
`;

export const Jogos = () => {
    return (
        <Template>
            <LegendaArea>
                <LegendaTempo>
                    <strong>
                        <p>Tempo Estimado de Espera</p>
                    </strong>
                </LegendaTempo>
                <LegendaPessoas>
                    <strong>
                        <p>Nº de Pessoas na Fila</p>
                    </strong>
                </LegendaPessoas>
            </LegendaArea>
            <AreaTotal>
                <ListaComponentizada
                    photo={UserPhoto}
                    nome="Você"
                    fila="Teste"
                    tempo="Teste"
                />
                <ListaComponentizada
                    photo={UserPhoto}
                    nome="Teste"
                    fila="Teste"
                    tempo="Teste"
                />
                <ListaComponentizada
                    photo={UserPhoto}
                    nome="Teste"
                    fila="Teste"
                    tempo="Teste"
                />
                <ListaComponentizada
                    photo={UserPhoto}
                    nome="Teste"
                    fila="Teste"
                    tempo="Teste"
                />
                <ListaComponentizada
                    photo={UserPhoto}
                    nome="Teste"
                    fila="Teste"
                    tempo="Teste"
                />
                <ListaComponentizada
                    photo={UserPhoto}
                    nome="Teste"
                    fila="Teste"
                    tempo="Teste"
                />
                <ListaComponentizada
                    photo={UserPhoto}
                    nome="Teste"
                    fila="Teste"
                    tempo="Teste"
                />
                <ListaComponentizada
                    photo={UserPhoto}
                    nome="Teste"
                    fila="Teste"
                    tempo="Teste"
                />
                <ListaComponentizada
                    photo={UserPhoto}
                    nome="Teste"
                    fila="Teste"
                    tempo="Teste"
                />
                <ListaComponentizada
                    photo={UserPhoto}
                    nome="Teste"
                    fila="Teste"
                    tempo="Teste"
                />
            </AreaTotal>
        </Template>
    );
};
