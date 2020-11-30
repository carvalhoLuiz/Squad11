/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { ListaComponentizada } from '../../components/partials/Lista/ListaComponent';
import { Template } from '../../components/partials/template';
import UserPhoto from '../../assets/media/Person.jpg';
import api from '../../services/api';
import { Header } from '../../components/partials/header/header';

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
    const [lista, setLista] = useState([]);
    const { state } = useLocation();
    const { data } = state;
    const buscar = () => {
        api.get('fila', { params: { id: data.id } }).then((response) => {
            setLista(response.data);
        });
    };
    useEffect(() => {
        buscar();
    }, []);
    return (
        <Template>
            <Header />
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
                {lista &&
                    lista.map((response, ind) => {
                        console.log(response.tempo_medio);
                        return (
                            <ListaComponentizada
                                photo={UserPhoto}
                                nome={response.nome}
                                fila={ind + 1}
                                tempo={response.tempo_medio}
                            />
                        );
                    })}
            </AreaTotal>
        </Template>
    );
};
