import React from 'react';
import { Header } from '../../components/header/header';
import { Container } from './StyledHomeView';

export const HomeView = () => {
    return (
        <Container>
            <Header active="jogos" />
        </Container>
    );
};
