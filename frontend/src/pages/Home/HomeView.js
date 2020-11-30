import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Template } from '../../components/partials/template';
import { GameCard } from '../../components/partials/gameCards/gameCards';
import api from '../../services/api';
import { Container } from './StyledHomeView';
import { Header } from '../../components/partials/header/header';
import Mesa from '../../assets/media/Mesa.png';
import Padrao from '../../assets/media/Control.png';
import Play from '../../assets/media/Play.png';
import Uno from '../../assets/media/Uno2.png';
import Zelda from '../../assets/media/Zelda.png';

export const HomeView = () => {
    const [jogo, setJogo] = useState([]);
    const [fila, setFila] = useState([]);
    const history = useHistory();

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
            <Header />

            {jogo &&
                fila &&
                jogo.map((response, ind) => {
                    const data = { id: response.id_jogo };
                    const atualizaFila = () => {
                        api.put('/filas', null, { params: { id: data.id } });
                        api.put('/fila', null, { params: { id: data.id } });
                    };
                    setInterval(atualizaFila(), 180000);

                    return (
                        <Container>
                            <GameCard
                                name={response.nome_jogo}
                                image={Padrao}
                                fila={`${
                                    fila.id ? fila.player[ind] : '0'
                                } Pessoas na sua frente`}
                                duracao={`${
                                    fila.id ? fila.time[ind] : '0'
                                } minutos de espera`}
                                func1={() => {
                                    api.post('/fila', data).then(() => {
                                        history.push('/jogos', {
                                            data: { id: response.id_jogo },
                                        });
                                    });
                                }}
                                func2={() => {
                                    history.push('/jogos', {
                                        data: { id: response.id_jogo },
                                    });
                                }}
                            />
                        </Container>
                    );
                })}
        </Template>
    );
};
