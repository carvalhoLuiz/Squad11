import React from 'react';
import { Template } from '../../components/partials/template';
import { GameCard } from '../../components/partials/gameCards/gameCards';
import { Container } from './StyledHomeView';
import { Header } from '../../components/partials/header/header';
import Mesa from '../../assets/media/Mesa.png';
import Play from '../../assets/media/Play.png';
import Uno from '../../assets/media/Uno2.png';
import Zelda from '../../assets/media/Zelda.png';

export const HomeView = () => {
    return (
        <Template>
            <Header />
            <Container>
                <GameCard
                    name="Mesa de Ping-Pong e Sinuca"
                    image={Mesa}
                    fila="X Pessoas"
                    duracao="X Minutos"
                />
            </Container>
            <Container>
                <GameCard
                    name="Playstation"
                    image={Play}
                    fila="X Pessoas"
                    duracao="X Minutos"
                />
            </Container>
            <Container>
                <GameCard
                    name="Uno"
                    image={Uno}
                    fila="X Pessoas"
                    duracao="X Minutos"
                />
            </Container>
            <Container>
                <GameCard
                    name="Zelda"
                    image={Zelda}
                    fila="X Pessoas"
                    duracao="X Minutos"
                />
            </Container>
        </Template>
    );
};
