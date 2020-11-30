import React, { useState, useEffect } from 'react';
import { Template } from '../../components/partials/template';
import { GameCard } from '../../components/partials/gameCards/gameCards';
import api from '../../services/api';
import { Container } from './StyledHomeView';
import Mesa from '../../assets/media/Mesa.png';
import Play from '../../assets/media/Play.png';
import Uno from '../../assets/media/Uno2.png';
import Zelda from '../../assets/media/Zelda.png';

export const HomeView = () => {
    const [jogo, setJogo] = useState([]);
    const [fila, setFila] = useState([]);

    const buscar = () => {
        api.get('/filaz').then((response) => {
            setFila(response.data);
        });
        api.get('/jogo').then((response) => {
            setJogo(response.data);
        });
    };

    useEffect(() => buscar(), []);
    return (
        <Template>
            {jogo &&
                fila &&
                jogo.map((response, ind) => {
                    return (
                        <Container>
                            <GameCard
                                name={response.nome_jogo}
                                image={Mesa}
                                fila={`${fila.player[ind]} Pessoas na sua frente`}
                                duracao={`${fila.time[ind]} minutos de espera`}
                            />
                        </Container>
                    );
                })}
        </Template>
    );
};
